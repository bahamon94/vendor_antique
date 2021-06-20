const routes = [
  {
    path: '/',
    redirect: 'items',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      {path: 'items', component: () => import('pages/Index.vue')},
      {path: 'items/:item', component: () => import('pages/_item.vue')}
    ]
  },
  {
    path: '/add',
    redirect: 'items',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      isAdmin: true
    },
    children: [
      {path: '', component: () => import('pages/addItems/addItems.vue')}
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {path: 'auth/login', component: () => import('pages/auth/Login.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
