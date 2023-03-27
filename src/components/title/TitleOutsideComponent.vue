<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'TitleOutsideComponent',
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
        }
    },
})
</script>

<template>
    <header>
        <slot name='icon'></slot>
        <h5>{{ title }}</h5>
    </header>
</template>

<style scoped>
header {
    display: flex;
    margin: 10px 0;
    gap: 12px;
}

h5 {
    color: var(--st-text-primary-black-color);
}
</style>