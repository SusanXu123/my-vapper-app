import User from '../apis/user'

export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    async fetchUser ({commit}, userId) {
      const user = await User.fetchUserInfo(userId)
      commit('setUser', user)
    }
  }
}