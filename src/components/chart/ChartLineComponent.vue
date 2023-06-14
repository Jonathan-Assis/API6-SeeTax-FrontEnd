<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Line } from 'vue-chartjs'
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
  PointElement,
  LineElement,
} from 'chart.js'

import { PhMagnifyingGlass, PhNewspaperClipping } from '@phosphor-icons/vue'
import { useTarifasStore } from '@/stores'
import { storeToRefs } from 'pinia'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LogarithmicScale, PointElement, LineElement)

async function getDatas() {
  let dados = previsao.value
 
  const labels = dados.map(label => label.data)
  const dataset = dados.map(value => parseFloat(value.valor_max))

  chartLineData.value = {
    labels: labels,
    datasets: [
      {
        label: 'Previsão de tarifa',
        borderColor: '#3A57E8',
        data: dataset,
      }
    ]
  }
}

const tarifasStore = useTarifasStore()
const { 
  servicos,
  servico,
  cnpj,
  previsao,
  instituicoesDB
} = storeToRefs(tarifasStore)

onMounted(() => {
  if(!previsao.value.length){
    searchData()
  }
  IADataResponse()
})

async function searchData() {
  await tarifasStore.getPrevisao({cnpj: cnpj.value, servico: servico.value})
  .then(() => getDatas())
}

const selectedServico = ref('Extrato de Conta')
const selectedCnpj = ref('CAIXA ECONOMICA FEDERAL')

watch(selectedServico, () => {
  const servicoCode = tarifasStore.servicos.find((a) => {
    return a.Nome == selectedServico.value
  })
  tarifasStore.setServico(servicoCode?.Codigo)
})


watch(selectedCnpj, () => {
  const instituicaoCode = tarifasStore.instituicoesDB.find((a) => {
    return a.Nome == selectedCnpj.value
  })
  tarifasStore.setCNPJ(instituicaoCode?.Cnpj)
})

const IADataResponse =() => {

  const data = [
    {
      "data":"mar/23",
      "valor_max":"35.0"
    },
    {
      "data":"abr/23",
      "valor_max":"35.0"
    },
    {
      "data":"mai/23",
      "valor_max":"36.5"
    },
    {
      "data":"jun/23",
      "valor_max":"36.88"
    },
  ]
  chartLineData.value = {
    labels:data.map(label => label.data),
    datasets: [
      {
        label: 'Previsão',
        borderColor: '#3A57E8',
        data: data.map(value => parseFloat(value.valor_max))
      }
    ]
  }
}

const chartLineData = ref<ChartData>({
  labels: [],
  datasets: []
})
const chartLineOptions = ref<ChartOptions>({
  responsive:true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
})

</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent title="Previsão de tarifas">
      <PhNewspaperClipping :size="34" class="st-icon-yellow" weight="duotone" />
    </TitleOutsideComponent>
    
    <div class="st-shadow">
      <DescriptionComponent description="Gráfico de previsão de tarifas por serviço">
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
            <div>
              <PhNewspaperClipping  :size="32" class="st-icon-gray" weight="duotone" />
              Instituição:
              <v-select
                v-if="instituicoesDB.length"
                class="st-select-field"
                label="Selecionar Instituição"
                v-model="selectedCnpj"
                :items="instituicoesDB.map((e) => e.Nome)"
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
            <Line :options="chartLineOptions" :data="chartLineData" class="chartBar" />
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
