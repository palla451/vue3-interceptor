import { createStore } from 'vuex'
import authModule from "@/store/modules/auth";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule
  }
})
