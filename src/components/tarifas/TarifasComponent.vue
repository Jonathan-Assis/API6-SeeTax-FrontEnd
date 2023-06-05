<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTarifasStore } from '@/stores'
import TableCommonComponent from '../table/TableCommonComponent.vue';
import { tarifasServicosHeader } from '@/constants';
import type { TPessoa } from '@/interfaces/constants'
import { PhBank, PhNewspaperClipping, PhTicket } from '@phosphor-icons/vue';
import IndicatorComponent from '../indicator/IndicatorComponent.vue';
import { watch } from 'vue';
import ChartBarComponent from '../chart/ChartBarComponent.vue';

const tarifasStore = useTarifasStore()
const {
  servicosMaxInstituicao,
  cnpj,
} = storeToRefs(tarifasStore)

const tarifasInstituicaoHeader = ref(tarifasServicosHeader)
const props = defineProps({
    tipoPessoa: {
        type: String,
        default: 'F',
        required: true
    },
    cnpj: {
        type: String,
        default: '92702067',
        required: true
    }
})


const selectedCnpj = ref('')
watch(selectedCnpj, () => {
    const instituicaoCode = tarifasStore.cnpj.find((a) => {
        return a.Nome == selectedCnpj.value
    })
    tarifasStore.setInstituicao(instituicaoCode?.Cnpj)
    handleMaxServicosPorInstituicao(instituicaoCode?.Cnpj)
})

const cnpjRef = computed(()=> cnpj)
/* watch(tarifasStore.cnpj, () => {
    cnpjRef = tarifasStore.cnpj
}) */

onMounted(() => {
    tarifasStore.getGrupoConsolidado()
    tarifasStore.getCNPJ()
    tarifasStore.getServicos()
    tarifasStore.setTipoPessoa(props.tipoPessoa as TPessoa)
    handleMaxServicosPorInstituicao()
})

const handleMaxServicosPorInstituicao = async (cnpj: string = '92702067') => {
  return await tarifasStore.getMaxServicosPorInstituicao('F', cnpj)
}

</script>

<template>
    <TableCommonComponent
      title="Tarifas por instituição"
      description="Serviços oferecidos pelos bancos, valor máximo cobrado de tarifa por utilização"
      :headerData="tarifasInstituicaoHeader"
      :bodyData="servicosMaxInstituicao"
    >
      <template v-slot:icon>
        <PhTicket :size="34" class="st-icon-red" weight="duotone" />
      </template>
      <template v-slot:select>
        <div>
          <PhBank :size="32" weight="duotone"/>
          Selecione a Instituição:
          <v-select
            class="st-table-search"
            label="Selecione um grupo"    
            single-line
            v-model="selectedCnpj"
            :items="cnpjRef.value.map(e => e.Nome)"
            variant="solo"
            density="compact"
            hide-details="true"
          ></v-select>
        </div>
      </template>
    </TableCommonComponent>

    <ChartBarComponent
        title="Tarifas por Serviço"
        description="Gráfico de tarifas por serviço"
        >
        <template #icon>
            <PhNewspaperClipping  :size="34" class="st-icon-red" weight="duotone" />
        </template>
    </ChartBarComponent>

    <IndicatorComponent />
</template>