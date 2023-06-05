<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useTarifasStore } from '@/stores'
import { PhTrendUp } from '@phosphor-icons/vue'
import { storeToRefs } from 'pinia'
import IndicatorCard from './IndicatorCard.vue'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import type { ITarifasServicosMinMedMaxValue } from '@/interfaces/services';

const tarifasStore = useTarifasStore()
const { servicosMinMedMax } = storeToRefs(tarifasStore)

onMounted(()=>{
  tarifasStore.getMinMedMaxServicos()
})

const menorValorMinimo = computed<ITarifasServicosMinMedMaxValue>(() => {
  return servicosMinMedMax.value.reduce((menor, atual) => {
    return atual.ValorMinimo < menor.ValorMinimo ? atual : menor;
  })
})

const maiorValorMaximo = computed<ITarifasServicosMinMedMaxValue>(() => {
  return servicosMinMedMax.value.reduce((maior, atual) => {
    return atual.ValorMaximo > maior.ValorMaximo ? atual : maior;
  })
})

const menorValorMedio = computed<ITarifasServicosMinMedMaxValue>(() => {
  return servicosMinMedMax.value.reduce((menor, atual) => {
    return atual.ValorMedio < menor.ValorMedio ? atual : menor;
  })
})

const maiorValorMedio = computed<ITarifasServicosMinMedMaxValue>(() => {
  return servicosMinMedMax.value.reduce((maior, atual) => {
    return atual.ValorMedio > maior.ValorMedio ? atual : maior;
  })
}) 

</script>

<template>

  <div v-if="servicosMinMedMax.length > 0">
    <TitleOutsideComponent
      title="Indicadores de tarifas"
    >
      <PhTrendUp :size="32" class="st-icon-blue" weight="duotone" />
    </TitleOutsideComponent>

    <div class="indicator-grid">
      <IndicatorCard 
        kind="menor"
        :service="menorValorMinimo.NomeServico"
        :periodic="menorValorMinimo.PeriodicidadeValorMinimo"
        :value='menorValorMinimo.ValorMinimo'
      />

      <IndicatorCard 
        kind="maior"
        :service="maiorValorMaximo.NomeServico"
        :periodic="maiorValorMaximo.PeriodicidadeValorMaximo"
        :value='maiorValorMaximo.ValorMaximo'
      />

      <IndicatorCard 
        kind="menor-media"
        :service="menorValorMedio.NomeServico"
        :value='menorValorMedio.ValorMedio'
      />

      <IndicatorCard
        kind="maior-media"
        :service="maiorValorMedio.NomeServico"
        :value='maiorValorMedio.ValorMedio'
      /> 
    </div>
  </div>
</template>

<style scoped>
.indicator-title {
  display: flex;
  gap: 12
}
.indicator-grid {
  max-width: 100%;
  padding: 0.5rem 0;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
}
</style>
