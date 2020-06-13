import Vue from 'vue'
import Vuex from 'vuex'

import dialogs from './modules/dialogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentDialog: 0,
    dialogLoading: false,
    messageSending: false
  },
  mutations: {
    SET_CURRENT_DIALOG (state, current) {
      state.currentDialog = current
    },
    SET_LOADING (state, status) {
      state.dialogLoading = status
    },
    SET_SENDING (state, status) {
      state.messageSending = status
    }
  },
  actions: {
    setCurrentDialog ({ commit }, current) {
      commit('SET_CURRENT_DIALOG', current)
    },
    setLoading ({ commit }, status) {
      commit('SET_LOADING', status)
    },
    setSending ({ commit }, status) {
      commit('SET_SENDING', status)
    }
  },
  getters: {
    getCurrentDialog: state => state.currentDialog,
    getLoadingStatus: state => state.dialogLoading,
    getMessageStatus: state => state.messageSending
  },

  modules: {
    dialogs
  }
})
