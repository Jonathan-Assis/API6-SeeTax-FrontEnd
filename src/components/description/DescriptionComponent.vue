<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DescriptionComponent',
    props:{
        title: {
            type: String,
            required: true,
        }
    },
    setup() {
        
    },
})
</script>

<template>
    <div class="description">
      {{ title }}
    </div>
</template>

<style scoped>

.description {
  height: 4rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 2rem;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
</style>