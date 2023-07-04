import Vue from 'vue'
import VueRouter from 'vue-router'


import login from '../views/login.vue'
import department from '../views/department.vue'
import department2 from '../views/department2.vue'


import ceshi from '../views/ceshi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/department',
    name: 'department',
    component: department
  },
  {
    path: '/department2',
    name: 'department2',
    component: department2
  },

  {
    path: '/ceshi',
    name: 'ceshi',
    component: ceshi
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
