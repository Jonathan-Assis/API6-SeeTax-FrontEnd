<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { PhTicket } from '@phosphor-icons/vue';
import ServerConnection from '../services';
import capitalizeWord from '../utils/capitalizeWords';


import HeaderComponent from '../components/header/HeaderComponent.vue';
import HeaderNav from '../components/header/HeaderNav.vue';
import TableCommonComponent from '../components/table/TableCommonComponent.vue';
import TableGroupingComponent from '../components/table/TableGroupingComponent.vue';
import { VDataTable } from 'vuetify/labs/VDataTable'

export default defineComponent({
    name: "TarifasView",
    components: {
        HeaderComponent,
        HeaderNav,
        TableCommonComponent,
        TableGroupingComponent,
        PhTicket,
        VDataTable
    },
    setup() {
        const tarifasData = ref()
        const tarifasBody = ref([])

        async function getData() {
            try {
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

        const tarifasHeader = ref([
            { title: 'Banco', key: 'companie', align: ' d-none'},
            { title: 'Tipo', key: 'accountType', align: ' d-none' },
            { title: 'Serviço', key: 'name' },
            { title: 'Máximo (R$)', key: 'max', align:'center' },
            { title: 'Mínimo (R$)', key: 'min', align:'center' },
        ])

        onMounted(() => {
            getData();
        })

        return {
            tarifasHeader,
            tarifasBody,
        }
    }
})

</script>

<template>
    <HeaderComponent>
        <HeaderNav to="/" routerName="Dashboard" />
        <HeaderNav to="/filtrar/tarifas" routerName="Tarifas" :actualRoute="true" />
    </HeaderComponent>

    <TableGroupingComponent
        title="Tarifas dos serviços"
        description="Serviços oferecidos pelos bancos, valor mínimo e máximo cobrado de tarifa de utilização"
        :headerData="tarifasHeader"
        :bodyData="tarifasBody"
        :groupDataBy="['companie','accountType']"
    >
    </TableGroupingComponent>

</template>
