<template>
  <section class="src-components-buscador-estacion">
    <div class="jumbotron">
      <br />
      <ul class="list-group buscador my-3">
        <li class="list-group-item pb-4">
          <h2 class="mt-2">Buscá tu estacion</h2>
          <table style="color: black" class="container-fluid">
            <tr class="col-12">
              <td style="padding: 0px 20px 0px 0px" class="col-4">
                <label for="nombre">Nombre estacion</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  name="nombre"
                  v-model.trim="nombreEstacion"
                  placeholder="Nombre de estacion..."
                />
              </td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
    <!-- ------------------------------------------------------- -->
    <!--                       CARDS                             -->
    <!-- ------------------------------------------------------- -->

    <div v-if="mostrarCard">
      <div
        class="jumbotron2"
        style="color: black"
        v-if="estacionesFiltradas.length > 0"
      >
        <div class="card-columns">
          <div
            class="col mb-4"
            v-for="(estacion, index) in estacionesFiltradas"
            :key="index"
          >
            <CardEstacion
              :estacion="estacion"
            />
          </div>
        </div>
      </div>
      <div class="alert alert-danger" role="alert" v-else>
        No hay resultados para tu búsqueda
      </div>
    </div>
  </section>
</template>

<script>
import CardEstacion from "./CardEstacion.vue";
export default {
  name: "src-components-buscador-estacion",
  components: {
    CardEstacion,
  },
  props: [],
  async beforeMount() {
    await this.getEstaciones();
  },
  data() {
    return {
      urlEstaciones: "https://635723ad9243cf412f93b0b0.mockapi.io/estaciones",
      nombreEstacion: "",
      estaciones: [],
      mostrarCard: false,
    };
  },
  methods: {
    async getEstaciones() {
      try {
        let res = await this.axios(this.urlEstaciones);
        let estaciones = res.data;
        this.estaciones = estaciones;
        console.log(estaciones);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    estacionesFiltradas() {
      let estacionesFiltradas = this.estaciones;
      if (this.nombreEstacion != "") {
        estacionesFiltradas = estacionesFiltradas.filter((estacion) =>
          estacion.nombre.toLowerCase().includes(this.nombreEstacion)
        );
      }
      return estacionesFiltradas;
    },
  },
  watch: {
    estacionesFiltradas: {
      deep: true,
      handler: function () {
        this.mostrarCard = true;
      },
    },
  },
};
</script>

<style scoped lang="css">
.jumbotron {
  background-image: url("../images/estacion-de-torta-oreo-800x534.jpg");
  color: white;
  background-size: cover;
  height: 75vh;
}

.jumbotron2 {
  padding: 30px 10px;
  background-color: #2f2f2fb3;
  color: white;
  background-size: cover;
}

hr {
  background-color: #bbb;
}

.list-group-item {
  background-color: #2f2f2fac !important;
}

table {
  width: -moz-available;
}
label {
  color: white;
}
</style>
