import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home.vue')
const Start = () => import('@/components/Start.vue')
const Distance = () => import('@/components/Distance.vue')
const Strategy = () => import('@/components/Strategy.vue')
const Equipment = () => import('@/components/Equipment.vue')
const Bbs = () => import('@/components/Bbs.vue')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/distance',
      name: 'distance',
      component: Distance
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: Strategy
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: Equipment
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: Bbs
    },
    {
      path: '/*',
      name: 'Home',
      component: Home
    }
  ]
})
