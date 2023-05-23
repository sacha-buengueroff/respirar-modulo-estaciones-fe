<template>

  <section class="src-components-footer">
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        
                        <h4>Sobre nosotros</h4>
                        <p>En Respirar, aca va un texto muy largo para explicar porque tenemos los mejores sensores! ahora voy a repetir esto un par de veces.En Respirar, aca va un texto muy largo para explicar porque tenemos los mejores sensores! ahora voy a repetir esto un par de veces.En Respirar, aca va un texto muy largo para explicar porque tenemos los mejores sensores! ahora voy a repetir esto un par de veces.</p>

                    </div>

                    <div class="col-md-4">
                        <h4>Información</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>Buenos Aires, Argentina</li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:#">tripitconsultora@gmail.com</a></li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:11-4325-6578">11-4325-6578 </a></li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h4>¡Seguinos!</h4>
                        <ul class="social-icon">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <p class="copyright text-uppercase">Copyright © 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-footer',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">footer {
  color: #fff;
}
ul {
  padding: 0px;
}
ol, ul {
  margin-bottom: 0px;
}

.social-icon {
  padding: 0;
  margin-bottom: 0px;
      float: right;
}

.social-icon li {
  list-style: none;
  display: inline-block;
}
.social-icon li i {
  font-size: 14px;
  color: #262725;
  border: solid 2px #ffffff;
  height: 31px;
  width: 31px;
  text-align: center;
  vertical-align: middle;
  border-radius: 100px;
  line-height: 27px;
  margin-right: 15px;
  transition: 1s;
  background: #fff;
}
.social-icon li i:hover {
  border: solid 2px #262725;
  color: #ffffff;
  background: #262725;
}

.footer-top {
  background: #2f2f2f;
  padding:50px 0 50px;
}
.footer-top h4 {
  font-size: 19px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.footer-top p {
  font-size: 13px;
  line-height: 2;
}

footer p {
margin-bottom:0;
}
.footer-logo {
  display: block;
  margin-bottom: 32px;
}
.address1 li {
  list-style: none;
  position: relative;
  padding: 0px 0 14px 34px;
  line-height: 26px;
}
ul.address1 span {
  position: absolute;
  width: 40px;
  max-width: 40px;
  left: 0;
}
.address1 li a {
  color: #fff;
  text-decoration: none;
}
ul.address1 i {
  width: 20px;
  position: absolute;
  left: 0px;
  text-align: center;
  font-size: 28px;
  top: 0;
}

ul.address1 i.fa-envelope {
  font-size: 18px;
  top: 4px;
}
footer ul.social-icon {
  float: left;
}
footer .social-icon li i:hover {
  background: #4B9960;
  border-color: #4B9960;
}

.footer-bottom {
  background: #43694D;
  padding: 10px 0px;
}
.copyright {
  font-size: 18px;
}
</style>
