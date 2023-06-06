<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { PhMagnifyingGlass, PhNewspaperClipping, PhTrophy } from '@phosphor-icons/vue';
import dayjs from 'dayjs';

import TableCommonComponent from '../table/TableCommonComponent.vue';
import { rankingHeader } from '@/constants'
import ServerConnection from '@/services';
import type { IRankingBody } from '@/interfaces/constants';
import type { IRanking } from '@/interfaces/services';

import { useTarifasStore } from '@/stores'

const tarifasStore = useTarifasStore()
const { 
  servicos,
  servico,
  ranking
} = storeToRefs(tarifasStore)

const tableHeader = ref(rankingHeader)

onMounted(() => {
  if(!ranking.value.length){
    searchData()
  }
})

defineProps({
  hideFooter: {
      type: Boolean,
      default: false
}
})
async function searchData() {
  await tarifasStore.getRanking(servico.value)
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
  <TableCommonComponent
      title="Ranking"
      description="Comparativo das menores tarifas"
      :headerData="tableHeader"
      :bodyData="ranking"
      :hideFooter="hideFooter"
  >
    <template v-slot:icon>
        <PhTrophy :size="34" class="st-icon-yellow" weight="duotone" />
    </template>
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
  </TableCommonComponent>
</template>

<style>
.st-slot-select {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}
</style>