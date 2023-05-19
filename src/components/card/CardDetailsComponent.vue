<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})
</script>
<template>
    <section class="st-bg-white-primary card-container-details st-rounded st-shadow">
        <div class="card-details">
            <div class="mini-card-icon">
                <slot name="icon"></slot>
            </div>
            <article class="card-description st-text-secondary">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </article>
        </div>
    </section>
</template>

<style scoped>

.card-container-details {
    padding:1.5rem;
    font-weight: 500;
    background-color: #FFFF;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
}

.card-details {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 20px;
}

.mini-card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 16px;
    background-color: var(--st-color-green-2);
    width: 75px;
}

.card-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
}

.card-description h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: right;
}

.card-description p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
}
</style>