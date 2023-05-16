<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTarifasStore } from '@/stores';
import { PhArrowDown, PhCurrencyCircleDollar, PhMagnifyingGlass } from '@phosphor-icons/vue';
import { storeToRefs } from 'pinia';
import { tipoPessoa } from '@/constants';
import type { Pessoa } from '@/interfaces/constants';

const tarifasStore = useTarifasStore()
const { grupos, servicosMinMedMax  } = storeToRefs(tarifasStore)
/* 
const props = defineProps({
    pessoa: {
        type: String,
        required: true,
        default: 'F'
    }
})
 */

onMounted(() => {
    tarifasStore.getGrupoConsolidado()
    handleMinMedMaxServicos()
})

const selectedPessoa = ref('')
const selectedGrupo = ref('')

const handleMinMedMaxServicos= async (person:Pessoa = 'F', grupoConsolidado: string = '02') => {
    return await tarifasStore.getMinMedMaxServicos(person, grupoConsolidado);
}
async function searchData() {
    let person = 'F'
    let group = '01'

    if (selectedGrupo.value) {
        const grupoCode = tarifasStore.grupos.find(a => {
            return a.Nome == selectedGrupo.value
        })
        group = grupoCode.Codigo
    }
    handleMinMedMaxServicos('F', group)
}

const valorMaximo = servicosMinMedMax.value.map(a => a.ValorMaximo)
console.log(Math.max(...valorMaximo))
</script>
<template>
    <div class="header-title-actions">
        <div class="options">
            <div class="st-select">
                <div class="st-select">
                    Grupo consolidado:
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
                <v-btn @click="searchData()" class="st-btn st-rounded">
                    Buscar
                    <PhMagnifyingGlass :size="25" />
                </v-btn>
            </div>
        </div>
    </div>
    <h4>Indicadores</h4>
    <div class="indicator-grid">
        <div class="indicator-card st-shadow st-rounded d-flex">
            <div class="indicator-status">
                <div class="mini-box">
                    <PhCurrencyCircleDollar :size="58" color="#000"   />
                </div>
                <div class="value-indicator">
                    R$ 12.36 <PhArrowDown :size="20" color="#000"  />
                </div>
            </div>
            <div class="information-of-indicator">
                <div>
                    Menor tarifa
                    <div>Sociedades de Crédito, Financiamento e Investimento (CFI)</div>
                </div>
                <div>Periodicidade: Por evento</div>
            </div>
        </div>
        <div class="indicator-card st-shadow st-rounded d-flex">
            <div class="indicator-status">
                <div class="mini-box">
                    <PhCurrencyCircleDollar :size="58" color="#000"   />
                </div>
                <div class="value-indicator">
                    R$ 12.36 <PhArrowDown :size="20" color="#000" />
                </div>
            </div>
            <div class="information-of-indicator">
                <div>
                    Média de menor tarifa
                    <div>Sociedades de Crédito, Financiamento e Investimento (CFI)</div>
                </div>
                <div>Periodicidade: Por evento</div>
            </div>
        </div>
        <div class="indicator-card st-shadow st-rounded d-flex">
            <div class="indicator-status">
                <div class="mini-box">
                    <PhCurrencyCircleDollar :size="58" color="#000"   />
                </div>
                <div class="value-indicator">
                    R$ 12.36 <PhArrowDown :size="20" color="#000" />
                </div>
            </div>
            <div class="information-of-indicator">
                <div>
                    Maior tarifa
                    <div>Sociedades de Crédito, Financiamento e Investimento (CFI)</div>
                </div>
                <div>Periodicidade: Por evento</div>
            </div>
        </div>
        <div class="indicator-card st-shadow st-rounded d-flex">
            <div class="indicator-status">
                <div class="mini-box">
                    <PhCurrencyCircleDollar :size="58" color="#000"   />
                </div>
                <div class="value-indicator">
                    R$ 12.36 <PhArrowDown :size="20" color="#000" />
                </div>
            </div>
            <div class="information-of-indicator">
                <div>
                    Média de maior tarifa
                    <div>Sociedades de Crédito, Financiamento e Investimento (CFI)</div>
                </div>
                <div>Periodicidade: Por evento</div>
            </div>
        </div>
    </div>
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
  padding: 1.5rem 0;
}
.indicator-grid {
    max-width: 100%;
    padding: 1.5rem 0;
    margin: 0 auto;
    display: grid;
    gap: 1.5rem; 
    grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));

}
.value-indicator {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    gap: 5px;
}
.indicator-card {
    padding:1.5rem;
    font-weight: 500;
    background-color: #FFFF;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
}
.mini-box {
    background-color: #ffdd00;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 14px;
}

.indicator-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.information-of-indicator {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>