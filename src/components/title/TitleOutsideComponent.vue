<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <slot />
    <h5>{{ title }}</h5>
  </header>
</template>

<style scoped>
header {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  gap: 12px;
}

h5 {
  color: var(--st-text-primary-black-color);
  font-weight: 600;
}
</style>
