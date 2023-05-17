<template>
  <section class="src-componentes-formulario">
    <div class="jumbotron" v-if="!emailEnviado">
      <br>
      <div class="cajaForm">
      <h2>Suscribite al newsletter</h2>
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- ----------------------------------- -->
        <!--            CAMPO EMAIL              -->
        <!-- ----------------------------------- -->
        <validate tag="div">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email"
            name="email"
            required
            placeholder="Ingresa tu email..."
          />
          <!-- Se le pone name igual al del field-messages para que queden relacionados -->

          <!-- Mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="email" class="alert alert-danger mt-1">
              Email no válido
            </div>
          </field-messages>
        </validate>

        <br />

        <button class="btn btn-success my-3" :disabled="formState.$invalid">
          Suscribir
        </button>
      </vue-form>
    </div>
  </div>
    <div class="jumbotron cajitaEnviado" v-else>
      <div class="cajitaEnviado">
        <h2 class="my-5 text-center">¡Email enviado!</h2>
        <h2 class="my-5 text-center">Verificá la casilla de correo <b><i>{{datos.email}}</i></b></h2>
      </div>  
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-subscribir-newsletter',
    props: [],
    mounted () {

    },
    data () {
      return {
        email: "",
        formState: {},
        formData: this.getInitialData(),
        url: "http://localhost:8080/usuarios/enviarMail",
        datos: {},
        emailEnviado: false
      }
    },
    methods: {
      getInitialData() {
      return {
        email: null
      }
      },
      async enviar() {
        this.datos = { ...this.formData };
        await this.axios.post(this.url, this.datos, {
          "content-type": "application/json",
        })
        this.emailEnviado = true;
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">


.jumbotron {
  background-image: url("../images/estacion-de-tarta-banoffee-800x533.jpg");
  color: white;
  background-size: cover;
  height: 100vh;
}

.cajaForm{
  background-color: #2f2f2fac!important;
  border-radius: 5px;
  padding: 20px 20px;
  margin-top: 20px;
}
.cajitaEnviado{
  background-color: #2f2f2fac!important;
  border-radius: 5px;
  padding-top: 120px;
  padding-bottom: 120px;
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
</style>
