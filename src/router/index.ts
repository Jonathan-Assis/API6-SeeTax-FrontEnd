import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import PaginaInicialView from '../views/PaginaInicialView.vue'
import TarifasPessoaFisicaView from '../views/TarifasPessoaFisicaView.vue';
import TarifasPessoaJuridicaView from '../views/TarifasPessoaJuridicaView.vue';

const routes: RouteRecordRaw[] = [
      {
      path: '/',
      name: 'Página Inicial',
      component: PaginaInicialView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/filtrar',
      name: 'Filtro',
      children: [
        {
          path: 'tarifas_pessoa_fisica',
          name: 'Pessoa Física',
          component: TarifasPessoaFisicaView
        },
        {
          path: 'tarifas_pessoa_juridica',
          name: 'Pessoa Jurídica',
          component: TarifasPessoaJuridicaView
        },
      ]
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export { router }