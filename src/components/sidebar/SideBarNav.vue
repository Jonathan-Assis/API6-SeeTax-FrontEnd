<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PhCaretRight } from '@phosphor-icons/vue'

import { collapsed } from './SideBarState'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<template>
  <router-link :to="to" class="link" @click="collapsed = !collapsed" :class="{ active: isActive }">
    <slot name="icon"></slot>
    <div class="d-flex col justify-content-between align-center lh-1">
      <transition name="fade">
        <span class="title" v-if="!collapsed">
          <slot name="title"></slot>
        </span>
      </transition>
      <PhCaretRight :size="25" class="sidebar-icon-color" />
    </div>
  </router-link>
</template>

<style scoped>
.link:not(.active) .sidebar-icon-color {
  color: var(--st-icon-color-gray);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  cursor: pointer;
  position: relative;
  user-select: none;

  margin: 0.5em 0;
  padding: 24px;
  border-radius: 0.25em;
  height: 1.5em;

  color: #fff;
  text-decoration: none;
}

.link.active {
  background-color: var(--st-hover-link-green);
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}


.link:not(.active):hover {
  background-color: var(--st-hover-bg-gray);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}

.title {
  color: var(--st-text-secondary-color);
}
</style>
