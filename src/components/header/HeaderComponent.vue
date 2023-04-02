<script lang="ts">
import { defineComponent } from 'vue'
import { PhCurrencyCircleDollar } from '@phosphor-icons/vue'
import { MDBBreadcrumb } from 'mdb-vue-ui-kit';
import { VTextField } from 'vuetify/components';
import { ref } from 'vue';

export default defineComponent({
    name:'HeaderComponent',
    components: {
        PhCurrencyCircleDollar,
        MDBBreadcrumb,
        VTextField
    },
    setup(){
        const search = ref('')

        return {
            search
        }
    }
})
</script>

<template>
    <header class="header-container">
        <div class="st-header">
            <div class="title-logotipe">
                <img src="../../assets/logotype/SeeTax.png" class="st-logotype-seetax" >
            </div>
            <div class="search-container">
                <VTextField
                    v-model="search"
                    label="Pesquisar"
                    variant="solo"
                    density="compact"
                    append-inner-icon="mdi-magnify"
                    outlined
                    single-line
                    hide-details
                >
                </VTextField>
            </div>
        </div>
        <MDBBreadcrumb>
            <slot />
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

.st-header {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.search-container{
    width: 100%;
    max-width: 180px;
}
</style>