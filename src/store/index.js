import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

const storageAvailable = type => {
  try {
    let storage = window[type]
    let x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return false
  }
}

const STORE_KEY = 'mitchell-barton'
let persistedStore

if (storageAvailable('localStorage')) {
  persistedStore = createPersistedState({
    key: STORE_KEY
  })
} else if (storageAvailable('sessionStorage')) {
  persistedStore = createPersistedState({
    key: STORE_KEY,
    storage: window.sessionStorage
  })
} else {
  persistedStore = createPersistedState({
    key: STORE_KEY,
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, {expires: 3, secure: true}),
      removeItem: key => Cookies.remove(key)
    }
  })
}

let store = new Vuex.Store({
  state: {
    hasLoaded: false,
    pieces: null,
    series: {},
    indexView: true,
    indexCrumb: false,
    projCrumb: false,
    isMobile: false,
    level: 'e'
  },
  mutations: {
    setHasLoaded (state, bool) {
      state.hasLoaded = bool
    },
    setPieces (state, arr) {
      state.pieces = arr
    },
    newPiece (state, obj) {
      state.pieces.push(obj)
    },
    newSeries (state, obj) {
      state.series[obj.stuff.series] = [obj]
    },
    addToSeries (state, obj) {
      state.series[obj.stuff.series].push(obj)
    },
    setIndexView (state, bool) {
      state.indexView = bool
    },
    setIndexCrumb (state, bool) {
      state.indexCrumb = bool
    },
    setProjCrumb (state, bool) {
      state.projCrumb = bool
    },
    setIsMobile (state, bool) {
      state.isMobile = bool
    },
    setLevel (state, str) {
      state.level = str
    },
    resetSeries (state, obj) {
      state.series = {}
    }
  },
  actions: {
    setHasLoaded ({commit}, bool) {
      commit('setHasLoaded', bool)
    },
    setPieces ({commit}, arr) {
      commit('setPieces', arr)
    },
    newPiece ({commit}, obj) {
      commit('newPiece', obj)
    },
    newSeries ({commit}, obj) {
      commit('newSeries', obj)
    },
    addToSeries ({commit}, obj) {
      commit('addToSeries', obj)
    },
    setIndexView ({commit}, bool) {
      commit('setIndexView', bool)
    },
    setIndexCrumb ({commit}, bool) {
      commit('setIndexCrumb', bool)
    },
    setProjCrumb ({commit}, bool) {
      commit('setProjCrumb', bool)
    },
    setIsMobile ({commit}, bool) {
      commit('setIsMobile', bool)
    },
    setLevel ({commit}, str) {
      commit('setLevel', str)
    },
    resetSeries ({commit}) {
      commit('resetSeries')
    }
  },
  plugins: [
    persistedStore
  ]
})

export default store
