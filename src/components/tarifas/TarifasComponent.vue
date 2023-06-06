<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTarifasStore } from '@/stores'
import TableCommonComponent from '../table/TableCommonComponent.vue';
import { tarifasServicosHeader } from '@/constants';
import type { TPessoa } from '@/interfaces/constants'
import { PhBank, PhMagnifyingGlass, PhNewspaperClipping, PhTicket } from '@phosphor-icons/vue';
import IndicatorComponent from '../indicator/IndicatorComponent.vue';
import { watch } from 'vue';
import ChartBarComponent from '../chart/ChartBarComponent.vue';

const tarifasStore = useTarifasStore()
const {
  servicosMaxInstituicao,
  cnpjs,
  cnpj,
  tipoPessoa
} = storeToRefs(tarifasStore)

const tarifasInstituicaoHeader = ref(tarifasServicosHeader)
const props = defineProps({
  tipoPessoa: {
    type: String,
    default: 'F',
    required: false
  },
  cnpj: {
    type: String,
    default: '00000000',
    required: false
  }
})

const selectedCnpj = ref('Selecionar')

watch(selectedCnpj, () => {
  const instituicaoCode = cnpjs.value.find((a) => {
    return a.Nome == selectedCnpj.value
  })
  tarifasStore.setCNPJ(instituicaoCode?.Cnpj)
})

onMounted(() => {
  tarifasStore.setTipoPessoa(props.tipoPessoa as TPessoa)
  if(!servicosMaxInstituicao.value.length){
    searchData()
  }
})

async function searchData(){
  await tarifasStore.getMaxServicosPorInstituicao(tipoPessoa.value, cnpj.value)
}

</script>

<template>
    <TableCommonComponent
      title="Tarifas por instituição"
      description="Serviços oferecidos pelos bancos, valor máximo cobrado de tarifa por utilização"
      :headerData="tarifasInstituicaoHeader"
      :bodyData="servicosMaxInstituicao"
    >
      <template v-slot:icon>
        <PhTicket :size="34" class="st-icon-red" weight="duotone" />
      </template>
      <template v-slot:select>
        <div class="st-slot-select">
          <div>
            <PhBank :size="32" class="st-icon-gray" weight="duotone"/>
            Selecione a Instituição:
            <v-select
              class="st-table-search"
              label="Selecione um grupo"    
              single-line
              v-model="selectedCnpj"
              :items="cnpjs.map(e => e.Nome)"
              variant="solo"
              density="compact"
              hide-details="true"
            ></v-select>
          </div>
          <v-btn @click="searchData()" class="st-btn st-rounded">
            Buscar
            <PhMagnifyingGlass :size="25" />
          </v-btn>
        </div>
      </template>
    </TableCommonComponent>

    <ChartBarComponent
        title="Tarifas por Serviço"
        description="Gráfico de tarifas por serviço"
    />

    <IndicatorComponent />
</template>

<style scoped>
.st-slot-select {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}
</style>