<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from '../i18n/index.js'
import videoImg from '../assets/images/VideoPlayer.png'
import { useOverallStore } from '../store/overall.js'
import { mediaUrl } from '../utils/media.js'
import { RouterLink } from 'vue-router'

const { t, locale } = useI18n()
const store = useOverallStore()
const { home } = storeToRefs(store)

onMounted(() => {
  if (!home.value) store.getHome()
  if (!store.category) store.getCategories()
})

// API text fields are { uz, ru, en } objects — pick the active locale, fall back to UZ.
function tr(field) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[locale.value] || field.uz || ''
}

// Response is an array of categories, each holding its own products list.
// Tabs follow a fixed display order (by category id, stable across locales):
// Muzlatilgan & Qadoqlangan, Sovutilgan & Qadoqlangan, Yarim tayyor,
// Marinadlangan, Dudlangan, Yangi so'yilgan. Unknown ids go last, API order.
const CATEGORY_ORDER = [4, 3, 1, 5, 6, 2]
const rank = (c) => {
  const i = CATEGORY_ORDER.indexOf(c.id)
  return i === -1 ? CATEGORY_ORDER.length : i
}
const categories = computed(() => [...(home.value || [])].sort((a, b) => rank(a) - rank(b)))
const filters = computed(() => categories.value.map((c) => tr(c.name)))
const activeIndex = ref(0) // drives the pill highlight — updates instantly on click
const shownIndex = ref(0) // drives the cards — deferred so the pill paints first

// Initial load: no home feed yet — pills and cards render as skeletons.
const loading = computed(() => !home.value)

// Swapping all cards is a heavy re-render (images + reveal directives) that
// would freeze the pill's color transition if done in the click frame. On
// click the grid drops to lightweight skeleton cards, and the real cards
// land only after the pill transition has finished.
const swapping = ref(false)
let swapTimer = null
function select(i) {
  if (i === activeIndex.value) return
  activeIndex.value = i
  swapping.value = true
  clearTimeout(swapTimer)
  swapTimer = setTimeout(() => {
    shownIndex.value = i
    swapping.value = false
  }, 200)
}

onUnmounted(() => clearTimeout(swapTimer))

// Cards = products of the currently selected category.
const visible = computed(() => categories.value[shownIndex.value]?.products || [])
</script>

<template>
  <section id="products" class="products">
    <div class="container">
      <div v-reveal3d.pop class="products__video" :style="{ backgroundImage: `url(${videoImg})` }">
        <span class="video-progress"></span>
      </div>
    </div>

    <div class="container">
      <div class="products__head">
        <div v-reveal.left>
          <p class="eyebrow">{{ t('prod.eyebrow') }}</p>
          <h2 class="section-title products__title">
            {{ t('prod.title') }}
          </h2>
          <p class="section-lead">
            {{ t('prod.lead') }}
          </p>
        </div>
        <router-link v-reveal.right="120" to="mahsulotlar" class="products__all">
          {{ t('prod.all') }}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>

      <Transition name="swap" mode="out-in">
        <!-- Pill skeletons while the home feed loads -->
        <div v-if="loading" key="skel" class="filters" aria-hidden="true">
          <span v-for="n in 6" :key="n" class="filter skel skel--pill"></span>
        </div>
        <div v-else key="filters" v-reveal class="filters">
          <button
            v-for="(f, i) in filters"
            :key="i"
            class="filter"
            :class="{ 'filter--active': i === activeIndex }"
            @click="select(i)"
          >
            {{ f }}
          </button>
        </div>
      </Transition>

      <!-- Card skeletons: initial load + the brief window during a tab swap.
           The out-in crossfade keeps both directions of the swap smooth. -->
      <Transition name="swap" mode="out-in">
      <div v-if="loading || swapping" key="skel" class="cards" aria-hidden="true">
        <div v-for="n in 4" :key="n" class="card skel-card">
          <div class="card__media skel"></div>
          <div class="card__body">
            <div class="skel skel--chip"></div>
            <div class="skel skel--title"></div>
            <div class="skel skel--text"></div>
            <div class="skel skel--link"></div>
          </div>
        </div>
      </div>

      <div v-else key="cards" class="cards">
        <article v-for="(p, i) in visible" :key="p.id" v-scroll3d class="card">
          <div v-reveal3d.pop class="card__media img-ph">
            <img v-if="p.image" :src="mediaUrl(p.image)" :alt="tr(p.title)" class="card__img" decoding="async" loading="lazy" />
            <svg v-else class="card__ph-icon" viewBox="0 0 24 24" fill="none">
              <path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div v-reveal3d.cascade="i * 60" class="card__body">
            <span class="card__chip">{{ tr(p.category_name) }}</span>
            <h3 class="card__title">{{ tr(p.title) }}</h3>
            <p class="card__text">{{ tr(p.short_description) }}</p>
            <router-link :to="`/mahsulotlar/${p.id}`" class="card__link">
              {{ t('prod.detail') }}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.products {
  padding: 90px 0;
  background: #fff;
}

