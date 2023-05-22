import Vue from 'vue'

const miMixinGlobal = {
    methods: {
    },
    computed: {
        mostrarTituloVuex() {
            let titulo = this.$store.state.estacion.ownerId.value
            return titulo
        },
        mostrarpm1Vuex() {
            let titulo = this.$store.state.estacion.pm1.value
            return titulo
        },
        mostrarpm10Vuex() {
            let titulo = this.$store.state.estacion.pm10.value
            return titulo
        },
        mostrarpm25Vuex() {
            let titulo = this.$store.state.estacion.pm25.value
            return titulo
        },
        mostrarReliabilityVuex() {
            let titulo = this.$store.state.estacion.reliability.value
            return titulo
        },
        mostrarTemperatureVuex() {
            let titulo = this.$store.state.estacion.temperature.value
            return titulo
        },
        mostrarDescripcionVuex() {
            let descripcion = this.$store.state.estacion.descripcion
            return descripcion
        },
        mostrarCategoriaVuex() {
            let categoria = this.$store.state.estacion.categoria
            return categoria
        },
        mostrarEstacionVuex() {
            let estacion = this.$store.state.estacion
            return estacion
        },
        mostrarIdVuex() {
            let id = this.$store.state.estacion._id
            return id
        },
        usuarioLogeadoVuex() {
            if (this.$store.state.usuario) {
                return true
            }
            else {
                return false
            }
        }
    }
}

Vue.mixin(miMixinGlobal)