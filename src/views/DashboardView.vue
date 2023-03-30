<script lang="ts">
import { defineComponent, ref } from 'vue'
import { PhTrophy, PhTicket, PhPackage } from '@phosphor-icons/vue'
import {VDataTable} from 'vuetify/labs/VDataTable';

import HeaderComponent from '../components/header/HeaderComponent.vue';
import TableComponent from '../components/table/TableComponent.vue'
import TableRanking from '../components/table/TableRanking.vue';
import TableTarifas from '../components/table/TableTarifas.vue';
import TablePacotes from '../components/table/TablePacotes.vue';

export default defineComponent({
    name: 'DashboardView',
    components: { 
        HeaderComponent,
        TableComponent,
        TableRanking,
        TableTarifas,
        TablePacotes,
        PhTicket,
        PhPackage,
    },
})


</script>

<template>
    <HeaderComponent :isDashboard="true" />
    
    <div class="container-list">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="table-responsive">
                </div>
            </div>
        </div>

        <TableRanking />

        <TableTarifas />

        <TablePacotes />
    </div>
</template>

