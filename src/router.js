import Vue from "vue";
import VueRouter from "vue-router";

import FormularioSolicitud from "./components/FormularioSolicitud.vue";
import BuscadorEstacion from "./components/BuscadorEstacion.vue";
import Inicio from "./components/Inicio.vue";
import Estacion from "./components/Estacion.vue";
import LoginUsuario from "./components/LoginUsuario.vue";
import FormularioEstacionAdmin from "./components/FormularioEstacionAdmin.vue";
import BuscadorSolicitud from "./components/BuscadorSolicitud.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Inicio },
    { path: "/estaciones", component: BuscadorEstacion },
    { path: "/formulario-solicitud", component: FormularioSolicitud },
    { path: "/formulario-estacion-admin", component: FormularioEstacionAdmin },
    { path: "/estacion/:id", component: Estacion },
    { path: "/login", component: LoginUsuario },
    { path: "/solicitudes", component: BuscadorSolicitud },
  ],
});
