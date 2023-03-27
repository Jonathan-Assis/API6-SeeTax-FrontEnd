<template>
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Instituição Financeira</th>
                <th>Índice</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(bancos, index) in banco" :key="index">
                <td>{{ bancos.posicao }}</td>
                <td>{{ bancos.instituicao }}</td>
                <td>{{ bancos.indice }}</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script lang="ts">

export default {
    data() {
        return {
            banco: [
                { posicao: '1º', instituicao: "BTG PACTUAL/BANCO PAN", indice: 76 },
                { posicao: '2º', instituicao: "INTER", indice: 36 },
                { posicao: '3º', instituicao: "C6 BANK", indice: 33 }
            ]
        };
    }
};
</script>
  