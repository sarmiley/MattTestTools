import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import login from '@/pages/Login'
import success from '@/pages/success'
import Translate from '@/pages/Translate'
import DeeplinkHelper from '@/pages/DeeplinkHelper'

Vue.use(Router)

console.log('process.env.ROOT_PATH: ' + process.env.ROOT_PATH)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  base: process.env.ROOT_PATH | '/',
  routes: [
    {
      path: '/deeplinkHelper',
      name: 'deeplinkHelper',
      component: DeeplinkHelper
    },
    {
      path: '/translate',
      name: 'translate',
      component: Translate
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '',
      name: 'home',
      component: home
    },
    {
      path: '**',
      name: 'home',
      component: home
    }

  ]
})
