<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable';
import { VPagination, VTextField } from 'vuetify/components';

import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'

export default defineComponent({
  name: "TableGroupingComponent",
  components: {
    TitleOutsideComponent,
    DescriptionComponent,
    VDataTable,
    VPagination,
    VTextField
  },
  props:{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    headerData:{
      type: Array,
      required: true
    },
    bodyData: {
      type: Array,
      required: true
    },
    groupDataBy: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    const search = ref('')
    const groupBy = ref([])

    if (props.groupDataBy?.length){
      props.groupDataBy!.forEach((column:any, index:number) => {
          const key = { key: column} 
          groupBy.value.push(key)
      })
    }

    return {
      groupBy,
      search
    }
  }

})
</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent :title="title">
      <template v-slot:icon>
        <slot />
      </template>
    </TitleOutsideComponent>

    <div class="st-shadow">
      <DescriptionComponent :description="description" />

      <div class="table-responsive st-table-container st-bg-white-primary">
        <VTextField
          v-model="search"
          label="Pesquisar"
          class="st-table-search"
          variant="solo"
          density="compact"
          append-inner-icon="mdi-magnify"
          outlined
          single-line
          hide-details
        >
        </VTextField>
        <VDataTable
          :headers="headerData"
          :items="bodyData"
          :search="search"
          :groupBy="groupBy"
        >
        </VDataTable>
      </div>
    </div>

  </div>
</template>