import User from './user'

const Api = {
  User
}

export default {
  install (Vue) {
    Vue.prototype.$Api = Api
  }
}