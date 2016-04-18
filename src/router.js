import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Career from './components/Career'

Vue.use(VueRouter)

class Router extends VueRouter {
  constructor () {
    super({
      hashbang: false,
      history: true,
      abstract: false,
      saveScrollPosition: false,
      transitionOnLoad: false
    })
    this.map({
      '*': {
        name: 'default',
        component: Home
      },
      '/': {
        name: 'home',
        component: Home
      },
      '/career': {
        name: 'career',
        component: Career,
        subRoutes: {
          '/:id': {
            name: 'detail',
            component: Career
          }
        }
      }
    })
  }
}

export default new Router()
