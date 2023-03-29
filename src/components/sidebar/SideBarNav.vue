<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router';
import { PhCaretRight } from '@phosphor-icons/vue'

import { collapsed } from './SideBarState';

export default defineComponent({
    name: 'SideBarNav',
    components: {
        PhCaretRight
    },
    props: {
        to: {
            type: String,
            required: true
        },
        notArrow: {
            type: Boolean,
            required: false
        }
    },
    setup(props) {
        const route = useRoute();
        const isActive = computed(() => route.path === props.to)
        //const arrow = ref(true)
        return {
            route,
            isActive,
            collapsed,
     //       arrow
        }
    },
})
</script>

<template>
    <router-link :to="to" class="link" @click="collapsed = !collapsed" :class="{ active: isActive }" >
        <slot name="icon"></slot>
        <div class="d-flex col justify-content-between">
            <transition name="fade">
                <span class="title" v-if="!collapsed">
                    <slot name="title"></slot>
                </span>
            </transition>
            <PhCaretRight v-if="!notArrow" :notArrow="notArrow" :size="25" class="sidebar-icon-color" />
        </div>
    </router-link>
</template>

<style>
.link:not(.active) .sidebar-icon-color{
  color: var(--st-icon-color-gray);
}
</style>

<style scoped>
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

.link.active .title, .sidebar-icon-color{
    color: var(--st-color-white-0)
}

.link:not(.active):hover {
    background-color: var(--st-hover-bg-gray);
    border-width: 1px;
}

.title {
    color: var(--st-text-secondary-color);
}


</style>