.products__video {
  width: 100%;
  aspect-ratio: 16 / 8.2;
  margin-bottom: 56px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
}

.video-progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
}

.video-progress::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 28%;
  background: var(--orange);
}

.products__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 28px;
}

.products__title {
  margin: 14px 0 14px;
  max-width: 460px;
}

.products__all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 15px;
  color: var(--orange-strong);
  white-space: nowrap;
}

.products__all:hover {
  color: var(--orange);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
}

.filter {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  background: var(--card-cream);
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease;
}

.filter:hover {
  background: #f7e2cf;
}

.filter:active {
  transform: scale(0.95);
}

.filter--active {
  background: var(--orange);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(255, 84, 10, 0.25);
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

/* Smooth crossfade when skeletons swap with real content (and back). */
.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.swap-enter-from,
.swap-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Skeleton pulse — a soft opacity breath that matches the page's
   fade-based reveal animations. */
.skel {
  background: var(--card-cream);
  animation: skel-pulse 1.4s ease-in-out infinite;
}

@keyframes skel-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.55;
  }
}

.skel--pill {
  width: 118px;
  height: 38px;
  padding: 0;
  pointer-events: none;
}

.skel-card {
  pointer-events: none;
}

.skel--chip,
.skel--title,
.skel--text,
.skel--link {
  border-radius: var(--radius-pill);
}

.skel--chip {
  width: 40%;
  height: 24px;
  margin-bottom: 12px;
}

.skel--title {
  width: 75%;
  height: 18px;
  margin-bottom: 10px;
}

.skel--text {
  width: 90%;
  height: 14px;
  margin-bottom: 18px;
}

.skel--link {
  width: 45%;
  height: 14px;
}

.card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  background: #fff;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.card__media {
  aspect-ratio: 4 / 3;
  background: var(--card-cream);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__media::after {
  display: none;
}

.card__ph-icon {
  width: 34px;
  height: 34px;
  color: #d8b89a;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__body {
  padding: 18px 18px 22px;
}

.card__chip {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--card-cream);
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  margin-bottom: 12px;
}

.card__title {
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}

.card__text {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 16px;
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 14px;
  color: var(--orange-strong);
}

.card__link:hover {
  color: var(--orange);
}

@media (max-width: 980px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }

  .products__head {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  /* Horizontal scroll-snap slider; the next card peeks at the edge. */
  .cards {
    display: flex;
    grid-template-columns: none;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-padding: 0 24px;
    /* Bleed to the viewport edges, then pad back so the first card aligns. */
    margin: 0 -24px;
    padding: 4px 24px 8px;
    scrollbar-width: none;
  }

  .cards::-webkit-scrollbar {
    display: none;
  }

  .card {
    flex: 0 0 78%;
    scroll-snap-align: start;
  }
}
</style>
