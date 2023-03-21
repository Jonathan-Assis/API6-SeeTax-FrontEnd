<script setup lang="ts">
import TabelaBanco from './components/Tabela.vue';

</script>

<template>
  <header>
        <div class="Barra de Pesquisa">
          <input type="text" class="input" placeholder="Pesquise" />
        </div>
  </header>
  
  <body>

  <h1>Tabela de Bancos</h1>

  <table class="table" style="color: aqua;">
  <thead>
    <tr>
      <th scope="col">Posição</th>
      <th scope="col">Instituição</th>
      <th scope="col">Índice</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<!--     <tabela-banco>
      <li v-for="(banco, index) in TabelaBanco" :key="index">
        <td>{{ banco.posicao }}</td>
        <td>{{ banco.instituicao }}</td>
        <td>{{ banco.indice }}</td>
      </li>
    </tabela-banco> -->
  </body>
</template>


<style>
  .Barra de Pesquisa {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #f1f1f1;
  }
  
  .input {
    width: 300px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
  }
  
  .input:focus {
    border-color: #333;
    box-shadow: 0 0 10px #719ece;
    outline: none;
  }

  /* h1 {
    text-align: center;}

  tabela-banco {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #f1f1f1;
  } */
  table {
    border-color: #ffffff;
    width: 100%;
    color: #ffffff;
    font-family: monospace;
    font-size: 25px;
    text-align: left;
  }
  
</style>


<!-- <img alt="Nox" class="logo" src="assets/logo.png" width="150" height="150" /> -->