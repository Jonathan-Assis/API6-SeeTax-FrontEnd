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
        }
    }
})
</script>

<template>
    <MDBBreadcrumbItem class="breadcrumb-item">
        <router-link :to="to">
            {{ routerName }}
        </router-link>
    </MDBBreadcrumbItem>
</template>