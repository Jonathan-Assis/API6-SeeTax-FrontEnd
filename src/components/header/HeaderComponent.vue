<script setup lang="ts">
import { MDBBreadcrumb } from 'mdb-vue-ui-kit'
</script>

<template>
  <header class="header-container">
    <div class="st-header">
      <div class="title-logotipe">
        <router-link to="/" routerName="Página Inicial">
          <img src="../../assets/logotype/SeeTax.png" class="st-logotype-seetax" />
        </router-link>
      </div>
    </div>
    <MDBBreadcrumb :style="{'margin-bottom': 0}">
      <slot />
    </MDBBreadcrumb>
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
  flex-direction: row;
  align-items: center;
  gap: 20px;
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
</style>
