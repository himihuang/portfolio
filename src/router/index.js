import { createRouter, createWebHistory } from 'vue-router'

const routes =  [
  {
    path: '/',
    name: 'FrontPage',
    component: () => import('../views/frontend/FrontPage.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/frontend/index.vue'),
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
  history: createWebHistory(),
  routes,
});

export default router
