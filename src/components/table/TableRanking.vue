<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import { PhBank, PhTrophy } from '@phosphor-icons/vue';
import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import 'datatables.net-responsive-bs5'

import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'

DataTable.use(DataTableLib);
export default defineComponent({
  name: "TableRanking",
  components: {
    TitleOutsideComponent,
    DescriptionComponent,
    DataTable,
    PhTrophy,
    PhBank
  },
 /*  props:{

  }, */
  setup() {
    const headers = ref([
      {
        title: 'Posição',
        data: 'posicao',
      },
      { title: 'Banco', data: 'banco' },
      { title: 'Tipo', data: 'tipo' },
      { title: 'Data de atualização', data: 'data' },
      { title: 'Média de Tarifas', data: 'media' },
    ])
    const body = ref([
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
    ])
    return {
      headers,
      body
    }
  }

})
</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent title="Ranking">
      <template v-slot:icon>
        <PhTrophy :size="34" class="st-icon-gray" weight="duotone" />
      </template>
    </TitleOutsideComponent>

    <div class="st-shadow">
      <DescriptionComponent description="Comparativo das menores tarifas" />

      <div class="table-responsive st-table-container st-bg-white-primary">
        <DataTable class="table table-row-border cell-border table-hover " :data="body" :columns="headers" :options="{
          responsive: true,
          autoWidth: false,
          dom: 'Bfrtip',
          language: {
            search: 'Buscar',
            zeroRecords: 'Não há registros a serem exibidos',
            info: 'Mostrando _START_ de _END_ do total de _TOTAL_ registros.',
            infoFiltered: '(Filtrados de _MAX_ registros.)',
            paginate: {
              first: 'Primeiro',
              previous: 'Anterior',
              next: 'Próximo',
              last: 'Último'
            }
          }
        }">
        </DataTable>
      </div>
    </div>

  </div>
</template>