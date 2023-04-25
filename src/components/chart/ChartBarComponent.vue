<script setup lang="ts">
/* import Chart, { type ChartConfiguration, type ChartData, type ChartItem } from 'chart.js'; */
import { onMounted } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, type ChartData, type ChartConfiguration, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

import { tipoPessoa } from '@/constants'
import { ref } from 'vue';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';

const pessoa = ref([])
const pessoaNome = ref([])
const grupo = ref([])
const grupoNome = ref([])

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, )
const chartData = ref({
    labels: [],
    datasets: []
})
const chartOptions = ref({

})


async function getSelects() {
    const resp = await fetch(`https://olinda.bcb.gov.br/olinda/servico/Informes_ListaValoresDeServicoBancario/versao/v1/odata/GruposConsolidados?$top=100&$format=json`)
    await resp.json()
        .then((data) => {
            grupo.value = data.value
            data.value.forEach(value => grupoNome.value.push(value.Nome))
        })
    tipoPessoa.forEach((v) => {
        pessoaNome.value.push(v.type)
        pessoa.value.push(v)
    })
}

async function getMinMedMax(person: string, group: string, onMounted?: boolean) {
    const resp = await fetch(`https://olinda.bcb.gov.br/olinda/servico/Informes_ListaValoresDeServicoBancario/versao/v1/odata/ListaValoresServicoBancario(PessoaFisicaOuJuridica=@PessoaFisicaOuJuridica,CodigoGrupoConsolidado=@CodigoGrupoConsolidado)?@PessoaFisicaOuJuridica='${person}'&@CodigoGrupoConsolidado='${group}'&$top=100&$format=json`)
    await resp.json()
        .then(data => {
            let dados = data.value
            const labels = dados.map(dado => {
                const label = dado.NomeServico
                return label
            })
            const valorMinimo = dados.map(dado => {
                return dado.ValorMinimo
            })
            const valorMedia = dados.map(dado => {
                return dado.ValorMedio
            })
            const valorMaximo = dados.map(dado => {
                return dado.ValorMaximo
            })
            const periodicidadeValorMinimo = dados.map(dado => {
                return { label: dado.NomeServico, periodicidade: dado.PeriodicidadeValorMinimo }
            })
            const periodicidadeValorMaximo = dados.map(dado => {
                return { label: dado.NomeServico, periodicidade: dado.PeriodicidadeValorMaximo }
            })

            chartData.value = {
                labels: labels,
                datasets: [
                    {
                        label: 'Mínimo',
                        indexAxis: 'y',
                        backgroundColor: '#00ed64',
                        borderColor: '#00ed64',
                        data: valorMinimo,
                        borderRadius: 100,
                    },
                    {
                        label: 'Média',
                        indexAxis: 'y',
                        backgroundColor: '#FFB300',
                        borderColor: '#FFB300',
                        data: valorMedia,
                        borderRadius: 100
                    },
                    {
                        label: 'Máximo',
                        indexAxis: 'y',
                        backgroundColor: '#3A57E8',
                        borderColor: '#3A57E8',
                        data: valorMaximo,
                        borderRadius: 100,
                    },
                ],
            }

            chartOptions.value = {
                options: {
                    scaleShowValues: true,
                   maintainAspectRatio: false,
                    scales: {
                        alignToPixels: true,
                        ticks: {
                            autoSkip: false
                        }
                    }

                },
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 10,
                        }
                    },
                },
                tooltip: {
                    callbacks: {
                        footer: (context) => {
                            if (context[0].dataset.label == 'Mínimo') {
                                const periodo = periodicidadeValorMinimo.find((value) => {
                                    return value.label === context[0].label
                                })
                                return `Periodicidade: ${periodo.periodicidade}`

                            }
                            else if (context[0].dataset.label == 'Máximo') {
                                const periodo = periodicidadeValorMaximo.find((value) => {
                                    return value.label === context[0].label
                                })

                                return `Periodicidade: ${periodo.periodicidade}`
                            }
                        }
                    }

                } 
            }

        })

}


async function searchData() {
    let person = 'F'
    let group = '01'
    if (selectedPessoa.value) {
        const pessoaChar = pessoa.value.find(a => {
            return a.type == selectedPessoa.value
        })
        person = pessoaChar.key
    }
    if (selectedGrupo.value) {
        const grupoCode = grupo.value.find(a => {
            return a.Nome == selectedGrupo.value
        })
        group = grupoCode.Codigo
    }
    getMinMedMax(person, group)
}

onMounted(() => {
    getSelects()
    getMinMedMax('F', '01', true)
})

const selectedPessoa = ref('')
const selectedGrupo = ref('')
</script>

<template>
  <div class="st-space-item st-bg-white-primary st-shadow st-rounded">
    <h4>Tarifas</h4>
    <div class="header-title-actions">
      <div class="options">
        <div class="st-select">
          Visualizar por:
          <v-select
            label="Selecionar tipo"
            class="st-select-field"
            v-model="selectedPessoa"
            :items="pessoaNome"
            single-line
            variant="solo"
            density="compact"
          ></v-select>
        </div>
        <div class="st-select">
          Grupo:
          <v-select
            v-if="grupo.length"
            class="st-select-field"
            label="Selecionar grupo"
            v-model="selectedGrupo"
            :items="grupoNome"
            single-line
            variant="solo"
            density="compact"
          ></v-select>
        </div>
        <v-btn @click="searchData()" class="st-btn st-rounded">
          Buscar
          <PhMagnifyingGlass :size="25" />
        </v-btn>
      </div>
    </div>
    <div class="chartContainer">
      <div class="chartContainerBody">
        <Bar :options="chartOptions" :data="chartData" class="chartBar" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.chartContainer {
  width: 100%;
  /*max-width: 80%;*/
  overflow-x: scroll;
}

.chartContainerBody {
  height: 400px;
}

.st-btn {
  display: flex;
  background-color: var(--st-color-green-0);
  padding: 0 1rem;
  min-width: 5rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
}

.st-select-field {
  min-width: 10rem;
}

.options {
  display: flex;
  width: 45rem;
  gap: 1rem;
  justify-content: flex-end;
}

.header-title-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.st-select {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.st-chart {
  height: 300px;
  width: 1000px;
}
</style>
