import type { ICNPJ, IGruposConsolidado, IPrevisao, IPrevisaoResp, IRanking, IServicos, ITarifasServicosGrupoMax, ITarifasServicosInstituicaoMax, ITarifasServicosMinMedMaxValue } from './../interfaces/services/index';
import type { IRankingBody, TPessoa } from '@/interfaces/constants'
import ServerConnection from '@/services'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useTarifasStore = defineStore('tarifasStore', {
  state: () => ({
    isLoading: false as boolean,
    tipoPessoa: 'F' as TPessoa,
    grupo: '02' as string,
    servico: '0101' as string,
    cnpj: '00360305',
    ranking: [] as IRankingBody[],
    grupos: [] as IGruposConsolidado[],
    servicos: [] as IServicos[],
    instituicoes: [],
    instituicoesDB: [] as ICNPJ[],
    previsao:[] as IPrevisaoResp[],
    cnpjs:[] as ICNPJ[],
    servicosMinMedMax: [] as ITarifasServicosMinMedMaxValue[],
    servicosMaxInstituicao: [] as ITarifasServicosInstituicaoMax[],
    servicosMaxGrupoServico: [] as ITarifasServicosGrupoMax[],
  }),
  actions: {
    async getInitialProps() {
      if(!this.grupos.length) {
        await this.getGrupoConsolidado()
      } 
      if (!this.cnpjs.length) {
        await this.getCNPJ(this.grupo)
      }
      if (!this.servicos.length) {
        await this.getServicos()
      }
      if (!this.instituicoesDB.length){
        await this.getInstituicoesFromDB()
      }
    },
    async setTipoPessoa(tipo: TPessoa='F'){
      this.tipoPessoa = tipo
    },
    async getRanking(servico:string){
      let rank:IRankingBody[] = []
      try{
        const { data } = await ServerConnection.getRanking(servico)

        data.forEach((value: IRanking)=>{
          value.instituicao.DataVigencia = dayjs(value.instituicao.DataVigencia).format('DD/MM/YYYY HH:mm')
          
          let data = {
            position: value.position,
            inst_nome: value.instituicao.inst_nome,
            Unidade: value.instituicao.Unidade,
            DataVigencia: value.instituicao.DataVigencia,
            Periodicidade: value.instituicao.Periodicidade,
            ValorMaximo: value.instituicao.ValorMaximo
          }
          rank.push(data)
        }) 
        this.ranking = rank

      } catch (e) {
        console.log(e)
      }
    },
    async setGrupo(grupo: string ='02'){
      this.grupo = grupo
    },
    async setServico(servico: string='1315'){
      this.servico = servico
    },
    async setCNPJ(cnpj: string = '00000000'){
      this.cnpj = cnpj
    },
    async getPrevisao(dados: IPrevisao ){
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getPrevisao(dados)

        this.previsao = data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getInstituicoesFromDB(){
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getInstituicoes()

        this.instituicoesDB = data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getGrupoConsolidado() {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getGrupos()

        this.grupos = data.value
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getCNPJ(grupo: string) {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getCNPJ(grupo)
        
        this.cnpjs = data.value
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getServicos() {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getServicos()

        this.servicos = data.value 
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getMinMedMaxServicos(pessoa: TPessoa, grupo: string) {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getMinMedMaxServicos(this.tipoPessoa, this.grupo)
       
        this.servicosMinMedMax = data.value
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getMaxServicosPorInstituicao(pessoa: TPessoa, cnpj: string) {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getMaxServicosPorInstituicao(pessoa, cnpj)

        data.value.map((value: any) => {
          value.DataVigencia = dayjs(value.DataVigencia).format('DD/MM/YYYY')
        })

        this.servicosMaxInstituicao = data.value
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getMaxServicosPorGrupoServico(grupo: string, servico:string) {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getMaxServicosPorGrupoServico(grupo, servico)

        this.servicosMaxGrupoServico = data.value
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
