import Vue from 'vue'
import createRouter from './router'
import App from './App.vue'

Vue.config.productionTip = false

export default function createApp () {
  return {
    router: createRouter(),
    head: {},
    render: h => h(App)
  }
}
