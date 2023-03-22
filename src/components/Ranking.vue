<template>
  <div>
<font-awesome-icon :icon="['fas', 'trophy']" style="height: 20px; width: 1050px;"/>
  <h1 class="text-center">Ranking</h1>
</div>
    <MDBTable class="align-middle mb-0 bg-white">
      <thead class="bg-light">
        <td>
          <th style="font-size: 20px;">Comparativo das menores tarifas</th>
        </td>
        <tr>
          <th>Posição</th>
          <th>Banco</th>
          <th>Tipo</th>
          <th>Data de Atualização</th>
          <th>Média de Tarifas</th>
          <th>Quantidade de Serviços</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
              <div class="posicoes">
                    1º 
            </div>
          </td>
          <div class="d-flex align-items-center">
            <img src="@/assets/icons/bank.png"  alt=""
              style="width: 35px; height: 35px" />
            <div class="ms-3">
              <p class="fw-bold mb-1">Itaú Unibanco S.A.</p>
            </div>
          </div>
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    2º 
            </div>
          </td>
          <div class="d-flex align-items-center">
            <img src="@/assets/icons/bank.png"  alt=""
              style="width: 35px; height: 35px" />
            <div class="ms-3">
              <p class="fw-bold mb-1">Banco Itaúcard S.A</p>
            </div>
          </div>
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    3º 
            </div>
          </td>
          <div class="d-flex align-items-center">
            <img src="@/assets/icons/bank.png"  alt=""
              style="width: 35px; height: 35px" />
            <div class="ms-3">
              <p class="fw-bold mb-1">Lorem Ipsum</p>
            </div>
          </div>
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    4º 
            </div>
          </td>
          <div class="d-flex align-items-center">
            <img src="@/assets/icons/bank.png"  alt=""
              style="width: 35px; height: 35px" />
            <div class="ms-3">
              <p class="fw-bold mb-1">Lorem Ipsum</p>
            </div>
          </div>
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    5º 
            </div>
          </td>
          <div class="d-flex align-items-center">
            <img src="@/assets/icons/bank.png"  alt=""
              style="width: 35px; height: 35px" />
            <div class="ms-3">
              <p class="fw-bold mb-1">Lorem Ipsum</p>
            </div>
          </div>
        </tr>

      </tbody>
    </MDBTable>
  </template>
  

  <script lang="ts">
    import {
      MDBTable,
      MDBBtn,
      MDBBadge
    } from 'mdb-vue-ui-kit';
  
    export default {
      components: {
        MDBTable,
        MDBBtn,
        MDBBadge
      },
    };
  </script>

<style>
.posicoes {
    background-color: #00ED64; 
    border-radius: 4px;
    color: black;
    font-weight: bold;
    width: 35px;
    height: 35px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>