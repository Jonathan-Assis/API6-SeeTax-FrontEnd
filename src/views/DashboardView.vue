<script lang="ts">
import { defineComponent } from 'vue'
import TableComponent from  '../components/table/TableComponent.vue'
import TitleOutsideComponent from '../components/title/TitleOutsideComponent.vue';
import { PhPackage, PhTicket, PhTrophy } from '@phosphor-icons/vue'


export default defineComponent({
    name: 'DashboardView',
    components: {
    TitleOutsideComponent,
    TableComponent,
    PhTrophy,
}
})

</script>

<template>
    <TitleOutsideComponent title="Ranking">
        <template v-slot:icon>
            <PhTrophy :size="23" class="st-icon-gray" weight="duotone" />
        </template>
    </TitleOutsideComponent>
    <TableComponent />
</template>