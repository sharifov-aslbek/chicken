<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import { useI18n } from '../i18n/index.js'

const { t, locale, locales, setLocale } = useI18n()

const links = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.about', to: '/biz-haqimizda' },
  { key: 'nav.products', to: '/mahsulotlar' },
  { key: 'nav.process', to: '/#process' },
  { key: 'nav.faq', to: '/#faq' },
  { key: 'nav.contact', to: '/boglanish' },
]

const route = useRoute()
function isActive(to) {
  if (to.startsWith('/#')) return false
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(to + '/')
}

const open = ref(false)
const langOpen = ref(false)
const langWrap = ref(null)

const currentLang = computed(() => locales.find((l) => l.code === locale.value)?.label || 'UZ')

function chooseLang(code) {
  setLocale(code)
  langOpen.value = false
}

// Close the language dropdown when clicking anywhere outside it.
function onDocClick(e) {
  if (langOpen.value && langWrap.value && !langWrap.value.contains(e.target)) {
    langOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))

// Product detail page uses a flat header (no floating cream pill).
const flat = computed(() => route.name === 'product')

// Contact & products pages use a translucent white bar.
const lightBar = computed(() => route.name === 'contact' || route.name === 'products')
</script>

<template>
  <header class="header" :class="{ 'header--flat': flat, 'header--light': lightBar }">
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
            {{ t(link.key) }}
          </router-link>

          <!-- Shown only inside the mobile dropdown menu -->
          <div class="nav__extra">
            <div class="nav__langs">
              <button
                v-for="l in locales"
                :key="l.code"
                class="nav__lang"
                :class="{ 'nav__lang--active': l.code === locale }"
                @click="chooseLang(l.code)"
              >
                {{ l.label }}
              </button>
            </div>
            <router-link to="/boglanish" class="btn btn-primary nav__cta" @click="open = false">
              {{ t('nav.partner') }}
            </router-link>
          </div>
        </nav>

        <div class="actions">
          <div ref="langWrap" class="lang-wrap">
            <button class="lang" :class="{ 'lang--open': langOpen }" @click="langOpen = !langOpen">
              {{ currentLang }}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <ul v-show="langOpen" class="lang-menu">
              <li v-for="l in locales" :key="l.code">
                <button
                  class="lang-menu__item"
                  :class="{ 'lang-menu__item--active': l.code === locale }"
                  @click="chooseLang(l.code)"
                >
                  {{ l.label }}
                </button>
              </li>
            </ul>
          </div>
          <router-link to="/boglanish" class="btn btn-primary" @click="open = false">{{ t('nav.partner') }}</router-link>
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

/* Desktop: header pill spans up to 1360px wide and stands 84px tall. */
.header .container {
  max-width: calc(1360px + 48px);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 84px;
  background: var(--cream);
  border-radius: var(--radius-pill);
  padding: 10px 12px 10px 28px;
  box-shadow: var(--shadow-sm);
}

/* Contact page — translucent white pill. */
.header--light .bar {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
}

/* Flat variant — header sits directly on the page, no floating pill. */
.header--flat .bar {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 14px 0;
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

.lang-wrap {
  position: relative;
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

.lang svg {
  transition: transform 0.2s ease;
}

.lang--open svg {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  list-style: none;
  background: #fff;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
  padding: 6px;
  min-width: 84px;
  z-index: 60;
}

.lang-menu__item {
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
  padding: 9px 12px;
  border-radius: var(--radius-sm);
  transition: background 0.15s ease, color 0.15s ease;
}

.lang-menu__item:hover {
  background: var(--card-cream);
}

.lang-menu__item--active {
  color: var(--orange);
}

/* Mobile-only menu extras (language + CTA) — hidden on desktop */
.nav__extra {
  display: none;
}

.burger {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  border-radius: 32px;
  background: #f2580c;
}

.burger span {
  width: 18px;
  height: 2px;
  background: #fff;
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

  /* Top bar shows only the burger; language + CTA live in the menu. */
  .lang-wrap,
  .actions > .btn {
    display: none;
  }

  .nav__extra {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    width: 100%;
    margin-top: 8px;
    padding-top: 12px;
    border-top: 1px solid var(--line);
  }

  .nav__langs {
    display: flex;
    gap: 8px;
    padding: 0 4px;
  }

  .nav__lang {
    flex: 1;
    font-size: 14px;
    font-weight: 700;
    color: var(--ink-soft);
    background: #fff;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    padding: 10px 0;
    transition: border-color 0.15s ease, color 0.15s ease;
  }

  .nav__lang--active {
    color: var(--orange);
    border-color: var(--orange);
  }

  .nav__cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
