<script lang="ts">
import { defineComponent } from 'vue'
import { collapsed, toggleSidebar, sidebarWidth } from './SideBarState'
import SideBarNav from './SideBarNav.vue'
import { PhArrowLeft, PhSquaresFour, PhPackage, PhTicket } from '@phosphor-icons/vue'

export default defineComponent({
  name: 'SideBarComponent',
  components: {
    SideBarNav,
    PhArrowLeft,
    PhSquaresFour,
    PhPackage,
    PhTicket
  },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth
    }
  }
})
</script>

<template>
  <div class="sidebar st-shadow" :style="{ width: sidebarWidth }">
    <div class="container-nav">
      
      <div> 
        <div class="d-flex align-items-center justify-content-between">
          <h5 :class="{isHide: collapsed}" class="st-text-secondary">Página Inicial</h5>
          <span class="collapse-icon scape-outside st-bg-green" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <PhArrowLeft :size="23" color="#fff" weight="bold" />
          </span>
        </div>
        <div class="navigation" :class="{isHide: collapsed}">
          <SideBarNav to="/" :notArrow="true">
            <template v-slot:icon>
              <PhSquaresFour :size="32" class="sidebar-icon-color" weight="duotone" />
            </template>
            <template v-slot:title>
              Dashboard
            </template>
          </SideBarNav>
        </div>
      </div>
      
      <h5 :class="{isHide: collapsed}" class="st-text-secondary">Visualizar</h5>
      <div class="navigation" :class="{isHide: collapsed}">
        <SideBarNav to="/filtrar/tarifas">
          <template v-slot:icon>
            <PhTicket :size="32" class="sidebar-icon-color" weight="duotone" />
          </template>
          <template v-slot:title>
            Tarifas
          </template>
        </SideBarNav>
        <SideBarNav to="/filtrar/pacotes">
          <template v-slot:icon> 
            <PhPackage :size="32" class="sidebar-icon-color" weight="duotone" />
          </template>
          <template v-slot:title>
            Pacotes
          </template>
        </SideBarNav>
      </div>
      
    </div>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #FFFFFF;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>


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
  background-color: var(--sidebar-bg-color);

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
