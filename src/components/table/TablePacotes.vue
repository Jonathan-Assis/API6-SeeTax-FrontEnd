<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import TitleOutsideComponent from '../title/TitleOutsideComponent.vue'
import DescriptionComponent from '../description/DescriptionComponent.vue'
import {
  MDBTable,
} from 'mdb-vue-ui-kit';
import { PhBank, PhPackage } from '@phosphor-icons/vue';
export default defineComponent({
  name: "TablePacotes",
  components: {
    TitleOutsideComponent,
    DescriptionComponent,
    MDBTable,
    PhPackage,
    PhBank
  },
  setup() {
    const header = ref([
      "Posição",
      "Banco",
      "Tipo",
      "Data de Atualização",
      "Média de Tarifas"
    ]);
    const body = ref([
      {
        posicao: 1,
        banco: "Itaú Unibanco S.A.",
        tipo: "Conta Poupança",
        dataAtualizado: "20/03/2023 11:00",
        media: "1,000"
      },
      {
        posicao: 2,
        banco: "Banco Itaúcard S.A.",
        tipo: "Conta Pagamento Pre Pago",
        dataAtualizado: "20/03/2023 12:00",
        media: "2,000"
      },
      {
        posicao: 3,
        banco: "Itaú Unibanco S.A.",
        tipo: "Conta Poupança",
        dataAtualizado: "20/03/2023 14:00",
        media: "4,000"
      },
      {
        posicao: 4,
        banco: "Unibanco S.A.",
        tipo: "Conta",
        dataAtualizado: "20/03/2023 15:00",
        media: "5,000"
      },
    ]);
    return {
      header,
      body
    }
  }
})
</script>

<template>
  <div class="st-space-vertical">
    <TitleOutsideComponent title="Pacotes de serviços">
      <template v-slot:icon>
        <PhPackage :size="34" class="st-icon-gray" weight="duotone" />
      </template>
    </TitleOutsideComponent>

    <DescriptionComponent description="Pacotes de serviços oferecidos pelos bancos, valor mínimo e máximo cobradopela utilização dos serviços" />

    <MDBTable hover class="align-middle text-center">
      <thead class="table-header">
        <tr>
          <th scope="col" v-for="(column, index) in header" :key="index">{{ column }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, indexItem) in body" :key="`${indexItem}_${item}`">
          <td>{{ item.posicao }}</td>
          <td>
            <div class="d-flex align-items-center justify-content-start gap-2">
              <div class="st-mini-block st-bg-gray">
                <PhBank :size="30" weight="duotone" />
              </div>
              {{ item.banco }}
            </div>

          </td>
          <td>{{ item.tipo }}</td>
          <td>{{ item.dataAtualizado }}</td>
          <td>{{ item.media }}</td>
        </tr>
      </tbody>
    </MDBTable>
  </div>
</template>