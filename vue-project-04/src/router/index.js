import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path:'/admin',
    redirect:'/admin/user/list',
    component:()=> import('../views/AdminView.vue'),
    children :[
      {
        path:'user/list',
        component:()=>import('../views/admin/UserListView.vue')
      },
      {
        path:'user/add-new',
        component:() =>import('../views/admin/UserAddNewView.vue')
      }
    ]
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
