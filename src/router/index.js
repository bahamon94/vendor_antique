import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import { LocalStorage, Notify  } from 'quasar'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to , from , next) => {

    if (to.matched.some(record => record.meta.auth ||record.meta.isAdmin )){
      if (LocalStorage.getItem('dataUser')=== null || LocalStorage.getItem('dataUser') === undefined){
        next({
          path: '/auth/login'
        })
        Notify.create({
          icon: 'error',
          color: 'negative',
          message: 'User not found',
          actions: [{icon:'close', color: 'white'}]
        })
      } else {
        if (to.matched.some(record => record.meta.isAdmin)){
          if (LocalStorage.getItem('dataUser')[0].id === 1){
            next()
          } else {
            next({ path: "/items" })
            Notify.create({
              icon: 'error',
              color: 'negative',
              message: 'User not have permission to module',
              actions: [{icon:'close', color: 'white'}],
              position: 'top-right'
            })
          }
        } else {
          next()
        }
      }
    } else {
      next()
    }


  })



  return Router
}
