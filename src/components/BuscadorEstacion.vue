<template>
  <section class="src-components-buscador-estacion">
    <div class="jumbotron">
      <br/>
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
              <td style="padding: 0px 20px 0px 0px" class="col-4">
                <label for="usuario">Nombre Usuario</label>
                <input
                  type="text"
                  class="form-control"
                  id="usuario"
                  name="usuario"
                  v-model.trim="nombreUsuario"
                  placeholder="Nombre de usuario..."
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
            v-for="(estacion, index) in estacionesFiltradas" :key="index"
          >
            <CardEstacion :estacion="estacion" />
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
      urlEstaciones: "http://localhost:8081/estaciones",
      nombreEstacion: "",
      nombreUsuario: "",
      estaciones: [],
      mostrarCard: false,
    };
  },
  methods: {
    async getEstaciones() {
      try {
        let res = await this.axios(this.urlEstaciones);
        if(res.status != 200) {
          this.triggerError(res.data)
        }
        let estaciones = res.data;
        this.estaciones = estaciones;
      } catch (error) {
        console.error(error);
      }
    },
    idFormateado(id) {
      const splitArray = id.split("urn:ngsi-ld:")[1].split(":").join("");
      return splitArray;
    },
    soloNombre(nombre) {
      const splitArray = nombre.split("ngsi-ld:");
      return splitArray[1];
    },
  },
  computed: {
    estacionesFiltradas() {
      let estacionesFiltradas = this.estaciones;
      if (this.nombreEstacion != "") {
        estacionesFiltradas = estacionesFiltradas.filter((estacion) => {
          let id = estacion.id;
          return this.idFormateado(id)
            .toLowerCase()
            .includes(this.nombreEstacion.toLowerCase());
        });
      }
      if (this.nombreUsuario != "") {
        estacionesFiltradas = estacionesFiltradas.filter((estacion) => {
          let nombre = estacion.ownerId.value;
          return this.soloNombre(nombre)
            .toLowerCase()
            .includes(this.nombreUsuario.toLowerCase());
        });
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
  background-image: url("../images/imagePortada2.jpg");
  color: white;
  background-size: cover;
  height: 50vh;
  padding: 2rem 2rem !important;
  margin-bottom: 0px!important;
  border-radius: 0px!important;  
}
.jumbotron2 {
  padding: 30px 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(75, 153, 96, 1) 67%,
    rgba(67, 105, 77, 1) 100%
  );
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
