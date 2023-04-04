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
    {{ description }}
  </div>
</template>

<style scoped>
.description {
  height: 4rem;
  display: flex;
  align-items: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
</style>
