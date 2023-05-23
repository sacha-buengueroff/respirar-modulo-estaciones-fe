<template>
  <section class="src-components-ingreso-gastos">
    <div class="jumbotron">
      <div class="cajaForm col-12">
        <h2>Ingresa una estacion</h2>

        <table class="container-fluid">
          <tr class="col-12">
            <td class="estacion col-6">
              <!--    FORMULARIO Estacion     -->
              <vue-form
                :state="formStateEstacion"
                @submit.prevent="enviarEstacion()"
              >
                <!-- ----------------------------------- -->
                <!--            CAMPO NOMBRE             -->
                <!-- ----------------------------------- -->
                <validate tag="div">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    class="form-control"
                    autocomplete="off"
                    v-model="formDataEstacion.nombre"
                    name="nombre"
                    required
                    :minlength="nombreMinLength"
                  />
                  <field-messages name="nombre" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">
                      Campo requerido
                    </div>
                    <div slot="minlength" class="alert alert-danger mt-1">
                      Este campo debe poseer al menos
                      {{ nombreMinLength }} caracteres
                    </div>
                  </field-messages>
                </validate>
                <br />

                <!-- ----------------------------------- -->
                <!--        CAMPO Street Address         -->
                <!-- ----------------------------------- -->
                <validate tag="div">
                  <label for="streetAdress">Street Adress</label>
                  <input
                    type="text"
                    id="streetAdress"
                    class="form-control"
                    autocomplete="off"
                    v-model="formDataEstacion.streetAdress"
                    name="streetAdress"
                    required
                    :minlength="nombreMinLength"
                  />
                  <field-messages name="streetAdress" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">
                      Campo requerido
                    </div>
                    <div slot="minlength" class="alert alert-danger mt-1">
                      Este campo debe poseer al menos
                      {{ nombreMinLength }} caracteres
                    </div>
                  </field-messages>
                </validate>
                <br />

                <!-- ----------------------------------- -->
                <!--       CAMPO Address Locality        -->
                <!-- ----------------------------------- -->
                <validate tag="div">
                  <label for="adressLocality">Address Locality</label>
                  <input
                    type="text"
                    id="adressLocality"
                    class="form-control"
                    autocomplete="off"
                    v-model="formDataEstacion.adressLocality"
                    name="adressLocality"
                    required
                    :minlength="nombreMinLength"
                  />
                  <field-messages name="adressLocality" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">
                      Campo requerido
                    </div>
                    <div slot="minlength" class="alert alert-danger mt-1">
                      Este campo debe poseer al menos
                      {{ nombreMinLength }} caracteres
                    </div>
                  </field-messages>
                </validate>
                <br />

                <!-- ----------------------------------- -->
                <!--        CAMPO Address Region         -->
                <!-- ----------------------------------- -->
                <validate tag="div">
                  <label for="adressRegion">Address Region</label>
                  <input
                    type="text"
                    id="adressRegion"
                    class="form-control"
                    autocomplete="off"
                    v-model="formDataEstacion.adressRegion"
                    name="adressRegion"
                    required
                    :minlength="nombreMinLength"
                  />
                  <field-messages name="adressRegion" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">
                      Campo requerido
                    </div>
                    <div slot="minlength" class="alert alert-danger mt-1">
                      Este campo debe poseer al menos
                      {{ nombreMinLength }} caracteres
                    </div>
                  </field-messages>
                </validate>
                <br />

                <!-- -------------------------------------------- -->
                <!--           CAMPO Tipo de conexion             -->
                <!-- -------------------------------------------- -->
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <validate tag="div">
                      <label for="tipoConexion">Tipo de conexion</label>
                      <select
                        name="cateogria"
                        id="tipoConexion"
                        class="form-control"
                        v-model="formDataEstacion.tipoConexion"
                        required
                      >
                        <option
                          v-for="(
                            tipoConexion, index
                          ) in options.tipoConexiones"
                          :key="index"
                        >
                          {{ tipoConexion }}
                        </option>
                      </select>
                      <field-messages name="tipoConexion" show="$dirty">
                        <div slot="required" class="alert alert-danger mt-1">
                          Campo requerido
                        </div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <button
                  class="btn btn-success my-3"
                  :disabled="formStateEstacion.$invalid"
                >
                  Enviar estacion
                </button>
              </vue-form>
            </td>
          </tr>
        </table>
      </div>

      <br />

      <div class="jumbotron2" v-if="mostrarEstacion()">
        <div
          class="jumbotron2"
          style="background-color: rgb(235, 255, 251); color: black"
        >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-formulario-estacion",
  props: [],
  async beforeMount() {
    await this.getOptions();
  },
  data() {
    return {
      formDataEstacion: this.getInitialDataEstacion(),
      formStateEstacion: {},
      datos: null,
      nombreMinLength: 3,
      limiteVerde: 1000,
      limiteNaranja: 5000,
      presupuesto: "",
      url: "http://localhost:8080/estaciones",
      options: [],
    };
  },
  methods: {
    getInitialDataEstacion() {
      return {
        nombre: "",
        tipoConexion: "",
      };
    },
    async enviarEstacion() {
      let nombre = this.formDataEstacion.nombre;
      nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
      this.formDataEstacion.nombre = nombre;
      this.datos = this.formDataEstacion;
      this.formDataEstacion = this.getInitialDataEstacion();
      this.formStateEstacion._reset();
      try {
        let { data } = await this.axios.post(this.url, this.datos, {
          "content-type": "application/json",
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
    mostrarEstacion() {
      return this.formDataEstacion.nombre != "";
    },
    async getOptions() {
      try {
        let res = await this.axios(this.url);
        let estaciones = res.data;
        let tipoConexiones = estaciones.map(
          (estacion) => estacion.tipoConexion
        );
        tipoConexiones = [...new Set(tipoConexiones)];
        this.options = { tipoConexiones };
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-image: url("../images/portada2.jpg");
  color: white;
  background-size: cover;
}

.cajaForm {
  background-color: #2f2f2fac !important;
  border-radius: 5px;
  padding: 20px 20px;
  margin-top: 50px;
}

.jumbotron2 {
  padding: 30px 10px;
  background-color: #2f2f2fb3 !important;
  color: white !important;
  background-size: cover;
}

table {
  color: white;
}

button {
  text-decoration: none !important;
  color: rgba(255, 255, 255, 0.738) !important;
}

button {
  background-color: #2f2f2f !important;
  border-color: #2f2f2f !important;
}
button:hover {
  background-color: #d9553b !important;
  transition: 0.5s;
  border-color: #2f2f2f;
}
hr {
  background-color: #bbb;
}

td.estacion {
  padding: 50px;
}

table {
  margin-left: auto;
  margin-right: auto;
  width: -moz-available;
}
</style>
