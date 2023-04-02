<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable';
import { VPagination, VTextField } from 'vuetify/components';

import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'

export default defineComponent({
  name: "TableCommonComponent",
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
    headerData: {
      type: Array || undefined,
      required: true
    },
    bodyData: {
      type: Array,
      required: true
    },
  },
  setup(){
    const search = ref('')

    return {
      search
    }
  }
})
</script>

<template>
 <div class="st-space-vertical">
    <TitleOutsideComponent
      :title="title"
    >
      <slot name="icon" />
    </TitleOutsideComponent>

    <div class="st-shadow">
      <DescriptionComponent 
        :description="description"
      />

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
        >
        </VDataTable>
      </div>
    </div>

  </div>
</template>