<template>
  <div class="card cardHover">
    <div class="card-body">
      <h2 class="card-title" @click="mostrarEstacion()">
        {{ mostrarId }}
      </h2>
      <h4>
        Owner Id: {{ mostrarSoloNombre }}
      </h4>

      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Atributo</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Street Address</td>
            <td>{{ estacion.address.value.address.streetAddress }}</td>
          </tr>
          <tr>
            <td>Address Region</td>
            <td>{{ estacion.address.value.address.addressRegion }}</td>
          </tr>
          <tr>
            <td>Address Locality</td>
            <td>{{ estacion.address.value.address.addressLocality }}</td>
          </tr>
          <tr>
            <td v-if="admin"><b>Habilitar / Deshabilitar</b></td>
            <td>{{ estacion.tipoConexion }}</td>
          </tr>
          <tr>
            <div class="custom-control custom-switch"  v-if="admin">
              <input
                type="checkbox"
                class="custom-control-input"
                :id="estacion.id"
                v-model="habilitacion"
                @click="habilitarDeshabilitarEstacion(estacion.id)"
              />
              <label class="custom-control-label" :for="estacion.id">
                {{ habilitadoDeshabilitado }}
              </label>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-card-estacion",
  props: ["estacion"],
  beforeMount() {
    this.habilitacion = this.estacion.enable.value;
  },
  data() {
    return {
      datos: null,
      habilitacion: null,
      url: "http://localhost:8080/estaciones/",
    };
  },
  methods: {
    mostrarEstacion() {
      this.$store.dispatch("modificarEstacion", this.estacion);
      console.log(this.estacion);
      this.$router.push(`/estacion/${this.estacion.id}`);
    },
    async habilitarDeshabilitarEstacion(idEstacion) {
      try {
        if (this.habilitacion) {
          await this.axios.put(this.url + "suspenderEstacion/" + idEstacion);
          this.habilitacion = false;
        } else {
          await this.axios.put(this.url + "habilitarEstacion/" + idEstacion);
          this.habilitacion = true;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    habilitadoDeshabilitado() {
      if (this.habilitacion) {
        return "Habilitado";
      } else {
        return "Deshabilitado";
      }
    },
    mostrarId() {
      return this.estacion.id.split("urn:ngsi-ld:")[1].split(":").join("")
    },
    mostrarSoloNombre() {
      const splitArray = this.estacion.ownerId.value.split("ngsi-ld:");
      return splitArray[1];
    }
  },
  components: {},
};
</script>

<style scoped  lang="css">
.card {
  border-radius: 8px;
  border: 1px solid #000000;
  padding: 5px;
  box-sizing: border-box;
  transition: all linear 200ms;
}
.card:hover {
  color: white;
  background-color: #4b9960;
  transform: scale(1.01);
  transition: all linear 200ms;
  z-index: 1;
  border: 1px solid #000000;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.card:hover table {
  color: white;
  transition: all linear 200ms;
}
</style>