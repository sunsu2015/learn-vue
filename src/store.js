import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    amount: 100000
  },
  getters: {
    anotherCount: state => {
      return state.count + 1;
    }
  },
  mutations: {
    increase(state) {
      state.count ++;
    }
  },
  actions: {

  }
})
