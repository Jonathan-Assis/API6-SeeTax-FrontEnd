<script lang="ts">
import { onMounted,defineComponent, ref, type PropType } from 'vue'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import {
  MDBTable,
} from 'mdb-vue-ui-kit';
import { PhBank, PhTrophy } from '@phosphor-icons/vue';
import ServerConnection from '../../service';


export default defineComponent({
  name: "TableRanking",
  components: {
    TitleOutsideComponent,
    DescriptionComponent,
    MDBTable,
    PhTrophy,
    PhBank
  },
  setup() {
    const tempo = new Date(Date.now());
    const body = ref();
    async function atualizar() {
    try {
    body.value = (await ServerConnection.getRanking()).data;
    }
    catch(ex){ /* empty */ };
    }
    const header = ref([
      "Posição",
      "Banco",
      "Tipo",
      "Data de Atualização",
      "Média de Tarifas"
    ]);    
    onMounted(() => {
    atualizar();
    console.log(body)
    })
    return {
      header,
      body,
      tempo
    }
    
  }
})
</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent title="Ranking">
      <template v-slot:icon>
        <PhTrophy :size="34" class="st-icon-gray" weight="duotone" />
      </template>
    </TitleOutsideComponent>

    <DescriptionComponent description="Comparativo das menores tarifas" />

    <MDBTable hover class="align-middle text-center">
      <thead class="table-header">
        <tr>
          <th scope="col" v-for="(column, index) in header" :key="index">{{ column }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in body?.data" :key="item.id">
          <td class="d-flex justify-content-center">
            <div class="st-mini-block st-bg-green">{{ item.id }}º</div>
          </td>
          <td>
            <div class="d-flex align-items-center justify-content-start gap-2">
              <div class="st-mini-block st-bg-gray">
                <PhBank :size="30" weight="duotone" />
              </div>
              {{ item.name }}
            </div>

          </td>
          <td>{{ item.type}}</td>
          <td> {{ tempo.toLocaleString()}}</td>
          <td> R$ {{ item.average }}</td>
        </tr>
      </tbody>
    </MDBTable>
  </div>
</template>