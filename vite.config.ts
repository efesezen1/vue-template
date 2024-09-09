import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineConfig({
   plugins: [
      vue(),
      vueDevTools(),
      Components({
         dts: true,
         resolvers: [PrimeVueResolver()],
      }),
      AutoImport({
         imports: [
            'vue',
            '@vueuse/core',
            { '@tanstack/vue-query': ['useQuery', 'useQueryClient'] },
         ],
         //  resolvers: [ElementPlusResolver()],
      }),
   ],
   resolve: {
      alias: {
         '@': '/src',
      },
   },
})
