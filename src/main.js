import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Primevue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'      
import 'primevue/resources/primevue.min.css'                
import 'primeicons/primeicons.css'

// PrimeVUe Componentes
import RadioButton from 'primevue/radiobutton';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Primevue);
app.component('RadioButton', RadioButton);



app.mount('#app');