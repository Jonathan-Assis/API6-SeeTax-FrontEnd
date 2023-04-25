import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import DashboardViewVue from '../views/DashboardView.vue';
import TarifasView from '../views/TarifasView.vue';

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
        }
      ]
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export { router }
