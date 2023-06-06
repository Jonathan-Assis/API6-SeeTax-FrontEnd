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
    <div class="st-slot-left">
      <p class="st-table-description">
        {{ description }}
      </p>
      <slot name="right"></slot>
    </div>
      <div class="description-slot">
        <slot name="select"></slot>
      
    </div>
  </div>
</template>

<style scoped>

.st-slot-left{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.description {
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
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem 2rem;
  gap: 1rem;
  width: inherit;
  max-width: 40%;
}
</style>
