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
    <header class="header-container">
        <div class="st-header">
            <div class="title-logotipe">
                <img src="../../assets/logotype/SeeTax.png" class="st-logotype-seetax" >
            </div>
            <div class="search-container">
                <input type="text" class="search-field" placeholder="Pesquisar" />
            </div>
        </div>
        <MDBBreadcrumb>
            <slot v-if="!isDashboard" />
        </MDBBreadcrumb>
    </header>
</template>

<style scoped>

.st-logotype-seetax {
    width: 100%;
    max-width: 180px;
    height: auto;
    object-fit: contain;
}
.title-logotipe {
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: 20px;
}

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