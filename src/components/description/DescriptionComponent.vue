<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DescriptionComponent',
  props: {
    description: {
      type: String,
      required: true
    }
  },
  setup() {}
})
</script>

<template>
  <div class="description st-space-item">
    {{ description }}
  </div>
</template>

<style scoped>
.description {
  height: 4rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
</style>
