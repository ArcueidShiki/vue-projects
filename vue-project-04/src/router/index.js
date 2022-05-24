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
        component:()=>import('../views/admin/UserListView.vue'),
        meta:{
          title:"用户列表"
        }
      },
      {
        path:'user/add-new',
        component:() =>import('../views/admin/UserAddNewView.vue'),
        meta:{
          title:"添加用户"
        }
      }
    ]
  },
  {
    path: '/login',
    component:LoginView,
    meta:{
      title:"用户登录"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/*路由守卫 每个网址跳转之前 做响应的变化*/
router.beforeEach((to, from, next) => {  if (to.meta.title) {
  document.title = to.meta.title  }  next()
})
export default router
