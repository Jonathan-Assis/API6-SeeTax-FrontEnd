import type { ICNPJ, IGruposConsolidado, IServicos, ITarifasServicosGrupoMax, ITarifasServicosInstituicaoMax, ITarifasServicosMinMedMaxValue } from './../interfaces/services/index';
import type { TPessoa } from '@/interfaces/constants'
import ServerConnection from '@/services'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useTarifasStore = defineStore('tarifasStore', {
  state: () => ({
    tipoPessoa: 'F' as TPessoa,
    grupo: '02' as string,
    grupos: [] as IGruposConsolidado[],
    servico: '1101' as string,
    instituicoes: [],
    instituicao: '92702067',
    cnpj:[] as ICNPJ[],
    servicos: [] as IServicos[],
    servicosMinMedMax: [] as ITarifasServicosMinMedMaxValue[],
    servicosMaxInstituicao: [] as ITarifasServicosInstituicaoMax[],
    servicosMaxGrupoServico: [] as ITarifasServicosGrupoMax[],
    isLoading: false as boolean
  }),
  getters: {},
  actions: {
    async setTipoPessoa(tipo: TPessoa='F'){
      this.tipoPessoa = tipo
      
      await this.getMinMedMaxServicos(tipo, this.grupo)
      await this.getMaxServicosPorInstituicao(tipo, this.instituicao)
    },
    async setGrupo(grupo: string ='02'){
      this.grupo = grupo

      await this.getMinMedMaxServicos(this.tipoPessoa, grupo)
      await this.getMaxServicosPorGrupoServico(grupo, this.servico)
    },
    async setServico(servico: string='1101'){
      this.servico = servico

      await this.getMaxServicosPorGrupoServico(this.grupo, servico)
    },
    async setInstituicao(instituicao: string = '92702067'){
      this.instituicao = instituicao

      await this.getMaxServicosPorInstituicao(this.tipoPessoa, instituicao)
    },
    async getGrupoConsolidado() {
      try {
        this.isLoading = true
        const resp = (await ServerConnection.getGrupos()).data

        this.grupos = resp
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getCNPJ(grupo: string = '02') {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getCNPJ(grupo)

        this.cnpj = data.value
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getServicos() {
      try {
        this.isLoading = true
        const resp = await (await ServerConnection.getServicos()).data

        this.servicos = resp
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getMinMedMaxServicos(tipo: TPessoa='F', grupoConsolidado: string='02') {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getMinMedMaxServicos(tipo, grupoConsolidado)
       
        this.servicosMinMedMax = data.value
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getMaxServicosPorInstituicao(tipo: TPessoa = 'F', cnpj: string = '92702067') {
      try {
        this.isLoading = true
        const { data } = await ServerConnection.getMaxServicosPorInstituicao(tipo, cnpj)

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
    async getMaxServicosPorGrupoServico(grupo: string, servico: string) {
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
