<script lang="ts">
import { defineComponent } from 'vue'
import { PhCurrencyCircleDollar } from '@phosphor-icons/vue'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-vue-ui-kit';

export default defineComponent({
    name:'HeaderComponent',
    components: {
        PhCurrencyCircleDollar,
        MDBBreadcrumb,
        MDBBreadcrumbItem
    },
    props: {
        isDashboard: {
            type: Boolean,
            required: false
        }
    },
    setup() {
    },
})
</script>

<template>
    <header class="st-header">
        <div class="title-logotipe">
            <PhCurrencyCircleDollar :size="30" color="#000" weight="duotone" />
            <h2>SeeTax</h2>
        </div>
        <MDBBreadcrumb>
            <slot v-if="!isDashboard" />
        </MDBBreadcrumb>
        <div class="search-container">
            <input type="text" class="search-field" placeholder="Pesquisar" />
        </div>
    </header>
</template>

<style scoped>
.title-logotipe {
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: 20px;
}
/* .search-container {
    box-shadow: 0 0.0625em 0.125em rgba(10,10,10,.05);
} */

.search-field {
    background-color: #fff;
    border-color: #ccc;
    border-width: 0.5px;
    border-radius: 0.2em;
    color: #343434;
}

.st-header {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
}
</style>