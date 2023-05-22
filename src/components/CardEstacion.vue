<template>
  <div
    class="card cardHover"
    :style="{ 'background-color': todosLosIngredientes ? '#c9ffc7' : 'white' }"
  >
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
    this.habilitacion = this.estacion.habilitado;
  },
  data() {
    return {
      datos: null,
      habilitacion: null,
      url: "http://localhost:8080/estaciones"
    };
  },
  methods: {
    mostrarEstacion() {
      this.$store.dispatch("modificarEstacion", this.estacion);
      console.log(this.estacion)
      this.$router.push("/estacion");
    },
    /* async habilitarDeshabilitarEstacion(idEstacion) {
      try {
        //let url = this.url + idEstacion
        if(this.habilitacion) {
          //TODO: Aca va el metodo de deshabilitar
        } else { 
          //TODO: Aca va el metodo de habilitar
        }
      }
      catch(error) {
        console.log(error)
      }
    }, */
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
.cardHover:hover {
  background-color: #d9553b;
  transition: 1s;
  cursor: pointer;
}
</style>