<script setup lang="ts">
import Chart, { type ChartConfiguration, type ChartData, type ChartItem } from 'chart.js/auto';
import { onMounted } from 'vue';
const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho'
]

const data: ChartData = {
    labels: labels,
    datasets: [
        {
            label: 'primeiro',
            backgroundColor: '#ff5500',
            borderColor: '#ff5500',
            data: [0,10,5,25,12,40],
            borderRadius: 100,
            stack: 'Stack 0',
        },
        {
            label: 'segundo',
            backgroundColor: '#0055FF',
            borderColor: '#0055FF',
            data: [5,20,15,35,22,20],
            borderRadius: 100,
            stack: 'Stack 0',
        },
        {
            label: 'terceiro',
            backgroundColor: '#5500FF',
            borderColor: '#5500FF',
            data: [30,5,20,15,42,60],
            borderRadius: 100,
            stack: 'Stack 0',
        },
]
}

const config: ChartConfiguration = {
    type: 'bar',
    data: data,
    options: {}
}
onMounted(()=> {
    const canvasTag = <ChartItem>document.getElementById('myChart')
    new Chart(
        canvasTag,
        config
    )
})

</script>

<template>
    <canvas id="myChart"></canvas>
</template>