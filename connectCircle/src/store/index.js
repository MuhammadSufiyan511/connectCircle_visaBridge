// src/store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) { state.user = user; },
    clearUser(state) { state.user = null; }
  },
  getters: {
    isAuthenticated: (state) => !!state.user
  }
});
