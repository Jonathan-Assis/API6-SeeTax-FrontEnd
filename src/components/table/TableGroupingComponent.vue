<script setup lang="ts">
import { ref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable';

import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'

const props = defineProps({
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
})
const search = ref('')
const groupBy = ref([])

if (props.groupDataBy?.length){
  props.groupDataBy!.forEach((column:any, index:number) => {
      const key = { key: column} 
      groupBy.value.push(key)
  })
}

</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent :title="title">
        <slot name='icon' />
    </TitleOutsideComponent>

    <div class="st-shadow">
      <DescriptionComponent :description="description" />

      <div class="table-responsive st-table-container st-bg-white-primary">
        <v-text-field
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
        </v-text-field>
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