<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PhTrendUp, PhChartBar, PhTable, PhArrowRight } from '@phosphor-icons/vue';
import HeaderComponent from '../components/header/HeaderComponent.vue';

</script>

<template>
    <HeaderComponent />

    <div class="container-view">
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
            <section class="st-bg-white-primary st-card-details st-rounded st-shadow">
                <div class="card-details">
                    <div class="st-mini-card-icon">
                        <PhTrendUp :size="32" class="st-icon-dark-green" weight="duotone" />
                    </div>
                    <article class="card-description st-text-secondary">
                        <h4>Indicadores</h4>
                        <p>Exibição de indicadores de menores, a média e o máximo antigido pelas consultas de tarifas e
                            serviços.</p>
                    </article>
                </div>
            </section>

            <section class="st-bg-white-primary st-card-details st-rounded st-shadow">
                <div class="card-details">
                    <div class="st-mini-card-icon">
                        <PhChartBar :size="32" class="st-icon-dark-green" weight="duotone" />
                    </div>
                    <article class="card-description st-text-secondary">
                        <h4>Gráficos</h4>
                        <p>Visualizações de tarifas por grupos consolidados, por serviço oferecido e por intituição
                            bancária.</p>
                    </article>
                </div>
            </section>

            <section class="st-bg-white-primary st-card-details st-rounded st-shadow">
                <div class="card-details">
                    <div class="st-mini-card-icon">
                        <PhTable :size="32" class="st-icon-dark-green" weight="duotone" />
                    </div>
                    <article class="card-description st-text-secondary">
                        <h4>Tabelas</h4>
                        <p>Visualizações de tarifas por grupos consolidados, por serviço oferecido e por intituição
                            bancária.</p>
                    </article>
                </div>
            </section>
        </div>

        <div class="btn-to-page">
            <router-link to="/dashboard" routerName="Dashboard">
                <button class="btn-to-dashboard st-text-tertiary st-bg-green st-rounded st-shadow">
                    Vamos lá
                    <PhArrowRight :size="32" class="st-icon-white" />
                </button>
            </router-link>
        </div>

    </div>
</template>

<style scoped>
.container-view {
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
            rgba(53, 203, 116, 0.74) 52.5%,
            rgba(0, 237, 100, 0) 80.1%);
}

.info-seetax figure img {
    width: 30vh;
    height: 30vh;
}


.info-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;
}

.info-cards section {
    width: 100%;
    max-width: 32%;
    min-width: 10%;
    display: flex;
    flex-grow: 1;
    height: 160px;
}

.st-card-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    gap: 10px;
}

.card-details {
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 20px;
}

.st-mini-card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 16px;
    background-color: var(--st-color-green-2);
    width: 75px;
}

.card-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
}

.card-description h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: right;
}

.card-description p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
}

.btn-to-dashboard {
    width: max-content;
    font-weight: 600;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 1.5rem;
    gap: 5px;
}

.btn-to-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>