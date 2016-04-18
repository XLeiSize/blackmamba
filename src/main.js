import Router from './router'
import domready from 'domready'

import App from './container/Application'
import './stylesheets/main.scss'

class Main {
  constructor () {
    this.router = Router
    this.start()
  }
  start () {
    this.router.start(App, '#application')
  }
}

/* eslint-disable no-new */
domready(() => {
  new Main()
})
