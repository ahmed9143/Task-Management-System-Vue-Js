const state = {
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  clearToken(state) {
    state.token = null;
    state.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  setUser(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
};

const actions = {
  login({ commit }, credentials) {
    // Mock authentication logic
    if (credentials.email === 'test@example.com' && credentials.password === 'password') {
      const token = 'fake-jwt-token';
      const user = { email: credentials.email }; // Mock user data
      commit('setToken', token);
      commit('setUser', user);
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout({ commit }) {
    commit('clearToken');
  }
};

const getters = {
  isAuthenticated(state) {
    return !!state.token;
  },
  getUser(state) {
    return state.user;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
