<script lang="ts">
import HeaderComponent from '../components/header/HeaderComponent.vue';
import HeaderNav from '../components/header/HeaderNav.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "PacotesView",
    components: {
    HeaderComponent,
    HeaderNav
}
})

</script>

<template>
    <HeaderComponent>
        <HeaderNav to="/" routerName="Dashboard" />
        <HeaderNav to="/filtrar/pacotes" routerName="Pacotes" :actualRoute="true" />
    </HeaderComponent>
</template>
