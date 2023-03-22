import "bootstrap/dist/css/bootstrap.min.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import { createApp } from 'vue'

import App from './App.vue'
import './assets/main.css'

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

import "bootstrap/dist/js/bootstrap.js"
/* app.use(createPinia())
app.use(router)
 */
app.mount('#app')
