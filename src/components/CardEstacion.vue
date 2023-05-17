<template>
  <div
    class="card cardHover"
    
    :style="{ 'background-color': todosLosIngredientes ? '#c9ffc7' : 'white' }"
  >
    <div class="card-body">
      <h2 class="card-title"
      @click="mostrarEstacion()">
        {{ estacion.nombre }}
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
            <td>{{ estacion.temperature }}</td>
          </tr>
          <tr>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                :id="estacion.id"
                v-model="habilitacion"
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
    this.habilitacion = this.estacion.habilitado
  },
  data() {
    return {
      datos: null,
      habilitacion: null,
    };
  },
  methods: {
    mostrarEstacion() {
      this.$store.dispatch("modificarEstacion", this.estacion);
      this.$router.push("/estacion");
    },
  },
  computed: {
    habilitadoDeshabilitado() {
      if(this.habilitacion) {
        return "Habilitado"
      }
      else {
        return "Deshabilitado"
      }
    }
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
