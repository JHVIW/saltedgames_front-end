import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    steamId: null,
  },
  mutations: {
    setAuthStatus(state, { isAuthenticated, steamId }) {
      state.isAuthenticated = isAuthenticated;
      state.steamId = steamId;
    },
  },
  actions: {
    updateAuthStatus({ commit }, authStatus) {
      commit('setAuthStatus', authStatus);
    },
  },
});