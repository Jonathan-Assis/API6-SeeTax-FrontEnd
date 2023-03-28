<script lang="ts">
import { defineComponent, ref } from 'vue'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import {
    MDBTable,
    MDBBtn,
    MDBBadge
  } from 'mdb-vue-ui-kit';

export default defineComponent({
    name: 'TableComponent',
    components:{
        TitleOutsideComponent,
        MDBTable,
        DescriptionComponent
    },
    setup(props) {
      const header = ref([
      'Posição',
      'Banco',
      'Tipo',
      'Data de Atualização',
      'Média de Tarifas'
      ])

      const body = ref([
        {
          banco: 'Itaú Unibanco S.A.',
          tipo: 'Conta Poupança',
          dataAtualizado: '20/03/2023 12:00',
          media: '3,000'
        },
        {
          banco: 'Banco Itaúcard S.A.',
          tipo: 'Conta Pagamento Pre Pago',
          dataAtualizado: '20/03/2023 12:00',
          media: '3,000'
        },
        {
          banco: 'Itaú Unibanco S.A.',
          tipo: 'Conta Poupança',
          dataAtualizado: '20/03/2023 12:00',
          media: '3,000'
        },
      ])
        return {
          header
        }
    },
})
</script>

<template>
  <div class="table-container">
    <DescriptionComponent title="Comparativo das menores tarifas" />
    <MDBTable hover class="align-middle text-center">
      <thead class="table-header">
        <tr>
          <th scope="col" v-for="(column, index) in header" :key="index">{{ column }}</th>
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
  </div>
</template>

<style scoped>
table{
  margin-bottom:0;
  border-collapse: collapse;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  overflow: hidden;
}
.table-container {
/*   border: 2px solid #fff;
 */  border-radius: 4px;
}

th {
  padding: 15px;

}
.table-header {
    background-color: #F5F6FA;
}

</style>