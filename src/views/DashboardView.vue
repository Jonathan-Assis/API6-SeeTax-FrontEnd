<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '../components/header/headerComponent.vue';
import TableComponent from  '../components/table/TableComponent.vue'
import TitleOutsideComponent from '../components/title/TitleOutsideComponent.vue';
import { PhPackage, PhTicket, PhTrophy } from '@phosphor-icons/vue'
import { MDBBreadcrumbItem } from 'mdb-vue-ui-kit';
import HeaderNav from '../components/header/HeaderNav.vue';


export default defineComponent({
    name: 'DashboardView',
    components: {
    HeaderComponent,
    HeaderNav,
    TitleOutsideComponent,
    TableComponent,
    PhTrophy,
    MDBBreadcrumbItem
    },
    setup() {
    }
})

</script>

<template>
    <HeaderComponent :isDashboard="true" />
    <TitleOutsideComponent title="Ranking">
        <template v-slot:icon>
            <PhTrophy :size="23" class="st-icon-gray" weight="duotone" />
        </template>
    </TitleOutsideComponent>
    <TableComponent />
</template>

<style scoped>
</style>
