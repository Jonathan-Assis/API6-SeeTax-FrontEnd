<template>
    <MDBTable class="align-middle mb-0 bg-white">
      <thead class="bg-light">
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
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    2º 
            </div>
          </td>
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    3º 
            </div>
          </td>
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    4º 
            </div>
          </td>
        </tr>
        <tr>
          <td>
              <div class="posicoes">
                    5º 
            </div>
          </td>
        </tr>

      </tbody>
    </MDBTable>
  </template>
  

  <script>
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