import { createRouter, createWebHistory } from 'vue-router'
import IndexVue from '../views/frontend/index.vue'
const routes =  [
  {
    path: '/',
    name: 'FrontPage',
    component: () => import('../views/frontend/FrontPage.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: IndexVue,
        beforeEnter: () => {
          console.log(777)
        }
      },
      {
        path: '/work',
        name: 'work',
        component: () => import('../views/frontend/index.vue'),
      },
      {
        path: '/work/:id',
        name: 'workpage',
        component: () => import('../views/frontend/work.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import ('../views/frontend/about.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/frontend/contact.vue')
      }
    ]
  }
]

const router = createRouter({
  linkActiveClass: "is--active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
