import Vue from 'vue'
import createRouter from './router'
import createStore from './store'
import App from './App.vue'
import Api from './apis/index'

Vue.config.productionTip = false
Vue.use(Api)
export default function createApp () {
  return {
    store: createStore(),
    router: createRouter(),
    head: {},
    render: h => h(App)
  }
}
