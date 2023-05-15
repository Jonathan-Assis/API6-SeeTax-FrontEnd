import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import PaginaInicialView from '../views/PaginaInicialView.vue'
import TarifasView from '../views/TarifasView.vue';

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
          name: 'Filtro de Tarifas Pessoas Físicas',
          component: TarifasView
        },
        {
          path: 'tarifas_pessoa_juridica',
          name: 'Filtro de Tarifas para Pessoas Jurídicas',
          component: TarifasView
        },
      ]
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export { router }