import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import PrimeVue from 'primevue/config'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'
import router from '@/router'

const presetOptions = {
   theme: {
      preset: Aura,
   },
}

const app = createApp(App)

app.use(PrimeVue, presetOptions)
   .use(VueQueryPlugin)
   .use(router)
   .use(ToastService)
   .mount('#app')
