import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import DashboardViewVue from '../views/DashboardView.vue';
import TarifasView from '../views/TarifasView.vue';
import PacotesView from '../views/PacotesView.vue';

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardViewVue
    },
    {
      path: '/filtrar',
      name: 'about',
      children: [
        {
          path: 'tarifas',
          name: 'Filtro de Tarifas',
          component: TarifasView
        },
        {
          path: 'pacotes',
          name: 'Filtro de Pacotes',
          component: PacotesView
        },
      ]
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export { router }
