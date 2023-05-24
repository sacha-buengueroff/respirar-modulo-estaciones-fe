<template>
  <div class="card cardHover">
    <div class="card-body">
      <h2 class="card-title">
        {{ solicitud.name }}
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
            <td>Street Address</td>
            <td>{{ solicitud.addStreet }}</td>
          </tr>
          <tr>
            <td>Address Region</td>
            <td>{{ solicitud.addRegion }}</td>
          </tr>
          <tr>
            <td>Address Locality</td>
            <td>{{ solicitud.addLocaly }}</td>
          </tr>
          <tr>
            <td>Latitud</td>
            <td>{{ solicitud.coordinates[0] }}</td>
          </tr>
          <tr>
            <td>Longitud</td>
            <td>{{ solicitud.coordinates[1] }}</td>
          </tr>
          <tr>
            <td colspan="2">
              <button class="btn btn-success my-3" @click="enviarSolicitud()">Aprobar solicitud</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-card-solicitud",
  props: ["solicitud"],
  beforeMount() {},
  data() {
    return {
      datos: null,
      habilitacion: null,
      url: "http://localhost:8080/solicitudes",
      urlEstaciones: "http://localhost:8080/estaciones",
      formDataSolicitud: this.getInitialDataSolicitud(),
      formStateSolicitud: {},
    };
  },
  methods: {
    getInitialSolicitud() {
      return {
        name: this.solicitud.name,
        streetAdress: this.solicitud.addStreet,
        adressLocality: this.solicitud.addLocaly,
        adressRegion: this.solicitud.addRegion,
        coordinates: [this.solicitud.coordinates[0], this.solicitud.coordinates[1]]
      };
    },
    async enviarSolicitud() {
      let name = this.formDataSolicitud.name;
      name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      this.formDataSolicitud.name = name;
      this.datos = this.formDataSolicitud;
      this.formDataSolicitud = this.getInitialDataSolicitud();
      this.formStateSolicitud._reset();
      let body = {
        name: this.datos.name,
        coordinates: [this.datos.latitud, this.datos.longitud],
        addStreet: this.datos.streetAdress,
        addlocaly: this.datos.adressLocality,
        addRegion: this.datos.adressRegion,
        external: true,
      };
      try {
        let { data } = await this.axios.post(this.urlEstaciones, body, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        let insertedId = data._id;
        this.datos.likes = 0;
        console.log(insertedId);
        this.datos._id = insertedId;
        console.log(JSON.stringify(this.datos, null, 4));
        this.$store.dispatch("modificarEstacion", this.datos);
        this.$router.push("/estacion");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {},
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
  transform: scale(1.03);
  transition: all linear 200ms;
  z-index: 1;
  border: 2px solid #000000;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.card:hover table {
  color: white;
  transition: all linear 200ms;
}
</style>