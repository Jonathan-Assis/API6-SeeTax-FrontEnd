<script setup lang="ts">
import { PhArrowDown, PhArrowUp, PhCurrencyCircleDollar } from '@phosphor-icons/vue';
import { computed } from 'vue'

const props = defineProps({
    service: {
        type: String,
        required: true
    },
    periodic: {
        type: String,
        required: false
    },
    kind: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const kindOf = computed(() => {
    if (props.kind === 'menor'){
        return 'st-bg-light-green'
    }
    else if (props.kind === 'maior') {
        return 'st-bg-light-blue'
    } else {
        return 'st-bg-light-orange'
    }
})

const iconColor = computed(() =>{
    if (props.kind === 'menor'){
        return 'st-icon-dark-green'
    }
    else if (props.kind === 'maior') {
        return 'st-icon-blue'
    } else {
        return 'st-icon-orange'
    }
})

</script>

<template>
    <div class="indicator-card st-shadow st-rounded d-flex">
        <div class="indicator-status">
          <div class="mini-box" :class='kindOf' >
            <PhCurrencyCircleDollar :class="iconColor" :size="58" />
          </div>
          <div class="value-indicator" :class="iconColor">R$ {{ value }} 
            <PhArrowDown v-if="kind === 'menor'" :class="iconColor" :size="20" weight="bold" />
            <PhArrowUp v-else-if="kind === 'maior'" :class="iconColor" :size="20" weight="bold" />
            <PhArrowDown v-else-if="kind === 'menor-media'" :class="iconColor" :size="20" weight="bold" />
            <PhArrowUp v-else-if="kind === 'maior-media'" :class="iconColor" :size="20" weight="bold" />
        </div>
        </div>
        <div class="information-of-indicator">
          <div>
            <strong v-if="kind === 'menor'">Menor</strong>
            <strong v-if="kind === 'maior'">Maior</strong>
            <strong v-if="kind === 'menor-media'">Média de menor</strong>
            <strong v-if="kind === 'maior-media'">Média de maior</strong>
            tarifa
            <div>{{ service }}</div>
          </div>
          <div v-if="kind === 'menor' || kind === 'maior'">Periodicidade: {{ periodic }}</div>
        </div>
    </div>
</template>

<style scoped>
.value-indicator {
  display: flex;
  align-items: center;
  font-weight: 800;
  width: 100%;
  justify-content: space-around;
  gap: 5px;
}
.indicator-card {
  padding: 1.5rem;
  font-weight: 500;
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}
.mini-box {
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