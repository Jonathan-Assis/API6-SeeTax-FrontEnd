<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  type ChartData,
  type ChartOptions,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
} from 'chart.js'

import { PhMagnifyingGlass, PhNewspaperClipping } from '@phosphor-icons/vue'
import { useTarifasStore } from '@/stores'
import { storeToRefs } from 'pinia'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'

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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LogarithmicScale)

const chartData = ref<ChartData>({
  labels: [],
  datasets: []
})

const chartOptions = ref<ChartOptions>({
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
      /*  font: {
        size: 14,
        weight: 'bold'
      }, */
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
})

async function getDatas() {
  let dados = servicosMaxGrupoServico.value
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
}

const tarifasStore = useTarifasStore()
const { 
  grupo,
  servicos,
  servico,
  servicosMaxGrupoServico,

} = storeToRefs(tarifasStore)

onMounted(() => {
  if(!servicosMaxGrupoServico.value.length){
    searchData()
  }
})

async function searchData() {
  await tarifasStore.getMaxServicosPorGrupoServico(grupo.value, servico.value)
  .then(() => getDatas())
}

const selectedServico = ref('Extrato de Conta')

watch(selectedServico, () => {
  const servicoCode = tarifasStore.servicos.find((a) => {
    return a.Nome == selectedServico.value
  })
  tarifasStore.setServico(servicoCode?.Codigo)
})

</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent :title="title">
      <PhNewspaperClipping  :size="34" class="st-icon-red" weight="duotone" />
    </TitleOutsideComponent>
    
    <div class="st-shadow">
      <DescriptionComponent :description="description">
        <template #select>
          <div class="st-slot-select">
            <div>
              <PhNewspaperClipping  :size="32" class="st-icon-gray" weight="duotone" />
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
            <v-btn @click="searchData()" class="st-btn st-rounded">
              Buscar
              <PhMagnifyingGlass :size="25" />
            </v-btn>
         </div>
        </template>
      </DescriptionComponent>
      <div class="st-hr"></div>
      <div class="st-space-item st-bg-white-primary st-rounded">
        <div class="chartContainer">
          <div class="chartContainerBody m-4">
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

.st-slot-select {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.st-hr {
  height: 1px;
  background-color: #ccc;
}
.chartContainerBody {
  height: 400px;
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
