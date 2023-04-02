<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import 'datatables.net-responsive-bs5'

import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'

DataTable.use(DataTableLib);
export default defineComponent({
  name: "TableCommonComponent",
  components: {
    TitleOutsideComponent,
    DescriptionComponent,
    DataTable,
  },
  props:{
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    headerData: {
      type: Array || undefined,
      required: true
    },
    bodyData: {
      type: Array,
      required: true
    },
  },
})
</script>

<template>
 <div class="st-space-vertical">
    <TitleOutsideComponent
      :title="title"
    >
      <template v-slot:icon>
        <slot />
      </template>
    </TitleOutsideComponent>

    <div class="st-shadow">
      <DescriptionComponent 
        :description="description"
      />

      <div class="table-responsive st-table-container st-bg-white-primary">
        <DataTable
          class="table table-row-border cell-border table-hover "
          :data="bodyData"
          :columns="headerData"
          :options="{
            responsive: true,
            autoWidth: false,
            paging: false,
            ordering: false,
            info: false,
            dom: 'Bfrtip',
            language: {
              search: 'Buscar',
              zeroRecords: 'Não há registros a serem exibidos',
              info: 'Mostrando _START_ de _END_ do total de _TOTAL_ registros.',
              infoFiltered: '(Filtrados de _MAX_ registros.)',
            }
          }"
        >
        </DataTable>
      </div>
    </div>

  </div>
</template>