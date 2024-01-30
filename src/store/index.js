import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: null,
    password: null,
  },
  getters: {
  },
  mutations: {
    setUserName(state, payload) { state.userName = payload; },
    setPassword(state, payload) { state.password = payload; },
  },
  actions: {
    setUserName({ commit }, userName) {
      commit('setUserName', userName);
      localStorage.setItem('userName', userName);
    },
    setPassword({ commit }, password) {
      commit('setPassword', password);
      localStorage.setItem('password', password);
    },
  },
  modules: {
  }
})
