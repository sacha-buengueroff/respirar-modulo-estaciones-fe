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
            <td>Email</td>
            <td>{{ solicitud.email }}</td>
          </tr>
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
            <td colspan="2">
              <button class="btn btn-danger my-3" @click="rechazarSolicitud()">Rechazar solicitud</button>
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
      url: "http://localhost:8080/solicitudes/",
      urlEstaciones: "http://localhost:8080/estaciones/",
    };
  },
  methods: {
    async enviarSolicitud() {
      let body = {
        name: this.solicitud.name,
        coordinates: [this.solicitud.coordinates[0], this.solicitud.coordinates[1]],
        addStreet: this.solicitud.addStreet,
        addLocaly: this.solicitud.addLocaly,
        addRegion: this.solicitud.addRegion,
        external: true,
        email: this.solicitud.email
      };
      console.log(body)
      try {
        let { data } = await this.axios.post(this.urlEstaciones, body, {
          headers: {
            "Content-Type": "application/json",
          },
        });   
        this.datos = await this.axios.get(this.urlEstaciones + data.id)
        this.$store.dispatch("modificarEstacion", this.datos.data);
        this.$router.push(`/estacion/${data.id}`);
        await this.axios.delete(this.url + this.solicitud._id);
      } catch (error) {
        console.log(error);
      }
    },
    async rechazarSolicitud() {
      await this.axios.delete(`${this.url}/rechazar/${this.solicitud._id}`);
      location.reload()
    }
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