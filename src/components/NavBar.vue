<template >
  <section class="src-components-nav-bar">
    <div class="cajitaNav">
    <nav class="navbar navbar-expand-md navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto mt-2">
          <li class="nav-item logo">
            <router-link to="/">
              <a class="nav-link" href="#">
                <img src="../images/14.png" alt="">
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link" href="#">Inicio</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/estaciones">
              <a class="nav-link" href="#">Estaciones</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/formulario-solicitud" v-if="external">
              <a class="nav-link" href="#">Solicita agregar tu Estacion</a>
            </router-link>
          </li>
          <li class="nav-item" v-if="admin">
            <router-link to="/formulario-estacion-admin">
              <a class="nav-link" href="#">Agrega tu Estacion</a>
            </router-link>
          </li>
          <li class="nav-item" v-if="admin">
            <router-link to="/solicitudes">
              <a class="nav-link" href="#">Solicitudes</a>
            </router-link>
          </li>
          <li class="nav-item" v-if="!usuarioLogeadoVuex">
            <router-link to="/newsletter">
              <a class="nav-link" href="#">Suscribirse al Newsletter</a>
            </router-link>
          </li>
        </ul>
        <button
          class="btn btn-success botonLogin my-2 my-sm-0 mr-3"
          @click="$router.push('/login')"
          v-if="!usuarioLogeadoVuex"
        >
          Login
        </button>
        <button
          class="btn btn-danger my-2 my-sm-0"
          @click="logout()"
          v-if="usuarioLogeadoVuex"
        >
          Logout
        </button>
      </div>
    </nav>
  </div>
  </section>
</template>

<script>
export default {
  name: "src-components-nav-bar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    logout() {
      try {
        this.$store.dispatch("logoutRole");
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.nav-link img{
  width: 130px;
}
li a img{
  margin-top: -52px!important;
  margin-right: 0px!important;
  margin-left: -10px;
}
.cajitaNav{
  position: absolute;
  width: 100%;
  z-index: 10000;
}
nav .navbar{
  background-color: transparent;
}

a, button{
  text-decoration: none!important;
  color: rgba(255, 255, 255, 0.738)!important;
}
a:hover{
  color: #4B9960!important;
  transition: 0.5s;
}
button{
  background-color: #2f2f2f;
  border-color: #2f2f2f;
  margin-top: -55px!important;
}
button:hover{
  background-color: #4B9960!important;
  transition: 0.5s;
  border-color: #2f2f2f;
}

</style>
