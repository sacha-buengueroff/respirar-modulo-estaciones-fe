import Vue from 'vue'
import Vuex from 'vuex'
import vuejsStorage from 'vuejs-storage'


Vue.use(Vuex)
Vue.use(vuejsStorage)

export default new Vuex.Store({
    state: {
        estacion: {},
        usuario: null
    },
    actions: {
        modificarEstacion({commit}, estacion) {
            try {
                commit('modificarEstacion', estacion)
            }
            catch (error) {
                console.log(error);
            }
        },
        loginUsuario({commit}, usuario) {
            try {
                commit('loginUsuario', usuario)
            }
            catch(error) {
                console.log(error);
            }
        },
        logoutUsuario({commit}) {
            try {
                commit('logoutUsuario')
            }
            catch(error) {
                console.log(error);
            }
        }  
    },
    mutations: {
        modificarEstacion(state, estacion) {
            state.estacion = estacion
        },
        loginUsuario(state, usuario) {
            state.usuario = usuario
        },
        logoutUsuario(state) {
            state.usuario = null
        }
    },
    plugins: [
        vuejsStorage({
          keys: ['estacion'],
          //keep state.count in localStorage
          namespace: 'my-namespace',
          driver: vuejsStorage.drivers.sessionStorage
          //if you want to use sessionStorage instead of localStorage
        })
      ]
})