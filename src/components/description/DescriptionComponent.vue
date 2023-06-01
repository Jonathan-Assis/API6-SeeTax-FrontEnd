<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="description st-bg-white-primary st-space-item">
    <p class="st-table-description">
      {{ description }}
    </p>
    <div class="description-slot">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.description {
 /*  height: 4rem; */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
.description-slot {
  display: flex;
  align-items: flex-end;
  width: inherit;
  max-width: 20%;
}
</style>
