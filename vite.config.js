import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base:'./',
    homepage: "https://essers-web.github.io/MaasEssers/",
    plugins: [vue()],
})

