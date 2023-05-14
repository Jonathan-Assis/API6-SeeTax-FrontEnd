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
        <h4>{{ title }}</h4>
    </header>
</template>

<style scoped>
header {
    display: flex;
    margin-bottom: 8px;;
    gap: 11px;
}

h5 {
    color: var(--st-text-primary-black-color);
    font-weight: 600;
}
</style>