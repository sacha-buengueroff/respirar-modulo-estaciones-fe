import Vue from 'vue'
import Vuex from 'vuex'
import vuejsStorage from 'vuejs-storage'


Vue.use(Vuex)
Vue.use(vuejsStorage)

export default new Vuex.Store({
    state: {
        estacion: {},
        usuario: null,
        role:null
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
        setRol({commit}, role) {
            try {
                commit('setRol', role)
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
        setRol(state,role) {
            state.role = role
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