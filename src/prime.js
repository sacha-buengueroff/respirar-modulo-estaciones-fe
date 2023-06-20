import Vue from "vue";
import PrimeVue from 'primevue/config';
import MultiSelect from "primevue/multiselect";

import 'primevue/resources/themes/saga-blue/theme.css'    
import 'primevue/resources/primevue.min.css'               
import 'primeicons/primeicons.css'


Vue.use(PrimeVue);
Vue.component("MultiSelect",MultiSelect)
