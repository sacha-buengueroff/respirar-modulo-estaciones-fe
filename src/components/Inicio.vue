<template>
  <section class="src-components-inicio">
    <div class="cajaCarrousel">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../images/portadaInicio.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img
            src="../images/portada2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img src="../images/portada3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleFade"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleFade"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
  <h1 class="titulo"><span>Sobre nosotros...</span></h1>
  <div class="media my-5 w-75 mx-auto">
  <img src="../images/Respirar.png" class="align-self-center mr-3 w-25" alt="...">
  <div class="media-body mt-5">
    <h5 class="mt-0">Sobre Respirar</h5>
    <p>En Respirar, aca va un texto muy largo para explicar porque tenemos los mejores sensores! ahora voy a repetir esto un par de veces.En Respirar, aca va un texto muy largo para explicar porque tenemos los mejores sensores! ahora voy a repetir esto un par de veces.</p>
    <p>ahora voy a repetir esto un par de veces.En Respirar, aca va un texto muy largo para explicar porque tenemos los mejores sensores!  </p>
  </div>
</div>
<h1 class="titulo"><span>Estaciones fáciles, que nunca fallan!</span></h1>

<div class="card-columns my-5 w-75 mx-auto">
  <div class="card">
    <img src="../images/estacion-de-tarta-banoffee-800x533.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Torta Banoffee tradicional, un antes y después en tus postres</h5>
      <p class="card-text">Hoy les presentamos la estacion de la famosa Tarta Banoffee de plátano o banana, por fuera parece ser super sofisticada pero realmente van a ver que es una pavada, ya que nosotros le vamos a encontrar la vuelta y la hacemos en un toque.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Cuando comes algo y tu paladar te dice lo que falta, ahí es cuando empiezas a combinar.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Justin Quek <cite title="Source Title">The Gourmet Journal</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src="../images/estacion-de-torta-oreo-800x534.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Cómo hacer una Torta Oreo fácil</h5>
      <p class="card-text">La Torta Oreo nos encanta a todos por su ingrediente principal que son las galletitas de chocolate siempre presentes para hacer postres deliciosos. Haceme caso y tené a mano esta estacion, tus tardes de frío te lo van a agradecer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Una estacion no tiene alma. Es el cocinero quien debe darle alma a la estacion.</p>
      <footer class="blockquote-footer text-white">
        <small>
          Thomas Keller <cite title="Source Title">The Gourmet Journal</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Babé, babé.</h5>
      <p class="card-text">Cómo hacer huevos revueltos (¡y que queden bien!)</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="../images/images (3).jpg" class="card-img" alt="...">
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>El descubrimiento de un nuevo plato es de más provecho para la humanidad que el descubrimiento de una estrella.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Jean Anthelme Brillat-Savarin <cite title="Source Title">New York times</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Vas a sufrir y te vas a olvidar.</h5>
      <p class="card-text">Masa para ravioles caseros paso a paso</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
  name: "src-components-inicio",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.carousel{
  opacity: 50%;

}
.carousel-item {
  height: 65vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.card-columns .card {
  display: inline-block;
  width: 100%;
}

.card-img-top {
  width: 100%;
  height: 200px !important; 
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.cajaCarrousel{
  background-color: black;
}

.bg-primary{
  background-color: #4B9960!important;
}


.titulo
{
  background: linear-gradient(
    to right, 
    #43694D 10%, 
    #4B9960 40%, 
    #4b9960a2 60%, 
    #43694D 90%);
  text-align: center;
  color: #fff;
  font-family: tahoma;
  font-weight: lighter;
}

.titulo span
{
  padding: .5em;
  display: block;  
  text-transform: uppercase;
}

</style>
