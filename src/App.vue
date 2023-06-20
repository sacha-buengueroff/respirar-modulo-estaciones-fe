<template>
  <div id="app">
    <div class="contenedor container-fluid">
        <NavBar />
        <router-view></router-view>
        <Footer/>
    </div>
    <ErrorMessage :error="error" :errorMessage="errorMessage" @dismiss="dismissErrorModal"/>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue"
import ErrorMessage from "./components/ErrorMessage.vue"
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    ErrorMessage
  },
  data() {
    return {
      error: false,
      errorMessage: ""
    }
  },
  methods: {
    dismissErrorModal() {
      this.error = false
    }
  },
  mounted() {
    this.$root.$on('error-triggered', (errorData) => {
      this.error = errorData.error;
      this.errorMessage = errorData.errorMessage;
    });
  }
}
</script>
<style>
#app .container-fluid{
    padding-right: 0px;
    padding-left: 0px;
}
</style>
