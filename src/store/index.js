import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import states from './state'
import mutations from "./mutations";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  getters,
  states,
  mutations
})

export default store
