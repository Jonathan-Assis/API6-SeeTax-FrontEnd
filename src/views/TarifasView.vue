<script lang="ts">
import HeaderNav from '../components/header/HeaderNav.vue';
import HeaderComponent from '../components/header/headerComponent.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "TarifasView",
    components: { HeaderNav, HeaderComponent }
})

</script>

<template>
    <HeaderComponent>
        <HeaderNav to="/" routerName="Dashboard" />
        <HeaderNav to="/filtrar/tarifas" routerName="Tarifas" />
    </HeaderComponent>
</template>
