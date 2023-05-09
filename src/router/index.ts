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
