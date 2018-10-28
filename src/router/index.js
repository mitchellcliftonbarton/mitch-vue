import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Work from '@/components/content/Work'
import Home from '@/components/content/Home'
import Info from '@/components/content/Info'
import Project from '@/components/content/Project'
import Index from '@/components/content/Index'
import Design from '@/components/Design'
import store from './../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/e'
    },
    {
      path: '/e',
      component: MainContainer,
      children: [
        {
          path: '/e',
          component: Home,
          name: 'home'
        },
        {
          path: '/e/work/index',
          component: Index
        },
        {
          path: '/e/work/:piece',
          component: Work,
          beforeEnter: (to, from, next) => {
            store.dispatch('setIndexView', true)
            next()
          }
        },
        {
          path: '/e/project/:project',
          component: Project,
          beforeEnter: (to, from, next) => {
            store.dispatch('setIndexView', false)
            next()
          }
        },
        {
          path: '/e/info',
          name: 'info',
          component: Info
        },
        {
          path: '/e/design-dev',
          name: 'Design',
          component: Design
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
