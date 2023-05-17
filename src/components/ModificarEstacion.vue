<template>
  <section class="src-components-ingreso-gastos">
    <div class="jumbotron">
      <div class="cajaForm col-12">
      <h2>Modifique la estacion</h2>

      <table class="container-fluid">
        <tr class="col-12">
          <td class="estacion col-6">
            <!--    FORMULARIO Estacion     -->
            <vue-form :state="formStateEstacion" @submit.prevent="enviarEstacion()">
              <!-- ----------------------------------- -->
              <!--            CAMPO TITULO             -->
              <!-- ----------------------------------- -->
              <validate tag="div">
                <label for="titulo">Titulo</label>
                <input
                  type="text"
                  id="titulo"
                  class="form-control"
                  autocomplete="off"
                  v-model="formDataEstacion.titulo"
                  name="titulo"
                  required
                  :minlength="tituloMinLength"
                />
                <field-messages name="titulo" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                  <div slot="minlength" class="alert alert-danger mt-1">
                    Este campo debe poseer al menos
                    {{ tituloMinLength }} caracteres
                  </div>
                </field-messages>
              </validate>

              <br />

              <!-- ----------------------------------- -->
              <!--         CAMPO DESCRIPCIÓN           -->
              <!-- ----------------------------------- -->
              <validate tag="div">
                <label for="descripcion">Descripción</label>
                <textarea
                  type="text"
                  id="descripcion"
                  class="form-control"
                  autocomplete="off"
                  v-model.trim="formDataEstacion.descripcion"
                  name="descripcion"
                  required
                  rows="15"
                >
                </textarea>
                <field-messages name="descripcion" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>

              <br />

              <!-- ----------------------------------- -->
              <!--          CAMPO CATEGORÍA            -->
              <!-- ----------------------------------- -->
              <div class="form-row">
                <div class="form-group col-md-6">
                  <validate tag="div">
                    <label for="categoria">Categoría</label>
                    <select
                      name="categoria"
                      id="categoria"
                      class="form-control"
                      v-model="formDataEstacion.categoria"
                      required
                    >
                      <option
                        v-for="(categoria, index) in options.categorias"
                        :key="index"
                      >
                        {{ categoria }}
                      </option>
                    </select>
                    <field-messages name="categoria" show="$dirty">
                      <div slot="required" class="alert alert-danger mt-1">
                        Campo requerido
                      </div>
                    </field-messages>
                  </validate>
                </div>
                <div class="form-group col-md-6">
                  <validate tag="div">
                    <label for="momento">Momento</label>
                    <select
                      name="cateogria"
                      id="momento"
                      class="form-control"
                      v-model="formDataEstacion.momento"
                      required
                    >
                      <option
                        v-for="(momento, index) in options.momentos"
                        :key="index"
                      >
                        {{ momento }}
                      </option>
                    </select>
                    <field-messages name="momento" show="$dirty">
                      <div slot="required" class="alert alert-danger mt-1">
                        Campo requerido
                      </div>
                    </field-messages>
                  </validate>
                </div>
              </div>
              <button
                class="btn btn-success my-3"
                :disabled="formStateEstacion.$invalid || ingredientes.length == 0"
              >
                Modificar estacion
              </button>
            </vue-form>
          </td>
          <td class="estacion col-6">
            <!--    FORMULARIO INGREDIENTES     -->
            <vue-form
              :state="formStateIngrediente"
              @submit.prevent="enviarIngrediente()"
            >
              <!-- ----------------------------------- -->
              <!--         CAMPO INGREDIENTE           -->
              <!-- ----------------------------------- -->
              <validate tag="div">
                <label for="ingrediente">Ingrediente</label>
                <input
                  type="text"
                  id="ingrediente"
                  class="form-control"
                  autocomplete="off"
                  v-model="formDataIngrediente.nombre"
                  name="ingrediente"
                  required
                />
                <field-messages name="ingrediente" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>

              <br />

              <!-- ----------------------------------- -->
              <!--           CAMPO CANTIDAD            -->
              <!-- ----------------------------------- -->
              <validate tag="div">
                <label for="cantidad">Cantidad</label>
                <input
                  type="text"
                  id="cantidad"
                  class="form-control"
                  autocomplete="off"
                  v-model.trim="formDataIngrediente.cantidad"
                  name="cantidad"
                  required
                />
                <field-messages name="cantidad" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                </field-messages>
              </validate>

              <button
                class="btn btn-success my-3"
                :disabled="formStateIngrediente.$invalid"
              >
                Agregar
              </button>
            </vue-form>
          </td>
        </tr>
      </table>
    </div>
    </div>

    <br />

    <div class="jumbotron" v-if="mostrarEstacion()">
      <div
        class="jumbotron2"
        style="background-color: rgb(235, 255, 251); color: black"
      >
        <h1>{{ formDataEstacion.titulo }}</h1>
        <hr />
        <h5>{{ `Categoría: ${formDataEstacion.categoria}` }}</h5>
        <h5>{{ `Momento: ${formDataEstacion.momento}` }}</h5>
        <div class="table-responsive">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th>Ingrediente</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tr v-for="(ing, index) in ingredientes" :key="index">
              <td>{{ ing.nombre }}</td>
              <td>{{ ing.cantidad }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="ingredientes.splice(index, 1)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </table>
        </div>
        <hr />
        <p style="white-space: pre-line">{{ formDataEstacion.descripcion }}</p>
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
      formDataIngrediente: this.getInitialDataIngrediente(),
      formStateEstacion: {},
      formStateIngrediente: {},
      datos: null,
      ingredientes: this.$store.state.estacion.ingredientes,
      tituloMinLength: 3,
      limiteVerde: 1000,
      limiteNaranja: 5000,
      presupuesto: "",
      url: "http://localhost:8080/estaciones/",
      options: [],
    };
  },
  methods: {
    getInitialDataEstacion() {
      return {
        titulo: this.$store.state.estacion.titulo,
        descripcion: this.$store.state.estacion.descripcion,
        categoria: this.$store.state.estacion.categoria,
        momento: this.$store.state.estacion.momento,
        likes: this.$store.state.estacion.likes,
      };
    },
    getInitialDataIngrediente() {
      return {
        nombre: "",
        cantidad: "",
      };
    },
    async enviarEstacion() {
      this.datos = this.formDataEstacion;
      this.datos.ingredientes = this.ingredientes;
      console.log(JSON.stringify(this.datos, null, 4));
      this.formDataEstacion = this.getInitialDataEstacion();
      this.ingredientes = [];
      this.formStateEstacion._reset();
      try {
        await this.axios.put(
          `${this.url}${this.mostrarIdVuex}`,
          this.datos,
          {
            "content-type": "application/json",
          }
        );
        this.$store.dispatch("modificarEstacion", this.datos);
        this.$router.push("/estacion");
      } catch (error) {
        console.log(error);
      }
    },
    enviarIngrediente() {
      this.ingredientes.push(this.formDataIngrediente);
      this.formDataIngrediente = this.getInitialDataIngrediente();
      this.formStateIngrediente._reset();
    },
    mostrarEstacion() {
      return (
        this.formDataEstacion.titulo != "" ||
        this.formDataEstacion.descripcion != "" ||
        this.ingredientes.length > 0
      );
    },
    async getOptions() {
      try {
        let res = await this.axios(this.url);
        let estaciones = res.data;
        let categorias = estaciones.map((estacion) => estacion.categoria);
        categorias = [...new Set(categorias)];
        let momentos = estaciones.map((estacion) => estacion.momento);
        momentos = [...new Set(momentos)];
        this.options = { categorias, momentos };
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-image: url("../images/estacion-de-tarta-banoffee-800x533.jpg");
  color: white;
  background-size: cover;
}

.cajaForm{
  background-color: #2f2f2fac!important;
  border-radius: 5px;
  padding: 20px 20px;
  margin-top: 50px;
}

.jumbotron2{
  padding: 30px 10px;
  background-color: #2f2f2fb3!important;
  color: white!important;
  background-size: cover;
}

table{
  color: white;
}

button{
  text-decoration: none!important;
  color: rgba(255, 255, 255, 0.738)!important;
}

button{
  background-color: #2f2f2f!important;
  border-color: #2f2f2f!important;
}
button:hover{
  background-color: #D9553B!important;
  transition: 0.5s;
  border-color: #2f2f2f;
}


td.estacion {
  padding: 50px;
}



hr {
  background-color: #bbb;
}



.muestraEstacion{
  margin-top: 50px;
}

table {
  margin-left: auto;
  margin-right: auto;
  width: -moz-available;
}
</style>
