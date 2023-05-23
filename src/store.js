import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    }
})