<template>
  <div
    class="card cardHover"
    
  >
    <div class="card-body">
      <h2 class="card-title" @click="mostrarSolicitud()">
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
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-card-solicitud",
  props: ["solicitud"],
  beforeMount() {
  },
  data() {
    return {
      datos: null,
      habilitacion: null,
      url: "http://localhost:8080/solicitudes"
    };
  },
  methods: {
    mostrarSolicitud() {
      this.$store.dispatch("modificarSolicitud", this.solicitud);
      console.log(this.solicitud)
      this.$router.push("/solicitud");
    },
  },
  computed: {
  },
  components: {},
};
</script>

<style scoped  lang="css">

.card{
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
  box-shadow: 3px 3px 10px rgba(0,0,0,.3);
  cursor: pointer;
}

.card:hover table{
  color: white;
  transition: all linear 200ms;
}
</style>