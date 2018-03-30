import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Work from '@/components/content/Work'
import Home from '@/components/content/Home'
import Info from '@/components/content/Info'
import Project from '@/components/content/Project'
import Index from '@/components/content/Index'
import store from './../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainContainer,
      children: [
        {
          path: '/',
          component: Home,
          name: 'home'
        },
        {
          path: '/work/index',
          component: Index
        },
        {
          path: '/work/:piece',
          component: Work,
          beforeEnter: (to, from, next) => {
            store.dispatch('setIndexView', true)
            next()
          }
        },
        {
          path: '/project/:project',
          component: Project,
          beforeEnter: (to, from, next) => {
            store.dispatch('setIndexView', false)
            next()
          }
        },
        {
          path: '/info',
          name: 'info',
          component: Info
        }
      ]
    }
  ]
})
