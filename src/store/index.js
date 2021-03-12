import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      role: ''
    },
    isAuthenticated: true,
    isFirstAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      localStorage.setItem('id', state.currentUser.id)
      localStorage.setItem('name', state.currentUser.name)
      localStorage.setItem('email', state.currentUser.email)
      localStorage.setItem('role', state.currentUser.role)
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('role')
    }
  },
  actions: {
    fetchCurrentUser({ commit }) {
      try {
        const id = localStorage.getItem(id);
        const name = localStorage.getItem(name);
        const email = localStorage.getItem(email);
        const role = localStorage.getItem(role);
        commit('setCurrentUser', {
          id,
          name,
          email,
          role
        })
        return true
      } catch (error) {
        console.error('can not fetch user information')
        return false
      }
    }
  },
  modules: {
  }
})
