<script lang="ts">
import { defineComponent } from 'vue'
import { MDBBreadcrumbItem } from 'mdb-vue-ui-kit';

export default defineComponent({
    name:'HeaderNav',
    components: {
        MDBBreadcrumbItem
    },
    props: {
        to: {
            type: String,
            required: true
        },
        routerName: {
            type: String,
            required: true
        },
        actualRoute: {
            type: Boolean,
            required: false
        }
    }
})
</script>

<template>
    <MDBBreadcrumbItem class="breadcrumb-item">
        <router-link :to="to" :class="actualRoute ? 'st-text-primary' : 'st-text-secondary'">
            {{ routerName }}
        </router-link>
    </MDBBreadcrumbItem>
</template>

<style scoped>
a:hover {
    color: var(--st-bg-color-green);
}
</style>