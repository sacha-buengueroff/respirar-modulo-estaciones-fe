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
            <td style="float: right">
              <ul style="list-style-type: none">
                <li v-if="!usuarioLogeadoVuex">
                  <button
                    type="button"
                    class="btn btn-primary mb-3"
                    data-toggle="modal"
                    data-target="#modalMail"
                  >
                    Enviar al mail
                  </button>
                  <div
                    class="modal fade"
                    id="modalMail"
                    tabindex="-1"
                    aria-labelledby="modalMailLabel"
                    aria-hidden="true"
                    role="dialog"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                          <label for="email"
                            >Ingrese un mail para enviar la estacion</label
                          >
                          <input
                            type="email"
                            id="email"
                            class="form-control"
                            autocomplete="off"
                            v-model.trim="email"
                            name="email"
                            required
                            placeholder="Ingresa tu email..."
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click="enviarEstacion()"
                            data-dismiss="modal"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li v-if="usuarioLogeadoVuex">
                  <button
                    type="button"
                    class="btn btn-primary mb-3"
                    @click="$router.push('/modificar')"
                  >
                    Modificar
                  </button>
                </li>
                <li v-if="usuarioLogeadoVuex">
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Eliminar
                  </button>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-body">
                          Segurx que deseas eliminar la estacion?
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click="eliminarEstacion()"
                            data-dismiss="modal"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <l-map
          style="height: 300px"
          :zoom="zoom"
          :center="[mostrarLatitud, mostrarLongitud]"
        >
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
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
      if (this.estacion) {
        let id = this.estacion.id
        const splitArray = id.split("urn:ngsi-ld:")[1].split(":").join("");
        return splitArray;            
      }
      else {
        return ""
      }
    },
    mostrarpm1() {
      if (this.estacion) {
        let pm1 = this.estacion.pm1.value
        return pm1
      }
      else {
        return ""
      }
    },
    mostrarpm10() {
      if (this.estacion) {
        let pm10 = this.estacion.pm10.value
        return pm10
      }
      else {
        return ""
      }
    },
    mostrarpm25() {
      if (this.estacion) {
        let pm25 = this.estacion.pm25.value
        return pm25
      }
      else {
        return ""
      }
    },
    mostrarReliability() {
      if (this.estacion) {
        let reliability = this.estacion.reliability.value
        return reliability
      }
      else {
        return ""
      }
    },
    mostrarTemperature() {
      if (this.estacion) {
        let temperature = this.estacion.temperature.value
        return temperature
      }
      else {
        return ""
      }
    },
    mostrarStreetAddress() {
      if (this.estacion) {
        let streetAddress = this.estacion.address.value.address.streetAddress;
        return streetAddress;
      }
      else {
        return ""
      }
    },
    mostrarAddressRegion() {
      if (this.estacion) {
        let addressRegion = this.estacion.address.value.address.addressRegion;
        return addressRegion;
      }
      else {
        return ""
      }
    },
    mostrarAddressLocality() {
      if (this.estacion) {
        let addressLocality = this.estacion.address.value.address.addressLocality;
        return addressLocality;
      }
      else {
        return ""
      }
    },
    mostrarLatitud() {
      if (this.estacion) {
        let latitud = parseFloat(this.estacion.location.value.coordinates[0]);
        return latitud;
      }
      else {
        return ""
      }
      },
    mostrarLongitud() {
      if (this.estacion) {
        let longitud = parseFloat(this.estacion.location.value.coordinates[1]);
        return longitud;
      }
      else {
        return ""
      }
    }
  },
};
</script>

<style scoped lang="css">
.jumbotron {
  background-image: url("../images/portada2.jpg");
  color: white;
  background-size: cover;
}
.cajaForm {
  background-color: #2f2f2fac !important;
  border-radius: 5px;
  padding: 20px 20px;
  margin-top: 20px;
  color: white;
}
.table {
  color: white;
}

button {
  text-decoration: none !important;
  color: rgba(255, 255, 255, 0.738) !important;
}

button {
  background-color: #2f2f2f !important;
  border-color: #2f2f2f !important;
}
button:hover {
  background-color: #d9553b !important;
  transition: 0.5s;
  border-color: #2f2f2f;
}

.modal-body {
  color: black;
}
</style>
