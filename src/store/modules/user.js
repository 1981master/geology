export default {
  namespaced: true,
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isLoggedIn = true
    },
    CLEAR_USER(state) {
      state.user = null
      state.isLoggedIn = false
    },
  },
  actions: {
    logout({ commit }) {
      //API Call for user logout.
      commit('CLEAR_USER')
    },
    fetchUser({ commit }, userData) {
      // This will be replaced by an actual API call later
      commit('SET_USER', userData)
    },
  },
  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
  },
}
