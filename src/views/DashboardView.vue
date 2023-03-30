<script lang="ts">
import { defineComponent, ref } from 'vue'
import { PhTrophy, PhTicket, PhPackage } from '@phosphor-icons/vue'
import {VDataTable} from 'vuetify/labs/VDataTable';

import HeaderComponent from '../components/header/HeaderComponent.vue';
import TableComponent from '../components/table/TableComponent.vue'
import TableRanking from '../components/table/TableRanking.vue';
import TableTarifas from '../components/table/TableTarifas.vue';
import TablePacotes from '../components/table/TablePacotes.vue';

export default defineComponent({
    name: 'DashboardView',
    components: {
        VDataTable,
        HeaderComponent,
        TableComponent,
        TableRanking,
        TableTarifas,
        TablePacotes,
        PhTicket,
        PhPackage,
    },
    data () {
      return {
        itemsPerPage: 5,
        headers: [
          {
            title: 'Dessert (100g serving)',
            key: 'name',
          },
          { title: 'Calories', key: 'calories' },
          { title: 'Fat (g)', key: 'fat' },
          { title: 'Carbs (g)', key: 'carbs' },
          { title: 'Protein (g)', key: 'protein' },
          { title: 'Iron (%)', key: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22',
          },
        ],
      }
    }
   // setup() {
       /*  const header = ref([
            "Posição",
            "Banco",
            "Tipo",
            "Data de Atualização",
            "Média de Tarifas"
        ]);
        const body = ref([
            {
                posicao: 1,
                banco: "Itaú Unibanco S.A.",
                tipo: "Conta Poupança",
                dataAtualizado: "20/03/2023 11:00",
                media: "1,000"
            },
            {
                posicao: 2,
                banco: "Banco Itaúcard S.A.",
                tipo: "Conta Pagamento Pre Pago",
                dataAtualizado: "20/03/2023 12:00",
                media: "2,000"
            },
            {
                posicao: 3,
                banco: "Itaú Unibanco S.A.",
                tipo: "Conta Poupança",
                dataAtualizado: "20/03/2023 14:00",
                media: "4,000"
            },
            {
                posicao: 4,
                banco: "Unibanco S.A.",
                tipo: "Conta",
                dataAtualizado: "20/03/2023 15:00",
                media: "5,000"
            },
        ]);

        const columns = [
  { data: 'posicao' },
  { data: 'banco' },
  { data: 'tipo' },
  { data: 'dataAtualizado' },
  { data: 'media' },
]; */

/* 
const itemsPerPage = ref(5)

       const desserts= ref([
       {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        ])

        const header = ref([
       {
            title: 'Dessert (100g serving)',
            align: 'start',
            key: 'name',
          },
          { title: 'Calories', key: 'calories' },
          { title: 'Fat (g)', key: 'fat' },
          { title: 'Carbs (g)', key: 'carbs' },
          { title: 'Protein (g)', key: 'protein' },
          { title: 'Iron (%)', key: 'iron' },
        ])


        return {
            header,
            itemsPerPage,
            desserts,
        } 
    }*/
})


</script>

<template>
    <HeaderComponent :isDashboard="true" />
    <VDataTable
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    class="elevation-1"
    density="compact"
    item-key="name"
>

</VDataTable>
    <div class="container-list">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="table-responsive">
                    <!-- <DataTable
                        :data="body"
                        :columns="columns"
                        class="table table-striped tabled-bordered display"
                        :options="{autoWidth:false, dom: 'Bfrtip', language: {
                            search: 'Pesquisar',
                            zeroRecords:'Não há registros para exibir',
                            info: 'Mostrando _START_ de _END_ de _TOTAL_ registros.',
                            infoFiltered: '(Filtrando de _MAX_ registros.)',
                            paginate: {
                                first: 'Primeiro',
                                previous: 'Anterior',
                                next: 'Próximo',
                                last: 'Último'
                            }
                            }     
                        }"
                    >
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Banco</th>
                            <th>Tipo</th>
                            <th>Data</th>
                            <th>Média</th>
                        </tr>
                    </thead>

                    </DataTable> -->
                </div>
            </div>
        </div>

        <TableRanking />

        <TableTarifas />

        <TablePacotes />
    </div>
</template>

