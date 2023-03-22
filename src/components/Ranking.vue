<template>
  <div>
    <font-awesome-icon :icon="['fas', 'trophy']" style="height: 20px; width: 1050px;" />
    <h1 class="text-center">Ranking</h1>
  </div>
  <td>
  <th style="font-size: 20px; color: black;">Comparativo das menores tarifas</th>
  </td>
  <MDBTable class="align-middle mb-5 bg-white">
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
        <div class="d-flex align-items-center">
          <img src="@/assets/icons/bank.png" alt="" style="width: 25px; height: 25px" />

          <div class="ms-3">
            <p class="fw-bold mb-1">Itaú Unibanco S.A.</p>
          </div>
        </div>
        <td>
          <div class="tipo">
            Conta Poupança
          </div>
        </td>
        <td>
          <div class="data">
            20/03/2023  12:00
          </div>
        </td>
        <td>
          <div class="média">
            R$ 3,00
          </div>
        </td>
        <td>
          <div class="quantidade">
            57
          </div>
        </td>
      </tr>



      <tr>
        <td>
          <div class="posicoes">
            2º
          </div>
        </td>
        <div class="d-flex align-items-center">
          <img src="@/assets/icons/bank.png" alt="" style="width: 25px; height: 25px" />
          <div class="ms-3">
            <p class="fw-bold mb-1">Banco Itaúcard S.A</p>
          </div>
        </div>
        <td>
          <div class="tipo">
            Conta Pagamento Pré Pago
          </div>
        </td>
        <td>
          <div class="data">
            20/03/2023  12:00
          </div>
        </td>
        <td>
          <div class="média">
            R$ 3,10
          </div>
        </td>
        <td>
          <div class="quantidade">
            30
          </div>
        </td>
      </tr>



      <tr>
        <td>
          <div class="posicoes">
            3º
          </div>
        </td>
        <div class="d-flex align-items-center">
          <img src="@/assets/icons/bank.png" alt="" style="width: 25px; height: 25px" />
          <div class="ms-3">
            <p class="fw-bold mb-1">Lorem Ipsum</p>
          </div>
        </div>
        <td>
          <div class="tipo">
            Conta Corrente
          </div>
        </td>
        <td>
          <div class="data">
            20/03/2023  12:00
          </div>
        </td>
        <td>
          <div class="média">
            R$ 5,50
          </div>
        </td>
        <td>
          <div class="quantidade">
            25
          </div>
        </td>
      </tr>


      <tr>
        <td>
          <div class="posicoes">
            4º
          </div>
        </td>
        <div class="d-flex align-items-center">
          <img src="@/assets/icons/bank.png" alt="" style="width: 25px; height: 25px" />
          <div class="ms-3">
            <p class="fw-bold mb-1">Lorem Ipsum</p>
          </div>
        </div>
        <td>
          <div class="tipo">
            Conta Corrente
          </div>
        </td>
        <td>
          <div class="data">
            20/03/2023  12:00
          </div>
        </td>
        <td>
          <div class="média">
            R$ 5,80
          </div>
        </td>
        <td>
          <div class="quantidade">
            22
          </div>
        </td>
      </tr>


      <tr>
        <td>
          <div class="posicoes">
            5º
          </div>
        </td>
        <div class="d-flex align-items-center">
          <img src="@/assets/icons/bank.png" alt="" style="width: 25px; height: 25px" />
          <div class="ms-3">
            <p class="fw-bold mb-1">Lorem Ipsum</p>
          </div>
        </div>
        <td>
          <div class="tipo">
            Conta Corrente
          </div>
        </td>
        <td>
          <div class="data">
            20/03/2023  12:00
          </div>
        </td>
        <td>
          <div class="média">
            R$ 6,00
          </div>
        </td>
        <td>
          <div class="quantidade">
            20
          </div>
        </td>
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