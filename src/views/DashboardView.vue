<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { PhTrophy, PhTicket, PhPackage } from '@phosphor-icons/vue';
import ServerConnection from '../services';
import capitalizeWord from '../utils/capitalizeWords';

import HeaderComponent from '../components/header/HeaderComponent.vue';
import TableCommonComponent from '../components/table/TableCommonComponent.vue';
import TableGroupingComponent from '../components/table/TableGroupingComponent.vue';
import HeaderNav from '../components/header/HeaderNav.vue';

export default defineComponent({
    name: 'DashboardView',
    components: {
        HeaderComponent,
        HeaderNav,
        TableCommonComponent,
        TableGroupingComponent,
        PhTrophy,
        PhTicket,
        PhPackage,
    },
    setup() {
        const rankingHeader = ref([
            { title: 'Posição',key: 'id'},
            { title: 'Banco', key: 'name' },
            { title: 'Tipo', key: 'type' },
            { title: 'Média de Tarifas (R$)', key: 'average', align:'center' },
        ])

        const tarifasHeader = ref([
            { title: 'Banco', key: 'companie', align: ' d-none'},
            { title: 'Tipo', key: 'accountType', align: ' d-none' },
            { title: 'Serviço', key: 'name' },
            { title: 'Máximo (R$)', key: 'max', align:'center' },
            { title: 'Mínimo (R$)', key: 'min', align:'center' },
        ])

        const rankingBody = ref();
        const tarifasData = ref()
        const tarifasBody = ref([])

        async function getData() {
            try {
                await ServerConnection.getRanking()
                    .then((resp) => resp.data)
                    .then(data => {
                        rankingBody.value = data.data;
                        
                        rankingBody.value.forEach((column: any,index:number) => {
                            rankingBody.value[index].type = capitalizeWord(column.type)
                        })
                    })
                await ServerConnection.getTax()
                .then((resp) => resp.data)
                .then(data => {
                    tarifasData.value = data
                    dataFilter();
                })

            } catch(error) {
                console.log(error);
            }
        }
        const dataFilter = async () => {
            tarifasData.value.forEach((value:any, index:number) => {
                value.accountType = capitalizeWord(value.accountType)

                value.priorityServices.forEach((item: any,index:any)=>{
                    item.name = capitalizeWord(item.name)
                    value.priorityServices[index] = {
                        companie: value.companie,
                        accountType: value.accountType,
                        ...item
                    }
                })

                value.otherServices.forEach((item: any, index:any) =>{
                    item.name = capitalizeWord(item.name)
                    value.otherServices[index] = {
                        companie: value.companie,
                        accountType: value.accountType,
                        ...item
                    }
                })
                let datas = [...value.priorityServices, ...value.otherServices]
                datas.forEach((e) => {
                    return tarifasBody.value.push(e)
                })
            })
        }

        onMounted(() => {
            getData();
        })
        return {
            rankingHeader,
            rankingBody,
            tarifasHeader,
            tarifasBody,
        }
    }
    
})


</script>

<template>
    <HeaderComponent>
      <HeaderNav to="/" routerName="Dashboard" :actualRoute="true" />
    </HeaderComponent>
    
    <div class="container-list">

       <TableCommonComponent
            title="Ranking"
            description="Comparativo das menores tarifas"
            :headerData="rankingHeader"
            :bodyData="rankingBody"
        >
            <template v-slot:icon>
                <PhTrophy :size="34" class="st-icon-yellow" weight="duotone" />
            </template>
        </TableCommonComponent>

        <TableGroupingComponent
            title="Tarifas dos serviços"
            description="Serviços oferecidos pelos bancos, valor mínimo e máximo cobrado de tarifa de utilização"
            :headerData="tarifasHeader"
            :bodyData="tarifasBody"
            :groupDataBy="['companie','accountType']"
        >
            <template v-slot:icon>
                <PhTicket :size="34" class="st-icon-red" weight="duotone" />
            </template>
        </TableGroupingComponent>
        
    </div>
</template>
