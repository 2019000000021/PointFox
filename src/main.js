import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Work from './components/Work'
import Reader from './components/Reader'
import Book from './components/Book'
import CNNode from './components/CNNode'
import register from './components/register'


const routes=[
  {
    path:"/login",
    component:Login
  },
  {
    path:"/work",
    component:Work
  },
  {
    path:"/reader",
    component:Reader
  },
  {
    path:"/book",
    component:Book
  },
  {
    path:"/cnnode",
    component:CNNode
  },
  {
    path:"/register",
    component:register
  },
]

const router=new VueRouter({
  routes
})
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
