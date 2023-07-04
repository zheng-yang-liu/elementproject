import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login.vue"

import layout from "@/views/layout.vue"

import table from "@/views/table.vue"
import table2 from "@/views/table2.vue"

import dialog from "@/views/dialog"
import dialog1 from "@/views/dialog1"



import select2 from "@/views/select2.vue"
import select from "@/views/select.vue"
import time from "@/views/time.vue"
import navmenu from "@/views/navmenu.vue"
import index from "@/views/index.vue"



Vue.use(VueRouter)

const routes = [
  // {path:'/',redirect:'/long'},
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/layout',
    name: 'layout',
    component: layout
  },
  {
    path: '/table',
    name: 'table',
    component: table
  },
  {
    path: '/table2',
    name: 'table2',
    component: table2
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: dialog
  },
  {
    path: '/dialog1',
    name: 'dialog1',
    component: dialog1
  },
  
  {
    path: '/select2',
    name: 'select2',
    component: select2
  },
  {
    path: '/select',
    name: 'select',
    component: select
  },
  {
    path: '/time',
    name: 'time',
    component: time
  },
  {
    path: '/navmenu',
    name: 'navmenu',
    component: navmenu
  },


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
