import Vue from 'vue'

import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import Reader from './components/Reader.vue'
import Book from './components/Book.vue'
import CNNode from './components/CNNode.vue'
import Register from './components/Register.vue'

const routes = [
  {
    path:"/register",
    component:Register
  },
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
  }
]

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
