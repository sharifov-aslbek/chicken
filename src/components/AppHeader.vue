<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from './BrandLogo.vue'

const links = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Biz haqimizda', to: '/biz-haqimizda' },
  { label: 'Mahsulotlar', to: '/mahsulotlar' },
  { label: 'Jarayon', to: '/#process' },
  { label: 'Savollar', to: '/#faq' },
  { label: "Bog'lanish", to: '/boglanish' },
]

const route = useRoute()
function isActive(to) {
  if (to.startsWith('/#')) return false
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(to + '/')
}

const open = ref(false)
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="bar">
        <BrandLogo />

        <nav class="nav" :class="{ 'nav--open': open }">
          <router-link
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav__link"
            :class="{ 'nav__link--active': isActive(link.to) }"
            @click="open = false"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <div class="actions">
          <button class="lang">
            UZ
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <router-link to="/boglanish" class="btn btn-primary" @click="open = false">Hamkor bo'lish</router-link>
          <button class="burger" :class="{ 'burger--open': open }" @click="open = !open" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 16px 0;
  background: transparent;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: var(--cream);
  border-radius: var(--radius-pill);
  padding: 10px 12px 10px 22px;
  box-shadow: var(--shadow-sm);
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
}

.nav__link {
  font-size: 15px;
  font-weight: 500;
  color: var(--ink-soft);
  transition: color 0.18s ease;
}

.nav__link:hover {
  color: var(--orange);
}

.nav__link--active {
  color: var(--orange);
  font-weight: 600;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 15px;
  color: var(--ink-soft);
  padding: 8px 14px;
  border-radius: var(--radius-pill);
}

.lang:hover {
  background: rgba(0, 0, 0, 0.03);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}

.burger span {
  width: 22px;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.burger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger--open span:nth-child(2) {
  opacity: 0;
}
.burger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 1080px) {
  .nav {
    gap: 20px;
  }
}

@media (max-width: 920px) {
  .burger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: calc(100% + 10px);
    left: 16px;
    right: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    background: var(--cream);
    border-radius: var(--radius);
    padding: 12px;
    box-shadow: var(--shadow);
    margin: 0;
    display: none;
  }

  .nav--open {
    display: flex;
  }

  .nav__link {
    padding: 10px 12px;
    width: 100%;
  }

  .lang {
    display: none;
  }
}

@media (max-width: 520px) {
  .actions .btn {
    padding: 12px 18px;
    font-size: 14px;
  }
}
</style>
