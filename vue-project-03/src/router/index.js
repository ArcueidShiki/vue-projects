import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:()=> import('../views/HomeView.vue')
  },
  {
    path: '/login',
    component:LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
