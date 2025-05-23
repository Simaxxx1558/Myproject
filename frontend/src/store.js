import { createStore } from 'vuex';
import api from '@/api'; 
export default createStore({
  state: {
    token: localStorage.getItem('token') || null,
    clients: []
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    SET_CLIENTS(state, clients) {
      state.clients = clients;
    },
    LOGOUT(state) {
      state.token = null;
      state.clients = [];
      localStorage.removeItem('token');
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const res = await api.login(credentials); 
      commit('SET_TOKEN', res.data.token);
    },
    async fetchClients({ commit }) {
      const res = await api.getClients(); 
      commit('SET_CLIENTS', res.data);
    }
  }
});