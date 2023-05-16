<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PhMagnifyingGlass, PhTicket } from '@phosphor-icons/vue';

import HeaderComponent from '../components/header/HeaderComponent.vue';
import HeaderNav from '../components/header/HeaderNav.vue';
import ChartBarComponent from '@/components/chart/ChartBarComponent.vue';
import { useTarifasStore } from '@/stores';
import { storeToRefs } from 'pinia';
import IndicatorComponent from '@/components/indicator/IndicatorComponent.vue';
import TableCommonComponent from '@/components/table/TableCommonComponent.vue';
import { watch } from 'vue';

const tarifasHeader = ref([
    { title: 'Serviço', key: 'Servico'},
    { title: 'Unidade', key: 'Unidade' },
    { title: 'Periodicidade', key: 'Periodicidade' },
    { title: 'Data de vigência', key: 'DataVigencia' },
    { title: 'Máximo (R$)', key: 'ValorMaximo', align:'center' },
])

const tarifasStore = useTarifasStore()
const { grupos, instituicoes, servicos, tarifas, servicosMaxGrupoServico, servicosMaxInstituicao, servicosMinMedMax, isLoading } = storeToRefs(tarifasStore)
onMounted(() => {
    tarifasStore.getGrupoConsolidado()
    tarifasStore.getServicos()
    handleCNPJ()
    handleMaxServicosPorInstituicao()
})

const handleMaxServicosPorInstituicao= async (cnpj: string = '92702067') => {
    return await tarifasStore.getMaxServicosPorInstituicao('F', cnpj);
}

const handleCNPJ = async (grupo: string = '01') => {
    return await tarifasStore.getCNPJ(grupo);
}

const selectedInstituicao = ref('')
const selectedGrupo = ref('')

watch(selectedGrupo, () => {
    const grupoSearch = tarifasStore.grupos.find(e => {
        return selectedGrupo.value === e.Nome
    })

    handleCNPJ(grupoSearch.Codigo)

})
/* if (selectedGrupo.value) {
    const grupoCode = tarifasStore.instituicoes.find(a => {
        return a.Nome == selectedInstituicao.value
    })
    handleCNPJ(grupoCode.Codigo)
} */

async function searchMaxInstituicoes() {
    let instituicao = '07450604'

    if (selectedInstituicao.value) {
        const instituicaoCode = tarifasStore.instituicoes.find(a => {
            return a.Nome == selectedInstituicao.value
        })
        instituicao = instituicaoCode.Cnpj
    }
    handleMaxServicosPorInstituicao(instituicao)
}

//console.log(grupos)

</script>

<template>
    <HeaderComponent>
        <HeaderNav to="/dashboard" routerName="Dashboard" />
        <HeaderNav to="/filtrar/tarifas_pessoa_fisica" routerName="Pessoa Física" :actualRoute="true" />
    </HeaderComponent>
    <div class="header-title-actions">
        <div class="options">
            <div class="st-select">
                <div class="st-select">
                    Grupo Consolidado:
                    <v-select
                        v-if="grupos.length"
                        class="st-select-field"
                        label="Selecionar grupo"
                        v-model="selectedGrupo"
                        :items="grupos.map(e => e.Nome)"
                        single-line
                        variant="solo"
                        density="compact"
                    ></v-select>
                </div>
                <div class="st-select">
                    Instituição referente ao grupo:
                    <v-select
                    v-if="instituicoes.length"
                    class="st-select-field"
                    label="Selecionar grupo"
                    v-model="selectedInstituicao"
                    :items="instituicoes.map(e => e.Nome)"
                    single-line
                    variant="solo"
                    density="compact"
                    ></v-select>
                </div>
                <v-btn @click="searchMaxInstituicoes()" class="st-btn st-rounded">
                    Buscar
                    <PhMagnifyingGlass :size="25" />
                </v-btn>
            </div>
        </div>
    </div>

    <TableCommonComponent
        title="Tarifas por instituição"
        description="Serviços oferecidos pelos bancos, valor mínimo e máximo cobrado de tarifa de utilização"
        :headerData="tarifasHeader"
        :bodyData="servicosMaxInstituicao"
        >
        <template v-slot:icon>
            <PhTicket :size="34" class="st-icon-red" weight="duotone" />
        </template>
    </TableCommonComponent>
    
    <ChartBarComponent />

    <IndicatorComponent />

</template>

<style scoped>
.st-btn {
  display: flex;
  background-color: var(--st-color-green-0);
  padding: 0 1rem;
  min-width: 5rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
}

.st-select-field {
  min-width: 10rem;
}

.options {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.header-title-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.st-select {
  display: flex;
  align-items: center;
  gap: 1rem;
}

</style>