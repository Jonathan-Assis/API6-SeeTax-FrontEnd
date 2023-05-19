<script setup lang="ts">
import { MDBBreadcrumbItem } from 'mdb-vue-ui-kit'

defineProps({
  to: {
    type: String,
    required: true
  },
  routerName: {
    type: String,
    required: true
  },
  actualRoute: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <MDBBreadcrumbItem class="breadcrumb-item">
    <router-link :to="to" :class="actualRoute ? 'st-text-primary' : 'st-text-secondary'">
      {{ routerName }}
    </router-link>
  </MDBBreadcrumbItem>
</template>

<style scoped>
a:hover {
  color: var(--st-bg-color-green);
}
</style>
