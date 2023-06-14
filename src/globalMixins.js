import Vue from 'vue'

const miMixinGlobal = {
    methods: {
    },
    computed: {
        mostrarNombreVuex() {
            let nombre = this.$store.state.estacion.ownerId.value
            const splitArray = nombre.split("ngsi-ld:");
            return splitArray[1];            
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
        mostrarEstacionVuex() {
            let estacion = this.$store.state.estacion
            return estacion
        },
        mostrarIdVuex() {
            let id = this.$store.state.estacion._id
            return id
        },
        usuarioLogeadoVuex() {
            return this.$store.state.role !== null
        },
        admin() {
            return this.$store.state.role === 'admin'
        },
        external() {
            return this.$store.state.role === 'external'
        }
    }
}

Vue.mixin(miMixinGlobal)