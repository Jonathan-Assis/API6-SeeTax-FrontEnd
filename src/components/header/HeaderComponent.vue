<script setup lang="ts">
import { MDBBreadcrumb } from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const search = ref('')

</script>

<template>
    <header class="header-container">
        <div class="st-header">
            <div class="title-logotipe">
                <img src="../../assets/logotype/SeeTax.png" class="st-logotype-seetax" >
            </div>
            <div class="search-container">
                <v-text-field
                    v-model="search"
                    label="Pesquisar"
                    variant="solo"
                    density="compact"
                    append-inner-icon="mdi-magnify"
                    outlined
                    single-line
                    hide-details
                >
                </v-text-field>
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