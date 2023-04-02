<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'


import { PhBank, PhPackage } from '@phosphor-icons/vue';

import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import {VDataTable} from 'vuetify/labs/VDataTable';
	
export default defineComponent({
  name: "TablePacotes",
  components: {
    TitleOutsideComponent,
    DescriptionComponent,
    VDataTable,
    PhPackage,
    PhBank
  },
  data() {
    return {
        itemsPerPage: 5,
        headers: [
          {
            title: 'Posição',
            key: 'posicao',
          },
          { title: 'Banco', key: 'banco' },
          { title: 'Tipo', key: 'tipo' },
          { title: 'Data de atualização', key: 'data' },
          { title: 'Média de Tarifas', key: 'media' },
        ],
        desserts: [
          {
            posicao: '1',
            banco: "Itaú Unibanco S.A.",
            tipo: "Conta Poupança",
            data: "20/03/2023 11:00",
            media: "1,000"
          },
          {
            posicao: '2',
            banco: "Banco Itaúcard S.A.",
            tipo: "Conta Pagamento Pre Pago",
            data: "20/03/2023 12:00",
            media: "2,000"
          },
          {
            posicao: '3',
            banco: "Itaú Unibanco S.A.",
            tipo: "Conta Poupança",
            data: "20/03/2023 14:00",
            media: "4,000"
          },
          {
            posicao: '4',
            banco: "Unibanco S.A.",
            tipo: "Conta",
            data: "20/03/2023 15:00",
            media: "5,000"
          },
        ]
      }
    }})
</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent title="Pacotes de serviços">
      <template v-slot:icon>
        <PhPackage :size="34" class="st-icon-gray" weight="duotone" />
      </template>
    </TitleOutsideComponent>

    <DescriptionComponent description="Pacotes de serviços oferecidos pelos bancos, valor mínimo e máximo cobradopela utilização dos serviços" />

    <VDataTable
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    class="elevation-1"
    density="compact"
    item-key="posicao">

   </VDataTable>
 </div>
</template>

<style>
   /*@import '../../assets/stylesheet/global.css';*/
/*  thead tr th {
    background-color: var(--st-color-gray-0) !important;
}  */
</style>

<style scoped>
/* table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  overflow: hidden;
} */
/* thead, th {
    background-color: var(--st-color-gray-0);
} */
</style>