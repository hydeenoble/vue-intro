import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Others from '@/components/Others'
import Base from '@/components/Base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/i',
      name: 'Base',
      component: Base,
      children: [
        {
          path: 'others',
          name: 'Others',
          component: Others
        },{
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
