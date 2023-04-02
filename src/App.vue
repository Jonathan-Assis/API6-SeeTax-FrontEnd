<script lang="ts">
import { defineComponent } from 'vue';
import { PhHeart } from '@phosphor-icons/vue'

import SideBarComponent from './components/sidebar/SideBarComponent.vue';
import { sidebarWidth } from './components/sidebar/SideBarState';

export default defineComponent({
  name: 'App',
  components: {
    SideBarComponent,
    PhHeart
  },
  setup () {

    return {
      sidebarWidth
    }
  }
})
</script>

<template>
  <main class="container-main">
    <SideBarComponent />
    <div class="container-router-view" :style="{ 'margin-left': sidebarWidth }">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>

</style>

<style scoped>
.container-view {
  padding: 0 30px 0 70px
}
</style>