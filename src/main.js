import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { registerAnimations } from './animations.js'

const app = createApp(App)
app.use(router)
registerAnimations(app)
app.mount('#app')
