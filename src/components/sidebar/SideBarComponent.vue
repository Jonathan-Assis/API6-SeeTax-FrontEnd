<script setup lang="ts">
import { collapsed, toggleSidebar, sidebarWidth } from './SideBarState'
import SideBarNav from './SideBarNav.vue'
import { PhArrowLeft, PhBuildings, PhPerson, PhSquaresFour} from '@phosphor-icons/vue'

</script>

<template>
  <div class="sidebar st-bg-white-primary st-shadow" :style="{ width: sidebarWidth }">
    <div class="container-nav">
      
      <div> 
        <div class="d-flex align-items-center justify-content-between">
          <router-link to="/" routerName="Página Inicial">
            <div class="pagina-inicial" :class="{isHide: collapsed}" @click="collapsed = !collapsed">
              <h5 :class="{isHide: collapsed}" class="pagina-inicial st-text-secondary">Página Inicial</h5>
            </div>
            </router-link>

          <span class="collapse-icon scape-outside st-bg-green" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <PhArrowLeft :size="23" color="#fff" weight="bold" />
          </span>
        </div>
        <div class="navigation" :class="{isHide: collapsed}">
          <SideBarNav to="/dashboard">
            <template #icon>
              <PhSquaresFour :size="32" class="sidebar-icon-color" weight="duotone" />
            </template>
            <template #title>
              Dashboard
            </template>
          </SideBarNav>
        </div>
      </div>
      
      <h5 class="st-text-secondary" :class="{isHide: collapsed}">
        Filtrar Tarifas por:
      </h5>
      <div class="navigation" :class="{isHide: collapsed}">
        <SideBarNav to="/filtrar/tarifas_pessoa_fisica">
          <template #icon>
            <PhPerson :size="32" class="sidebar-icon-color" weight="duotone" />
          </template>
          <template #title>
            Pessoa Física
          </template>
        </SideBarNav>
        <SideBarNav to="/filtrar/tarifas_pessoa_juridica">
          <template #icon>
            <PhBuildings :size="32" class="sidebar-icon-color" weight="duotone" />
          </template>
          <template #title>
            Pessoa Jurídica
          </template>
        </SideBarNav>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

.pagina-inicial:hover {
  color: var(--st-color-green-0)
}

.sidebar-icon-color{
  color: var(--st-icon-color-gray);
}

.isHide {
  visibility: hidden;
}
.container-nav {
  margin-top: 22px;
}

h5 {
  padding-left: 1em;
}
.navigation {
  padding: 0.4em;
}
.scape-outside {
  right: -19px;
}
.sidebar {
  color: #ffffff;

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
.collapse-icon {
  width: 42px;
  height: 42px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  border-radius: 100px;
  cursor: pointer;

  z-index: 10;
  position: absolute; 
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  box-shadow: 0 -2px 5px 0 rgb(0 0 0 / 16%), 0 -2px 10px 0 rgb(0 0 0 / 12%);
  transition: 0.2s linear;
}


</style>
