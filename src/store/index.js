import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    modules: {User}
  })
}