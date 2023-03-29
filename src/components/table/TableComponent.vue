<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import {
  MDBTable,
  MDBBtn,
  MDBBadge
} from 'mdb-vue-ui-kit';
import { PhTrophy } from '@phosphor-icons/vue';
export default defineComponent({
  name: "TableComponent",
  components: {
    TitleOutsideComponent,
    DescriptionComponent,
    MDBTable,
    PhTrophy
  },
  props: {
    title:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    header: {
      type: Array,
      required: false
    },
    body: {
      type: Array,
      required: false
    }
  }
})
</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent :title="title">
      <template v-slot:icon>
        <slot name=icon />
      </template>
    </TitleOutsideComponent>

    <DescriptionComponent :description="description" />

    <MDBTable hover class="align-middle text-center">
      <thead class="table-header">
        <tr>
          <th scope="col" v-for="(column, index) in header" :key="index">{{ column }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(data, indexData) in body" :key="`${indexData}_${data}`">
          <td v-for="(item, indexItem) in data" :key="`${indexItem}_${item}`">{{ item }}</td>
        </tr>
      </tbody>
    </MDBTable>
  </div>
</template>

<style scoped>
table {
  margin-bottom: 0;
  border-collapse: collapse;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  overflow: hidden;
}

th {
  padding: 15px;
}

</style>