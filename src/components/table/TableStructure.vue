
<template>


    <div class="Title-Table">
       
      <h1 class="text-right" style="font-size: 20px;"> <font-awesome-icon :icon="['fas', 'ticket']" style="height: 20px; width: 20px;" /> Tarifas</h1>
    
    
     </div>
    
     <div class="Desc-Table">
    
      <th style="font-size: 16px; color: gray;">Serviços oferecidos pelos bancos, valor mínimo e máximo cobrada de tarifa de utilização.</th>
      <p> </p>
     </div>
    
    
      <MDBTable class="align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Banco</th>
            <th>Ordem de pagamento</th>
            <th>Saque Cartão Exterior</th>
            <th>Transferência entre Contas</th>
            <th>2ª Via do Cartão de Débito</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <div class="d-flex align-items-center">
                <img src="@/assets/icons/bank.png"  alt=""
                  style="width: 35px; height: 35px" />
                <div class="ms-3">
                  <p class="fw-bold mb-1">BCO BRADESCO S.A</p>
                  <p class="text-muted mb-0">Conta Corrente</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$9,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <MDBBadge badge="success" pill class="d-inline">Active</MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
                <div class="d-flex align-items-center">
                <img src="@/assets/icons/bank.png"  alt=""
                  style="width: 35px; height: 35px" />
                <div class="ms-3">
                  <p class="fw-bold mb-1">BCO DO BRASIL S.A.</p>
                  <p class="text-muted mb-0">Conta Poupança</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <MDBBadge badge="primary" pill class="d-inline">Onboarding</MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img src="@/assets/icons/bank.png"  alt=""
                  style="width: 35px; height: 35px" />
                <div class="ms-3">
                  <p class="fw-bold mb-1">ITAÚ UNIBANCO S.A.</p>
                  <p class="text-muted mb-0">Conta poupança</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <MDBBadge badge="warning" pill class="d-inline">Awaiting</MDBBadge>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img src="@/assets/icons/bank.png"  alt=""
                  style="width: 35px; height: 35px" />
                <div class="ms-3">
                  <p class="fw-bold mb-1">MERCADO PAGO IP LTDA.</p>
                  <p class="text-muted mb-0">Conta poupança</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <p class="fw-normal mb-1">Min: R$0,00</p>
              <p class="text-muted mb-0">Max: R$0,00</p>
            </td>
            <td>
              <MDBBadge badge="warning" pill class="d-inline">Awaiting</MDBBadge>
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