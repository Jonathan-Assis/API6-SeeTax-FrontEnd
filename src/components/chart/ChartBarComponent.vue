<script setup lang="ts">
/* import Chart, { type ChartConfiguration, type ChartData, type ChartItem } from 'chart.js'; */
import { onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  type ChartData,
  type ChartConfiguration,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale
} from 'chart.js'

import { tipoPessoa } from '@/constants'
import { ref } from 'vue'
import { PhMagnifyingGlass } from '@phosphor-icons/vue'
import { useTarifasStore } from '@/stores'
import { storeToRefs } from 'pinia'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import { watch } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})


const pessoa = ref([])
const pessoaNome = ref([])
const grupo = ref([])
const grupoNome = ref([])

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LogarithmicScale)
const chartData = ref({
  labels: [],
  datasets: []
})
const chartOptions = ref({})


async function getMaxServicosGrupoServico(group: string = '02', servico: string = '1101') {
  handleMaxServicosPorGrupoServico(group, servico).then(() => {
    let dados = tarifasStore.servicosMaxGrupoServico
    const labels = dados.map((dado) => {
      const label = dado.RazaoSocial
      return label
    })
    const valorMaximo = dados.map((dado) => {
      return dado.ValorMaximo
    })

    const periodicidadeValorMaximo = dados.map((dado) => {
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
          borderRadius: 100
        }
      ]
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
            }
          },
          type: 'logarithmic'
        }
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
        }
      }
    }
  })
}

async function searchData() {
  const servicoCode = tarifasStore.servicos.find((a) => {
    return a.Nome == selectedServico.value
  })
  await getMaxServicosGrupoServico(tarifasStore.grupo, servicoCode?.Codigo)
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
  return await tarifasStore.getMaxServicosPorGrupoServico(grupo, servico)
}
const selectedServico = ref('')

watch(selectedServico, () => {
  searchData()
})

</script>

<template>
  <div class="st-space-vertical">
  <TitleOutsideComponent :title="title">
    <slot name="icon" />
    </TitleOutsideComponent>
    
    <div class="st-shadow">
      <DescriptionComponent :description="description">
        <template #right>
          <!-- <v-text-field
          v-model="search"
          label="Pesquisar"
          class="st-table-search"
          variant="solo"
          density="compact"
          append-inner-icon="mdi-magnify"
          outlined
          single-line
          hide-details
        /> -->
        </template>
      </DescriptionComponent>
      <div class="st-space-item st-bg-white-primary  st-rounded">
        <div class="header-title-actions">
          <div class="options">
            <div class="st-select">
              Tipo do Serviço:
              <v-select
                v-if="servicos.length"
                class="st-select-field"
                label="Selecionar grupo"
                v-model="selectedServico"
                :items="servicos.map((e) => e.Nome)"
                single-line
                variant="solo"
                density="compact"
              ></v-select>
            </div>
          </div>
        </div>
        <div class="chartContainer">
          <div class="chartContainerBody">
            <Bar :options="chartOptions" :data="chartData" class="chartBar" />
          </div>
        </div>
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
  padding:1rem;
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
