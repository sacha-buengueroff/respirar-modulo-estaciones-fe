import Vue from 'vue'
import Vuex from 'vuex'
import vuejsStorage from 'vuejs-storage'


Vue.use(Vuex)
Vue.use(vuejsStorage)

export default new Vuex.Store({
    state: {
        estacion: {},
        role: null
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
        setRole({commit}, role) {
            try {
                commit('setRole', role)
            }
            catch(error) {
                console.log(error);
            }
        },
        logoutRole({commit}) {
            try {
                commit('logoutRole')
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
        setRole(state, role) {
            state.role = role
        },
        logoutRole(state) {
            state.role = null
        }

    },
    plugins: [
        vuejsStorage({
          keys: ['estacion', 'role'],
          //keep state.count in localStorage
          namespace: 'my-namespace',
          driver: vuejsStorage.drivers.sessionStorage
          //if you want to use sessionStorage instead of localStorage
        })
      ]
})