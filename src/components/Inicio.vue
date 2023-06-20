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
          <img src="../images/Aire-Puro_1.jpg" class="d-block w-100" alt="..." />
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
  <img src="../images/13.png" class="align-self-center mr-5 imagenNosotros" alt="...">
  <div class="media-body mt-5">
    <h5 class="mt-0">Sobre Respirar</h5>
    <p>El Instituto Ciudades del Futuro (ICF) lanzó RespirAR, una solución tecnológica compuesta por estaciones de medición de calidad del aire que analizan su estado, permitiendo así estudiar su evolución a lo largo del tiempo. A partir de un acuerdo de cooperación celebrado entre Argentina y España, se promueve el desarrollo de una plataforma nacional, con el fin de observar posibles procesos climáticos en el territorio argentino. </p>
    <p>Vale destacar, que esta plataforma permite que cualquiera pueda configurar su propia estación y comenzar a enviar datos desde su casa, con solo unos pocos pasos.</p>
  </div>
</div>
<h1 class="titulo"><span>¡Últimas novedades!</span></h1>
<div class="card-columns my-5 w-75 mx-auto">
  <div class="card">
    <img src="../images/WhatsApp-Image-2022-04-19-at-10.42.59-AM-1-833x1024.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Plataforma RespirAR sigue avanzando</h5>
      <p class="card-text">La Universidad Nacional de La Plata, a través de LINTI – Laboratorio de Investigación en Nuevas Tecnologías Informáticas comenzó a trabajar en el proceso de diseño y puesta en marcha del primer prototipo de la plataforma.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Si supiera que el mundo se acaba mañana, yo, hoy todavía plantaría un árbol.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          M. L. King <cite title="Source Title">Ministro y activista bautista estadounidense</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src="../images/fasta-3-1024x474.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">El ICF presentó RespirAR</h5>
      <p class="card-text">El Instituto Ciudades del Futuro (ICF) lanzó RespirAR, una solución tecnológica compuesta por estaciones de medición de calidad del aire que analizan su estado, permitiendo así estudiar su evolución a lo largo del tiempo.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>"La Tierra proporciona lo suficiente para satisfacer las necesidades de cada ser humano, pero no la de su codicia"</p>
      <footer class="blockquote-footer text-white">
        <small>
          Mahatma Gandhi  <cite title="Source Title">Abogado y activista hindú</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">¿A donde vamos?</h5>
      <p class="card-text">“Vivimos en la Tierra como si tuviéramos otra a la que ir”</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="../images/respirar2.png" class="card-img" alt="...">
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>“Cualquier cosa en la que estés interesado no ocurrirá si no puedes respirar o beber”</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          C. Sagan <cite title="Source Title">Astrofísico y divulgador científico estadounidense.</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">¿Cual es tu realidad?</h5>
      <p class="card-text"><i> La suprema realidad de nuestro tiempo es la vulnerabilidad de nuestro planeta.</i></p>
      <small class="text-muted">
        J. F. Kennedy
        </small>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</section>
</template>
<script>
export default {
  name: "src-components-inicio",
};
</script>
<style scoped lang="css">
.imagenNosotros{
  width: 35%!important;
  margin-left: -90px;
  margin-top: -40px;
}
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
