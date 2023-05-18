import Vue from 'vue'

const miMixinGlobal = {
    methods: {
    },
    computed: {
        mostrarTituloVuex() {
            let titulo = this.$store.state.estacion.titulo
            return titulo
        },
        mostrarDescripcionVuex() {
            let descripcion = this.$store.state.estacion.descripcion
            return descripcion
        },
        mostrarCategoriaVuex() {
            let categoria = this.$store.state.estacion.categoria
            return categoria
        },
        mostrarMomentoVuex() {
            let momento = this.$store.state.estacion.momento
            return momento
        },
        mostrarEstacionVuex() {
            let estacion = this.$store.state.estacion
            return estacion
        },
        mostrarLikesVuex() {
            let likes = this.$store.state.estacion.likes
            return likes
        },
        mostrarIdVuex() {
            let id = this.$store.state.estacion._id
            return id
        },
        usuarioLogeadoVuex() {
            if (this.$store.state.usuario) {
                return true
            }
            else {
                return false
            }
        }
    }
}

Vue.mixin(miMixinGlobal)