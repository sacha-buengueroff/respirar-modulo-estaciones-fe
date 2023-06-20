<template>
  <section class="src-components-buscador-solicitud">
    <div class="jumbotron">
      <br />
      <ul class="list-group buscador my-3">
        <li class="list-group-item pb-4">
          <h2 class="mt-2">Buscá tu solicitud</h2>
          <table style="color: black" class="container-fluid">
            <tr class="col-12">
              <td style="padding: 0px 20px 0px 0px" class="col-4">
                <label for="nombre">Nombre solicitud</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  name="nombre"
                  v-model.trim="nombreSolicitud"
                  placeholder="Nombre de solicitud..."
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
        v-if="solicitudesFiltradas.length > 0"
      >
        <div class="card-columns">
          <div
            class="col mb-4"
            v-for="(solicitud, index) in solicitudesFiltradas"
            :key="index"
          >
            <CardSolicitud
              :solicitud="solicitud"
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
import CardSolicitud from "./CardSolicitud.vue";
export default {
  name: "src-components-buscador-solicitud",
  components: {
    CardSolicitud,
  },
  props: [],
  async beforeMount() {
    await this.getSolicitudes();
  },
  data() {
    return {
      urlSolicitudes: "http://localhost:8081/solicitudes",
      nombreSolicitud: "",
      solicitudes: [],
      mostrarCard: false,
    };
  },
  methods: {
    async getSolicitudes() {
      try {
        let res = await this.axios(this.urlSolicitudes);
        let solicitudes = res.data;
        this.solicitudes = solicitudes;
        console.log(solicitudes);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    solicitudesFiltradas() {
      let solicitudesFiltradas = this.solicitudes;
      if (this.nombreSolicitud != "") {
        solicitudesFiltradas = solicitudesFiltradas.filter((solicitud) =>
          solicitud.name.toLowerCase().includes(this.nombreSolicitud)
        );
      }
      return solicitudesFiltradas;
    },
  },
  watch: {
    solicitudesFiltradas: {
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
  height: 75vh;
  padding: 2rem 2rem!important;
  margin-bottom: 0px!important;
  border-radius: 0px!important;
}
.alert-danger{
  margin-bottom: 0px!important;
  border-radius: 0px!important;
}
.jumbotron2 {
  padding: 30px 10px;
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(75,153,96,1) 67%, rgba(67,105,77,1) 100%);
  color: white;
  background-size: cover;
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
