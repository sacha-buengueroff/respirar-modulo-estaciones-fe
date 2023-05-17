import Vue from "vue";
import VueRouter from "vue-router";

import FormularioEstacion from "./components/FormularioEstacion.vue";
import BuscadorEstacion from "./components/BuscadorEstacion.vue";
import Inicio from "./components/Inicio.vue";
import Estacion from "./components/Estacion.vue";
import LoginUsuario from "./components/LoginUsuario.vue";
import ModificarEstacion from "./components/ModificarEstacion.vue";
import SubscribirNewsletter from "./components/SubscribirNewsletter.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Inicio },
    { path: "/estaciones", component: BuscadorEstacion },
    { path: "/formulario-estacion", component: FormularioEstacion },
    { path: "/estacion", component: Estacion },
    { path: "/login", component: LoginUsuario },
    { path: "/modificar", component: ModificarEstacion },
    { path: "/newsletter", component: SubscribirNewsletter },
  ],
});
