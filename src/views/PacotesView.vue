<script setup lang="ts">
import { ref } from 'vue'
import { PhPackage } from '@phosphor-icons/vue'
import { VDataTable } from 'vuetify/labs/VDataTable';
import { VPagination, VTextField } from 'vuetify/components';

import HeaderComponent from '../components/header/HeaderComponent.vue';
import HeaderNav from '../components/header/HeaderNav.vue';
import TableCommonComponent from '../components/table/TableCommonComponent.vue';
import TableGroupingComponent from '../components/table/TableGroupingComponent.vue';
import ChartBarComponent from '@/components/chart/ChartBarComponent.vue';

const header = ref([
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

const headers = ref( [
{
  key: 'name',
  title: 'Dessert (100g serving)',
},
{ title: 'Calories', key: 'calories' },
{ title: 'Fat (g)', key: 'fat' },
{ title: 'Carbs (g)', key: 'carbs' },
{ title: 'Protein (g)', key: 'protein' },
{ title: 'Iron (%)', key: 'iron' },
])
const desserts = ref( [
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
  calories: 362,
  fat: 0.2,
  carbs: 98,
  protein: 0,
  iron: 2,
},
{
  name: 'Honeycomb',
  calories: 404,
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
{
  name: 'Ice cream sandwich',
  calories: 237,
  fat: 9.0,
  carbs: 37,
  protein: 4.3,
  iron: 1,
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
  protein: 7.5,
  iron: 45,
},
{
  name: 'Donut',
  calories: 452,
  fat: 25.0,
  carbs: 51,
  protein: 5.9,
  iron: 22,
},
{
  name: 'KitKat',
  calories: 518,
  fat: 26.0,
  carbs: 65,
  protein: 5,
  iron: 6,
},
])


const page = ref(1)
const itemsPerPage = ref(5)

const options = ref({
pageCount: desserts.value.length / itemsPerPage.value,
})

</script>

<template>
    <HeaderComponent>
        <HeaderNav to="/" routerName="Dashboard" />
        <HeaderNav to="/filtrar/pacotes" routerName="Pacotes" :actualRoute="true" />
    </HeaderComponent>
    <ChartBarComponent />

<!--     <TableGroupingComponent
        title="Pacotes de serviços"
        description="Pacotes de serviços oferecidos pelos bancos, valor mínimo e máximo cobradopela utilização dos serviços"
        :headerData="headers"
        :bodyData="desserts"
        >
    </TableGroupingComponent> -->
</template>
