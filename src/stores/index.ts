import ServerConnection from "@/services";
import { defineStore } from "pinia";

export const useTarifasStore = defineStore('tarifasStore', {
    state: () => ({
        grupos: [],
        instituicoes: [],
        servicos: [],
        servicosMinMedMax: [],
        servicosMax: [],
        tarifas: [],
        isLoading: false
    }),
    getters: {
    },
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
        async getCNPJ() {
            try {
                this.isLoading = true
                const { data } = await ServerConnection.getCNPJ()

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
                console.log('data',this.servicos)
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },
        async getMinMedMaxServicos() {
            try {
                this.isLoading = true
                const { data } = await ServerConnection.getMinMedMaxServicos()
                
                this.servicosMinMedMax = data.value
                console.log('data',this.servicosMinMedMax)
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },
        async getMaxServicos() {
            try {
                this.isLoading = true
                const { data } = await ServerConnection.getMaxServicos()
                
                this.servicosMax = data.value
                console.log('data',this.servicosMax)
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },
       
    }
})
