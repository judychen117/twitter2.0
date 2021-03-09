import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from "./../apis/user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: ''
    },
    isAuthenticated: false,
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
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.users.get()
        const { id, name, email } = data
        const { statusText } = await usersAPI.users.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        commit('setCurrentUser', {
          id,
          name,
          email
        })
        return true  // add this line
      } catch (error) {
        console.error('can not fetch user information')
        commit('revokeAuthentication')
        return false  // add this line
      }
    }
  },
  modules: {
  }
})
