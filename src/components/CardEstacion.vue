<template>
  <div class="card cardHover">
    <div class="card-body">
      <h2 class="card-title" @click="mostrarEstacion()">
        {{ estacion.ownerId.value }}
      </h2>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Atributo</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temperatura</td>
            <td>{{ estacion.temperature.value }}</td>
          </tr>
          <tr>
            <td>pm1</td>
            <td>{{ estacion.pm1.value }}</td>
          </tr>
          <tr>
            <td>pm10</td>
            <td>{{ estacion.pm10.value }}</td>
          </tr>
          <tr>
            <td>pm25</td>
            <td>{{ estacion.pm25.value }}</td>
          </tr>
          <tr>
            <td>Reliability</td>
            <td>{{ estacion.reliability.value }}</td>
          </tr>
          <tr>
            <td>Tipo de conexión</td>
            <td>{{ estacion.tipoConexion }}</td>
          </tr>
          <tr>
            <div class="custom-control custom-switch">
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
      this.$router.push("/estacion");
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
    },
  },
  computed: {
    habilitadoDeshabilitado() {
      if (this.habilitacion) {
        return "Habilitado";
      } else {
        return "Deshabilitado";
      }
    },
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