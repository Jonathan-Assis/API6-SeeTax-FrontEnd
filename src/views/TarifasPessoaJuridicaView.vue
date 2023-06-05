<script setup lang="ts">
import HeaderComponent from '../components/header/HeaderComponent.vue'
import HeaderNav from '../components/header/HeaderNav.vue'

import TarifasComponent from '@/components/tarifas/TarifasComponent.vue'

</script>

<template>
  <HeaderComponent>
    <HeaderNav to="/dashboard" routerName="Dashboard" />
    <HeaderNav to="/filtrar/tarifas_pessoa_juridica" routerName="Pessoa Jurídica" :actualRoute="true" />
  </HeaderComponent>
  
  <div class="st-container-view-center">
    <TarifasComponent
      tipoPessoa="K"
    />
  
  </div>
</template>