<script setup lang="ts">

</script>

<template>
    <div class="loading">
        <img class="image" src="../../assets/logotype/SeeTaxCoin.png" />
        <h4>Carregando...</h4>
    </div>
</template>

<style scoped>

.loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2rem;
}

.loading h4 {
    font-weight: 600;
}

.image {
    width: 200px;
}
.image{
    -moz-animation: spinHorizontal 1.5s infinite linear;
    -o-animation: spinHorizontal 1.5s infinite linear;    
    -webkit-animation: spinHorizontal 1.5s infinite linear;
    animation: spinHorizontal 1.5s infinite linear;
}

@keyframes spinHorizontal {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}
</style>