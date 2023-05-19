import type { Pessoa } from '@/interfaces/constants'
import ServerConnection from '@/services'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useTarifasStore = defineStore('tarifasStore', {
  state: () => ({
    grupos: [],
    instituicoes: [],
    servicos: [],
    servicosMinMedMax: [],
    servicosMaxInstituicao: [],
    servicosMaxGrupoServico: [],
    tarifas: [],
    isLoading: false
  }),
  getters: {},
  actions: {
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

        this.instituicoes = data.value
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
    async getMinMedMaxServicos(tipo: Pessoa, grupoConsolidado: string) {
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
    async getMaxServicosPorInstituicao(tipo: Pessoa, cnpj: string) {
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
