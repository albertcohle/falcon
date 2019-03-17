import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageLogin: false
  },
  getters: {
    PAGELOGIN: state => {
      return state.pageLogin
    }
  },
  mutations: {
    SET_PAGELOGIN: state => {
      state.pageLogin = !state.pageLogin
    }
  }
})
