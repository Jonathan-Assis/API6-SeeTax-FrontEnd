<script setup lang="ts">

</script>

<template>
  <header>
    <div class="container">
      <div class="columns">
        <div class="column is-8" role="form" aria-label="Barra de Pesquisa">
          <input type="text" class="input" placeholder="Pesquise" />
        </div>
      </div>
    </div>

    <div class="column is-three-quarter"> 
      <div class="columns">
        <div class="column is-2">
          <img alt="Nox" class="logo" src="assets/logo.png" width="150" height="150" />
        </div>
      </div>
    </div>

  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

</style>


<!-- <img alt="Nox" class="logo" src="assets/logo.png" width="150" height="150" /> -->