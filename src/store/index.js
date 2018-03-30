import Vue from 'vue'
import Vuex from 'vuex'
import pieces from './../content/pieces'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLoaded: false,
    pieces: pieces.pieces,
    series: {},
    indexView: true,
    indexCrumb: false,
    projCrumb: false,
    isMobile: false
  },
  mutations: {
    setHasLoaded (state, bool) {
      state.hasLoaded = bool
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
    }
  },
  actions: {
    setHasLoaded ({commit}, bool) {
      commit('setHasLoaded', bool)
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
    }
  }
})
