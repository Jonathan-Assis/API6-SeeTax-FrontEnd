import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/utils/dayjs'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { pt } from 'vuetify/locale'
import App from './App.vue'

import { router } from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'pt',
    messages: { pt }
  }
})

app.use(vuetify)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
import './assets/stylesheet/global.css'
