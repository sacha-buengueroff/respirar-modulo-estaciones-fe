<template>
  <div class="jumbotron">
    <div class="card mt-5 cajaForm">
      <div class="card-body">
        <table>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <h1 class="card-title">
                      {{ mostrarNombre }}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <b>Temperature: </b>
                        {{ mostrarTemperature }}
                      </li>
                      <li>
                        <b>pm1: </b>
                        {{ mostrarpm1 }}
                      </li>
                      <li>
                        <b>pm10: </b>
                        {{ mostrarpm10 }}
                      </li>
                      <li>
                        <b>pm25: </b>
                        {{ mostrarpm25 }}
                      </li>
                      <li>
                        <b>Reliability: </b>
                        {{ mostrarReliability }}
                      </li>
                      <li>
                        <b>Street Address: </b>
                        {{ mostrarStreetAddress }}
                      </li>
                      <li>
                        <b>Address Locality: </b>
                        {{ mostrarAddressLocality }}
                      </li>
                      <li>
                        <b>Addres Region: </b>
                        {{ mostrarAddressRegion }}
                      </li>
                      <br />
                      <h3>Coordenadas</h3>
                      <li>
                        <b>Latitud: </b>
                        {{ mostrarLatitud }}
                      </li>
                      <li>
                        <b>Longitud: </b>
                        {{ mostrarLongitud }}
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <l-map
          style="height: 300px"
          :zoom="zoom"
          :center="[mostrarLatitud, mostrarLongitud]">
          <l-tile-layer :url="url2" :attribution="attribution"></l-tile-layer>
          <l-marker
            :lat-lng="[mostrarLatitud, mostrarLongitud]"
          ></l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  name: "src-components-estacion",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: [],
  async beforeMount() {
    console.log(`${this.url}${this.$route.params.id}`);
    let estacion = await this.axios(`${this.url}${this.$route.params.id}`)
    console.log(estacion.data);
    this.estacion = estacion.data
  },
  data() {
    return {
      url: "http://localhost:8080/estaciones/",
      email: "",
      url2: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      estacion: null
    };
  },
  methods: {
    async eliminarEstacion() {
      try {
        await this.axios.delete(`${this.url}${this.mostrarId}`, {
          "content-type": "application/json",
        });
        this.$store.dispatch("modificarEstacion", {});
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    mostrarNombre() {
      const splitArray =  this.estacion? this.estacion.id.split("urn:ngsi-ld:")[1].split(":").join("") : ""
      return splitArray
    },
    mostrarpm1() {
      let pm1 = this.estacion? this.estacion.pm1.value : ""
        return pm1
    },
    mostrarpm10() {
      let pm10 = this.estacion? this.estacion.pm10.value : ""
        return pm10
    },
    mostrarpm25() {
      let pm25 = this.estacion? this.estacion.pm25.value : ""
        return pm25
    },
    mostrarReliability() {
      let reliability = this.estacion? this.estacion.reliability.value : ""
        return reliability
    },
    mostrarTemperature() {
      let temperature = this.estacion? this.estacion.temperature.value : ""
        return temperature
    },
    mostrarStreetAddress() {
      let streetAddress =  this.estacion? this.estacion.address.value.address.streetAddress : ""
        return streetAddress
    },
    mostrarAddressRegion() {
      let addressRegion = this.estacion? this.estacion.address.value.address.addressRegion : ""
        return addressRegion
    },
    mostrarAddressLocality() {
      let addressLocality = this.estacion? this.estacion.address.value.address.addressLocality : ""
        return addressLocality
    },
    mostrarLatitud() {
      let latitud = this.estacion? parseFloat(this.estacion.location.value.coordinates[0]) : ""
        return latitud
      },
    mostrarLongitud() {
      let longitud =  this.estacion? parseFloat(this.estacion.location.value.coordinates[1]) : ""
        return longitud
    }
  },
};
</script>
<style scoped lang="css">
.jumbotron {
  background-image: url("../images/imagePortada2.jpg");
  color: white;
  background-size: cover;
  margin-bottom: 0px!important;
  border-radius: 0px!important;
}
.cajaForm {
  background-color: #2f2f2fac !important;
  border-radius: 5px;
  padding: 20px 20px;
  margin-top: 20px;
  color: white;
}
button {
  text-decoration: none !important;
  color: rgba(255, 255, 255, 0.738) !important;
  background-color: #2f2f2f !important;
  border-color: #2f2f2f !important;
}
button:hover {
  background-color: #d9553b !important;
  transition: 0.5s;
  border-color: #2f2f2f;
}
</style>
