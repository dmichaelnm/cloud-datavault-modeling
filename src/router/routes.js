const routes = [

  // Main Layout
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue')
  },

  // Authentication Layout
  {
    path: '/auth',
    component: () => import ('layouts/AuthenticationLayout.vue'),
    children: [
      {
        path: "login",
        component: () => import ('pages/authentication/LoginPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
