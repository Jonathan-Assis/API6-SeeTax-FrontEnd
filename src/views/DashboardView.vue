<script lang="ts">
import { defineComponent, ref } from 'vue'
import { PhTrophy, PhTicket, PhPackage } from '@phosphor-icons/vue'

import HeaderComponent from '../components/header/eaderComponent.vue';
import TableComponent from '../components/table/TableComponent.vue'


export default defineComponent({
    name: 'DashboardView',
    components: {
        HeaderComponent,
        TableComponent,
        PhTrophy,
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
        <TableComponent title="Ranking" description="Comparativo das menores tarifas" :header="header" :body="body">
            <template v-slot:icon>
                <PhTrophy :size="34" class="st-icon-gray" weight="duotone" />
            </template>
        </TableComponent>

        <TableComponent title="Tarifas dos serviços"
            description="Serviços oferecidos pelos bancos, valor mínimo e máximo cobrado de tarifa de utilização"
            :header="header" :body="body">
            <template v-slot:icon>
                <PhTicket :size="34" class="st-icon-gray" weight="duotone" />
            </template>
        </TableComponent>

        <TableComponent title="Pacotes de serviços"
            description="Pacotes de serviços oferecidos pelos bancos, valor mínimo e máximo cobradopela utilização dos serviços"
            :header="header" :body="body">
            <template v-slot:icon>
                <PhPackage :size="34" class="st-icon-gray" weight="duotone" />
            </template>
        </TableComponent>
    </div>
</template>

<style scoped></style>
