<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { PhTrophy, PhTicket, PhPackage } from '@phosphor-icons/vue';
import ServerConnection from '../services';
import capitalizeWord from '../utils/capitalizeWords';

import HeaderComponent from '../components/header/HeaderComponent.vue';
import TableCommonComponent from '../components/table/TableCommonComponent.vue';
import TableActionsComponent from '../components/table/TableActionsComponent.vue';
import TableRanking from '../components/table/TableRanking.vue';
import TableTarifas from '../components/table/TableTarifas.vue';
import TablePacotes from '../components/table/TablePacotes.vue';
import HeaderNav from '../components/header/HeaderNav.vue';

export default defineComponent({
    name: 'DashboardView',
    components: {
    HeaderComponent,
    TableCommonComponent,
    TableActionsComponent,
    TableRanking,
    TableTarifas,
    TablePacotes,
    PhTicket,
    PhPackage,
    HeaderNav,
    PhTrophy
},
    setup() {
        const timeNow = new Date(Date.now());
        const rankingBody = ref();

        async function atualizar() {
            try {
                let rankings = await ServerConnection.getRanking()
                    .then((resp) => resp.data)

                rankingBody.value = await rankings.data;

                rankingBody.value.forEach((column: any,index:number) => {
                    rankingBody.value[index].type = capitalizeWord(column.type)
                })

            } catch(error) {
                console.log(error);
            }
        }
        const headerData = ref([
            { title: 'Posição',data: 'id'},
            { title: 'Banco', data: 'name' },
            { title: 'Tipo', data: 'type' },
            //{ title: 'Data de atualização', data: 'data' },
            { title: 'Média de Tarifas', data: 'average' },
        ])
        onMounted(() => {
            atualizar();
            
        })
        return {
            headerData,
            rankingBody,
            timeNow
        }
    }
    
})


</script>

<template>
    <HeaderComponent>
      <HeaderNav to="/" routerName="Dashboard" :actualRoute="true" />
    </HeaderComponent>
    
    <div class="container-list">

       <!--  <TableRanking /> -->
       <TableCommonComponent
            title="Ranking"
            description="Comparativo das menores tarifas"
            :headerData="headerData"
            :bodyData="rankingBody"
        >
        </TableCommonComponent>

<!--         <TableActionsComponent title="Tarifas dos serviços" description="Serviços oferecidos pelos bancos, valor mínimo e máximo cobrado de tarifa de utilização">
            <template v-slot:t>
                <PhTrophy :size="34" class="st-icon-gray" weight="duotone" />
            </template>
        </TableActionsComponent>

        <TableActionsComponent title="Pacotes de serviços" description="Pacotes de serviços oferecidos pelos bancos, valor mínimo e máximo cobradopela utilização dos serviços">
            <template v-slot:t>
                <PhTrophy :size="34" class="st-icon-gray" weight="duotone" />
            </template>
        </TableActionsComponent> -->
        
    </div>
</template>
