import Vue from 'vue'

const miMixinGlobal = {
    methods: {
    },
    computed: {
        mostrarNombreVuex() {
            let nombre = this.$store.state.estacion.ownerId.value
            return nombre
        },
        mostrarpm1Vuex() {
            let pm1 = this.$store.state.estacion.pm1.value
            return pm1
        },
        mostrarpm10Vuex() {
            let pm10 = this.$store.state.estacion.pm10.value
            return pm10
        },
        mostrarpm25Vuex() {
            let pm25 = this.$store.state.estacion.pm25.value
            return pm25
        },
        mostrarReliabilityVuex() {
            let reliability = this.$store.state.estacion.reliability.value
            return reliability
        },
        mostrarTemperatureVuex() {
            let temperature = this.$store.state.estacion.temperature.value
            return temperature
        },
        mostrarStreetAddressVuex() {
            let streetAddress = this.$store.state.estacion.address.value.address.streetAddress;
            return streetAddress;
        },
        mostrarAddressRegionVuex() {
            let addressRegion = this.$store.state.estacion.address.value.address.addressRegion;
            return addressRegion;
        },
        mostrarAddressLocalityVuex() {
            let addressLocality = this.$store.state.estacion.address.value.address.addressLocality;
            return addressLocality;
        },
        mostrarLatitudVuex() {
            let latitud = parseFloat(this.$store.state.estacion.location.value.coordinates[0]);
            return latitud;
          },
          mostrarLongitudVuex() {
            let longitud = parseFloat(this.$store.state.estacion.location.value.coordinates[1]);
            return longitud;
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