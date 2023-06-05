<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import { PhBank, PhNewspaperClipping } from '@phosphor-icons/vue'

const props = defineProps({
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
  hideFooter: {
    type: Boolean,
    default: false
  }
})

const search = ref('')
const dataTableRef = ref()

onMounted(()=> {
  if (props.hideFooter) {
    if(dataTableRef.value){
      const dataTableFooter = dataTableRef.value.$el.querySelector('.v-data-table-footer')
      if (dataTableFooter) {
        dataTableFooter.style.display = 'none' 
      }
    }
  }
})

</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent :title="title">
      <slot name="icon" />
    </TitleOutsideComponent>

    <div class="st-shadow">
      <DescriptionComponent :description="description">
        <template #select>
          <slot name="select" />
        </template>
        <template #right>
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
        />
        </template>
      </DescriptionComponent>

      <div class="table-responsive st-table-container st-bg-white-primary">
        <v-data-table 
          :headers="headerData"
          :items="bodyData"
          :search="search"
          no-data-text="Nenhum dado encontrado."
          ref="dataTableRef"
        >
          <template v-slot:item.position="{ item }">
            <v-chip 
              label
              class="st-mini-block-green" 
            >
              {{ item.columns.position }}º
            </v-chip>
          </template>
          <template v-slot:item.inst_nome="{ item }">
            <v-chip 
              label
              class="st-mini-block-gray" 
            >
            <PhBank :size="32" weight="duotone" />
          </v-chip>
          {{ item.columns.inst_nome }}
          </template>
          <template v-slot:item.Servico="{ item }">
            <v-chip 
              label
              class="st-mini-block-gray" 
            >
            <PhNewspaperClipping :size="32" weight="duotone" />
          </v-chip>
          {{ item.columns.Servico }}
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>