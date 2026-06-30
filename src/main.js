import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { registerAnimations } from './animations.js'

const app = createApp(App)
app.use(createPinia())
app.use(router)
registerAnimations(app)
app.mount('#app')

// Hide the minimal logo loader once the router has resolved the first route
// and its components are mounted.
function hideLoader() {
  const loader = document.getElementById('app-loader')
  if (!loader) return
  loader.classList.add('is-hidden')
  loader.addEventListener('transitionend', () => loader.remove(), { once: true })
}

router.isReady().then(() => requestAnimationFrame(hideLoader))
