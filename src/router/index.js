import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Regist from '../views/Regist.vue'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router