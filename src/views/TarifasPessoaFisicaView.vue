<script setup lang="ts">
import HeaderComponent from '../components/header/HeaderComponent.vue'
import HeaderNav from '../components/header/HeaderNav.vue'

import TarifasComponent from '@/components/tarifas/TarifasComponent.vue'

</script>

<template>
  <HeaderComponent>
    <HeaderNav to="/dashboard" routerName="Dashboard" />
    <HeaderNav to="/filtrar/tarifas_pessoa_fisica" routerName="Pessoa Física" :actualRoute="true" />
  </HeaderComponent>
  
  <div class="st-container-view-center">
    <TarifasComponent
      tipoPessoa="F"
    />
  
  </div>
</template>