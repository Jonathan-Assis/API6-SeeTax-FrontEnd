<script setup lang="ts">
import { MDBBreadcrumb } from 'mdb-vue-ui-kit'
import { ref, computed, onMounted } from 'vue'
import { PhBank, PhMagnifyingGlass, PhUserSwitch } from '@phosphor-icons/vue';

import { sidebarWidth } from '@/components/sidebar/SideBarState'
import { tipoPessoa as pessoas } from '@/constants'
import { useTarifasStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import type { TPessoa } from '@/interfaces/constants';

const tarifasStore = useTarifasStore()
const {
  grupos,
  grupo,
  tipoPessoa
} = storeToRefs(tarifasStore)

onMounted(() => {
  if(!infoRoute.value){
    tarifasStore.getInitialProps()
  } 
})

const route = useRoute()
const infoRoute = computed<boolean>(() => route.path === '/')
const dashboard = computed<boolean>(() => route.path === '/dashboard')

const selectedTipoPessoa = ref('Pessoa Física')
const selectedGrupo = ref('Bancos privados')

watch(selectedTipoPessoa, () => {
  const tipoPessoaCode = pessoas.find((a) => {
    return a.type == selectedTipoPessoa.value
  })
  tarifasStore.setTipoPessoa(tipoPessoaCode?.key as TPessoa)
})

watch(selectedGrupo, () => {
 
  const grupoCode = grupos.value.find((a) => {
    return a.Nome == selectedGrupo.value
  })
  tarifasStore.setGrupo(grupoCode?.Codigo as string)
})

async function searchData(){
  await tarifasStore.getCNPJ(grupo.value)
  await tarifasStore.getMinMedMaxServicos(tipoPessoa.value,grupo.value)
}

</script>

<template>
  <header class="header-container" >
    <div class="st-header" :style="{ 'margin-right': sidebarWidth }">
      <div class="title-logotipe">
        <router-link to="/" routerName="Página Inicial">
          <img src="../../assets/logotype/SeeTax.png" class="st-logotype-seetax" />
        </router-link>
        <MDBBreadcrumb v-if="!infoRoute" :style="{'margin-bottom': 0}">
        <slot />
      </MDBBreadcrumb>
      </div>

      <div class="header-title-actions" v-if="(grupos.length && !infoRoute)">
        <div v-if='grupos.length'>
          <PhBank :size="32" class="st-icon-gray" weight="duotone"/>
          Selecione o Grupo Consolidado:
          <v-select
            class="st-select-field"
            label="Selecione um grupo"
            v-model="selectedGrupo"
            :items="grupos.map((e) => e.Nome)"
            single-line
            variant="solo"
            density="compact"
            hide-details="true"
          ></v-select>
        </div>

        <div v-if="dashboard">
          <PhUserSwitch :size="32" class="st-icon-gray" weight="duotone"/>
          Selecione o tipo de Pessoa:
          <v-select
            class="st-select-field"
            label="Selecionar grupo"
            ref="selectedPessoa"
            v-model="selectedTipoPessoa"
            :items="pessoas.map((e) => e.type)"
            single-line
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
     
    </div>
  </header>
</template>

<style scoped>
.header-container {
  position:fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  padding: 0.5em 2em;
  background-color: #fff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.st-logotype-seetax {
  width: 100%;
  max-width: 180px;
  height: auto;
  object-fit: contain;
}
.title-logotipe {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.st-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.search-container {
  width: 100%;
  max-width: 180px;
}


.header-title-actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
}

.st-select {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
