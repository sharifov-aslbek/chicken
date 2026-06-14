import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerAnimations } from './animations.js'

const app = createApp(App)
registerAnimations(app)
app.mount('#app')
