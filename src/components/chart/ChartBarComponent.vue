<script setup lang="ts">
/* import Chart, { type ChartConfiguration, type ChartData, type ChartItem } from 'chart.js'; */
import { onMounted } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, type ChartData, type ChartConfiguration, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LogarithmicScale } from 'chart.js'

import { tipoPessoa } from '@/constants'
import { ref } from 'vue';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
import { useTarifasStore } from '@/stores';
import { storeToRefs } from 'pinia';

const pessoa = ref([])
const pessoaNome = ref([])
const grupo = ref([])
const grupoNome = ref([])

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LogarithmicScale)
const chartData = ref({
  labels: [],
  datasets: []
})
const chartOptions = ref({

})


/* async function getSelects() {
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
} */

async function getMaxServicosGrupoServico(group: string = '02', servico: string = '1101') {
  handleMaxServicosPorGrupoServico(group, servico).then(() => {
    let dados = tarifasStore.servicosMaxGrupoServico
    const labels = dados.map(dado => {
      const label = dado.RazaoSocial
      return label
    })
    const valorMaximo = dados.map(dado => {
      return dado.ValorMaximo
    })

    const periodicidadeValorMaximo = dados.map(dado => {
      return { label: dado.RazaoSocial, periodicidade: dado.Periodicidade }
    })

    chartData.value = {
      labels: labels,
      datasets: [
        {
          label: 'Máximo',
          indexAxis: 'y',
          /* indexAxis: 'x', */
          backgroundColor: '#3A57E8',
          borderColor: '#3A57E8',
          data: valorMaximo,
          borderRadius: 100,
        },
      ],
    }

    chartOptions.value = {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Escala logarítmica',
            font: {
                size: 16,
                weight: 'bold'
            },
          },
          type: 'logarithmic',
        },
      },
      plugins: {
        legend: {
          font: {
                size: 14,
                weight: 'bold'
            },
          labels: {
            font: {
                size: 14,
                weight: 'bold'
            },
            boxWidth: 10,
            usePointStyle: true,
          pointStyle: 'circle'
          }
        },
      },
      /* tooltip: {
          callbacks: {
              footer: (context) => {
                      const periodo = periodicidadeValorMaximo.find((value) => {
                          return value.label === context[0].label
                      })

                      return `Periodicidade: ${periodo.periodicidade}`
              }
          }

      }   */
    }
  })
}


async function searchData() {
  let servico = '1101'
  let group = '02'
  if (selectedServico.value) {
    const servicoCode = tarifasStore.servicos.find(a => {
      return a.Nome == selectedServico.value
    })
    servico = servicoCode.Codigo
  }
  if (selectedGrupo.value) {
    const grupoCode = tarifasStore.grupos.find(a => {
      return a.Nome == selectedGrupo.value
    })
    group = grupoCode.Codigo
  }
  getMaxServicosGrupoServico(group, servico)
}
const tarifasStore = useTarifasStore()
const { grupos, servicos } = storeToRefs(tarifasStore)
onMounted(() => {
  tarifasStore.getGrupoConsolidado()
  tarifasStore.getServicos()
  handleMaxServicosPorGrupoServico()
  //getSelects()
  getMaxServicosGrupoServico()
})

const handleMaxServicosPorGrupoServico = async (grupo: string = '02', servico: string = '1101') => {
  return await tarifasStore.getMaxServicosPorGrupoServico(grupo, servico);
}
const selectedServico = ref('')
const selectedGrupo = ref('')
</script>

<template>
  <div class="st-space-item st-bg-white-primary st-shadow st-rounded">
    <h4>Tarifas por Serviço</h4>
    <div class="header-title-actions">
      <div class="options">
        <div class="st-select">
          Grupo Consolidado:
          <v-select v-if="grupos.length" class="st-select-field" label="Selecionar grupo" v-model="selectedGrupo"
            :items="grupos.map(e => e.Nome)" single-line variant="solo" density="compact"></v-select>
        </div>
        <div class="st-select">
          Tipo do Serviço:
          <v-select v-if="servicos.length" class="st-select-field" label="Selecionar grupo" v-model="selectedServico"
            :items="servicos.map(e => e.Nome)" single-line variant="solo" density="compact"></v-select>
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
