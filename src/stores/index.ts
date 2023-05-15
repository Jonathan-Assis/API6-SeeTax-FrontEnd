import ServerConnection from "@/services";
import { defineStore } from "pinia";

export const useTarifasStore = defineStore('tarifasStore', {
    state: () => ({
        grupos: [],
        instituicoes: [],
        servicos: [],
        tarifas: [],
        tasks: [],
        isLoading: false
    }),
    getters: {
        /* favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        } */
    },
    actions: {
        async getGrupoConsolidado() {
            try {
                this.isLoading = true
                const { data } = await ServerConnection.getGrupos()
                this.grupos = data.value
                console.log('data',this.grupos)
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },
        async getInstituicoes() {
            try {
                this.isLoading = true
                const { data } = await ServerConnection.getInstituicoes()
                
                this.instituicoes = data
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

                this.servicos = data
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },
        /* async getTasks() {
            
            this.isLoading = true
            const resp = await fetch('http://localhost:3000/tasks')
            const data = await resp.json()

            this.tasks = data
            this.isLoading = false
        },
        async addTask(task) {
            this.tasks.push(task);

            try {
                await fetch('http://localhost:3000/tasks', {
                    method: 'POST',
                    body: JSON.stringify(task),
                    headers: { 'Content-Type': 'application/json' }
                })
            } catch (error) {
                console.log(error)
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
            
            try {
                await fetch('http://localhost:3000/tasks/' + id, {
                    method: 'DELETE'
                })
            } catch (error) {
                console.log(error)
            }
        },
        async toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
            
            try {
                await fetch('http://localhost:3000/tasks/' + id, {
                    method: 'PATCH',
                    body: JSON.stringify({ isFav: task.isFav}),
                    headers: { 'Content-Type': 'application/json' }
                })
            } catch (error) {
                console.log(error)
            }
        } */
    }
})
