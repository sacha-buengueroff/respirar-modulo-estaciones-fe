import Vue from 'vue'

Vue.filter('formatoIngrediente', (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
})
