import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import api from "~/modules/api.js"

const createStore = () => {
    return new Vuex.Store({
      state: {
        query: 'comedy',
        movie: {},
        movies: []
      },
      plugins: [createPersistedState()],
      mutations: {
        setMovies: (state, movies) => {
          state.movies = movies
        },
        setCurrentMovie: (state, movie) => {
          state.movie = movie
        },
        setQuery: (state, query) => {
          state.query = query
        }
      },
      actions: {
        async getMovies ({commit}) {
          let {data} = await api.search(this.state.query)
          commit('setMovies', data.Search)
        },
        async getMovie ({commit, store}, id) {
          let {data} = await api.getMovie(id);
          commit('setCurrentMovie', data)
        },
        async getQuery ({commit}, query) {
            commit('setQuery', query)
        },
        async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
          if (isServer) {
            let {data} = await api.search(this.state.query)
            commit('setMovies', data.Search)
          }
          if (isServer && route.name === 'movie' && params.id) {
            let {data} = await api.getMovie(params.id);
            commit('setCurrentMovie', data)
          }
        }
      }
    })
  }
  
  export default createStore