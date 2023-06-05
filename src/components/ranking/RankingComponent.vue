<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { PhTrophy } from '@phosphor-icons/vue';
import dayjs from 'dayjs';

import TableCommonComponent from '../table/TableCommonComponent.vue';
import { rankingHeader } from '@/constants'
import ServerConnection from '@/services';
import type { IRankingBody } from '@/interfaces/constants';
import type { IRanking } from '@/interfaces/services';

import { useTarifasStore } from '@/stores'
const tarifasStore = useTarifasStore()

const tableHeader = ref(rankingHeader)
const tableBody = ref<IRankingBody[]>([])

onMounted(() => {
    getRankingData()
    tarifasStore.getGrupoConsolidado()
    tarifasStore.getServicos()
    handleCNPJ()
})

const selectedInstituicao = ref('')
const selectedGrupo = ref('')


const handleCNPJ = async (grupo: string = '01') => {
  return await tarifasStore.getCNPJ(grupo)
}

async function getRankingData(){
    const resp: IRanking[] = (await ServerConnection.getRanking()).data

    resp.forEach((value)=>{
      value.instituicao.DataVigencia = dayjs(value.instituicao.DataVigencia).format('DD/MM/YYYY HH:mm')
      let data = {
        position: value.position,
        inst_nome: value.instituicao.inst_nome,
        Unidade: value.instituicao.Unidade,
        DataVigencia: value.instituicao.DataVigencia,
        Periodicidade: value.instituicao.Periodicidade,
        ValorMaximo: value.instituicao.ValorMaximo
      }
      tableBody.value?.push(data)
    })
}

defineProps({
    hideFooter: {
        type: Boolean,
        default: false
  }
})

</script>

<template>
<TableCommonComponent
        title="Ranking"
        description="Comparativo das menores tarifas"
        :headerData="tableHeader"
        :bodyData="tableBody"
        :hideFooter="hideFooter"
    >
        <template v-slot:icon>
            <PhTrophy :size="34" class="st-icon-yellow" weight="duotone" />
        </template>
</TableCommonComponent>
</template>