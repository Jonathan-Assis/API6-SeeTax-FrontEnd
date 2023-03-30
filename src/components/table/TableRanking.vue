<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import {VDataTable} from 'vuetify/labs/VDataTable';
import { PhBank, PhTrophy } from '@phosphor-icons/vue';
export default defineComponent({
  name: "TableRanking",
  components: {
    VDataTable,
    TitleOutsideComponent,
    DescriptionComponent,
    PhTrophy,
    PhBank
  },data () {
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
    <TitleOutsideComponent title="Ranking">
      <template v-slot:icon>
        <PhTrophy :size="34" class="st-icon-gray" weight="duotone" />
      </template>
    </TitleOutsideComponent>

    <DescriptionComponent description="Comparativo das menores tarifas" /> 

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