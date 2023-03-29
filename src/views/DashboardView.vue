<script lang="ts">
import { defineComponent, ref } from 'vue'
import { PhTrophy, PhTicket, PhPackage } from '@phosphor-icons/vue'

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
        PhPackage
    },
    setup() {
        const header = ref([
            "Posição",
            "Banco",
            "Tipo",
            "Data de Atualização",
            "Média de Tarifas"
        ]);
        const body = ref([
            {
                posicao: 1,
                banco: "Itaú Unibanco S.A.",
                tipo: "Conta Poupança",
                dataAtualizado: "20/03/2023 11:00",
                media: "1,000"
            },
            {
                posicao: 2,
                banco: "Banco Itaúcard S.A.",
                tipo: "Conta Pagamento Pre Pago",
                dataAtualizado: "20/03/2023 12:00",
                media: "2,000"
            },
            {
                posicao: 3,
                banco: "Itaú Unibanco S.A.",
                tipo: "Conta Poupança",
                dataAtualizado: "20/03/2023 14:00",
                media: "4,000"
            },
            {
                posicao: 4,
                banco: "Unibanco S.A.",
                tipo: "Conta",
                dataAtualizado: "20/03/2023 15:00",
                media: "5,000"
            },
        ]);
        return {
            header,
            body
        }
    }
})


</script>

<template>
    <HeaderComponent :isDashboard="true" />
    <div class="container-list">
        <TableRanking />

        <TableTarifas />

        <TablePacotes />
    </div>
</template>

<style scoped></style>
