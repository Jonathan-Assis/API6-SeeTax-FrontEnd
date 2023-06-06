<script setup lang="ts">
import HeaderComponent from '../components/header/HeaderComponent.vue'
import RankingComponent from '@/components/ranking/RankingComponent.vue'
import TarifasComponent from '@/components/tarifas/TarifasComponent.vue'
import { useTarifasStore } from '@/stores'
import HeaderNav from '@/components/header/HeaderNav.vue'
import Loading from '@/components/loading/Loading.vue'

const tarifasStore = useTarifasStore()

</script>

<template>
  <HeaderComponent>
    <HeaderNav to="/dashboard" routerName="Dashboard" :actualRoute="true" />
  </HeaderComponent>

  <div class="st-container-view-center">
    <RankingComponent hideFooter />
    
    <TarifasComponent
      tipoPessoa="F"
      
    />
  </div>
</template>
