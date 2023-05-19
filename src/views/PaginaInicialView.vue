<script setup lang="ts">
import { PhTrendUp, PhChartBar, PhTable, PhArrowRight } from '@phosphor-icons/vue';
import HeaderComponent from '../components/header/HeaderComponent.vue';
import CardDetailsComponent from '@/components/card/CardDetailsComponent.vue';

</script>

<template>
    <HeaderComponent />
    <div class="container-view-center">
        <div class="info-seetax">
            <article>
                <h1 class="seetax-title">
                    See<em class="st-text-green">Tax</em>
                </h1>
                <h1>
                    Comparador e analisador
                    <br>
                    de tarifas bancárias
                </h1>

                <h4>
                    O SeeTax auxilia na análise das tarifas bancárias,
                    <br>
                    informando ao usuário seus respectivos valores,
                    <br>
                    que podem ser visualizados através de:
                </h4>
            </article>
            <figure>
                <img src="../assets/logotype/SeeTaxCoin.png">
            </figure>
        </div>

        <div class="info-cards">
            <CardDetailsComponent 
                title="Indicadores"
                description="Exibição de indicadores de menores, a média e o máximo antigido pelas consultas de tarifas e serviços."
            >
                <template #icon>
                    <PhTrendUp :size="32" class="st-icon-dark-green" weight="duotone" />
                </template>
            </CardDetailsComponent>

            <CardDetailsComponent
                title="Gráficos"
                description=" Visualizações de tarifas por grupos consolidados, por serviço oferecido e por intituição bancária."
            >
                <template #icon>
                    <PhChartBar :size="32" class="st-icon-dark-green" weight="duotone" />
                </template>
            </CardDetailsComponent>

            <CardDetailsComponent
                title="Tabelas"
                description="Visualizações de tarifas por grupos consolidados, por serviço oferecido e por intituição bancária."
            >
                <template #icon>
                    <PhTable :size="32" class="st-icon-dark-green" weight="duotone" />
                </template>
            </CardDetailsComponent>
        </div>

        <div class="btn-to-page">
            <router-link to="/dashboard" routerName="Dashboard">
                <v-btn class="btn-to-dashboard st-text-tertiary st-bg-green st-rounded st-shadow">
                    Vamos lá 
                    <PhArrowRight :size="32" class="st-icon-white" />
                </v-btn>
            </router-link>
        </div>

    </div>
</template>

<style scoped>
.container-view-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}

.info-seetax {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.info-seetax article {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.info-seetax article h1 {
    font-weight: 700;
    font-size: 56px;
    line-height: 103%;
}

.seetax-title {
    font-size: 64px;
}

.info-seetax article h4 {
    font-weight: 400;
    font-size: 32px;
    line-height: 103%;
}

.info-seetax figure {
    padding: 3rem;
    border-radius: 100%;
    background: radial-gradient(60% 60% at 50% 50%,
            rgba(53, 203, 116, 0.74) 54%,
            rgba(0, 237, 100, 0) 80.1%);
}

.info-seetax figure img {
    width: 30vh;
    height: 30vh;
}

.info-cards {
    max-width: 100%;
    padding: 1.5rem 0;
    margin: 0 auto;
    display: grid;
    gap: 1.5rem; 
    grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
}


.btn-to-dashboard {
    width: max-content;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
}

.btn-to-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>