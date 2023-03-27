<script lang="ts">
import { defineComponent } from 'vue'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import {
    MDBTable,
    MDBBtn,
    MDBBadge
  } from 'mdb-vue-ui-kit';

export default defineComponent({
    name: 'TableComponent',
    components:{
        TitleOutsideComponent,
        MDBTable
    },
    setup() {
        
    },
})
</script>

<template>
    <MDBTable hover class="align-middle text-center">

    <thead class="table-header">
      <tr>
        <th scope="col">Posição</th>
        <th scope="col">Banco</th>
        <th scope="col">Tipo</th>
        <th scope="col">Data de Atualização</th>
        <th scope="col">Média de Tarifas</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry the Bird</td>
        <td>@twitter</td>
        <td>@twitter</td>
        <td>@twitter</td>
      </tr>
    </tbody>

    </MDBTable>
</template>

<style scoped>

th {
    padding: 15px;

}
.table-header {
    background-color: #F5F6FA;
}

</style>