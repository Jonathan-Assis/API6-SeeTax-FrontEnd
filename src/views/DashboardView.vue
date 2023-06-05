<script setup lang="ts">
import { ref, onMounted } from 'vue'

import HeaderComponent from '../components/header/HeaderComponent.vue'
import RankingComponent from '@/components/ranking/RankingComponent.vue'
import TarifasComponent from '@/components/tarifas/TarifasComponent.vue'
import { useTarifasStore } from '@/stores'
import HeaderNav from '@/components/header/HeaderNav.vue'

const tipoPessoa = ref('F')
const cnpj = ref('92702067')

const tarifasStore = useTarifasStore()
onMounted(() => {
  tarifasStore.getMinMedMaxServicos()
})
</script>

<template>
  <HeaderComponent>
    <HeaderNav to="/dashboard" routerName="Dashboard" :actualRoute="true" />
  </HeaderComponent>

  <div class="st-container-view-center">
    <RankingComponent hideFooter />
    
    <TarifasComponent
      :tipoPessoa="tipoPessoa"
      :cnpj="cnpj"
    />

  </div>
</template>
