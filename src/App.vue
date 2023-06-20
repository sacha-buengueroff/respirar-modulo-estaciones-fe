<template>
  <div id="app">
    <div class="contenedor container-fluid">
        <NavBar />
        <router-view></router-view>
        <Footer/>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  }
}
</script>
<style>
#app .container-fluid{
    padding-right: 0px;
    padding-left: 0px;
}
</style>
