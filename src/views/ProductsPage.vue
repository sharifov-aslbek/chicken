<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import productImg from '../assets/images/StaticProduct.png'
import { useI18n } from '../i18n/index.js'
import { useOverallStore } from '../store/overall.js'
import { mediaUrl } from '../utils/media.js'
import { sortCategories } from '../utils/categoryOrder.js'

const { t, locale } = useI18n()
const route = useRoute()
const store = useOverallStore()
const { category, products, productsLoading } = storeToRefs(store)

// API text fields are { uz, ru, en } objects — pick the active locale, fall back to UZ.
function tr(field) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[locale.value] || field.uz || ''
}

const allLabel = computed(
  () => ({ uz: 'Barchasi', ru: 'Все', en: 'All' }[locale.value] || 'Barchasi')
)

// "All" chip first, then one chip per API category — same fixed order as the
// home page tabs.
const filters = computed(() => [
  { id: null, name: allLabel.value },
  ...sortCategories(category.value).map((c) => ({ id: c.id, name: tr(c.name) })),
])
const activeIndex = ref(0) // 0 = "All"

const visible = computed(() => products.value || [])

function loadProducts() {
  const cat = filters.value[activeIndex.value]
  // "All" (id null) hits the full list; a real category uses its own endpoint.
  if (cat?.id != null) {
    store.getCategoryProducts(cat.id, { limit: 50 })
  } else {
    store.getProducts({ limit: 50 })
  }
}

// ?category=<id> (e.g. from the home section's "view all") pre-selects a tab.
// Returns true when it changed the tab — the activeIndex watcher then fetches.
function applyQueryCategory() {
  const qid = Number(route.query.category)
  if (!qid) return false
  const idx = filters.value.findIndex((f) => f.id === qid)
  if (idx <= 0 || idx === activeIndex.value) return false
  activeIndex.value = idx
  return true
}

// Runs during setup (not onMounted) so a cached-categories visit flips
// productsLoading before the first render — the skeleton grid shows
// immediately instead of an empty cards area for a frame.
async function init() {
  if (!category.value) await store.getCategories()
  if (!applyQueryCategory()) loadProducts()
}
init()

watch(activeIndex, loadProducts)
watch(() => route.query.category, applyQueryCategory)
</script>

<template>
  <section class="page">
    <!-- Hero band -->
    <div class="hero">
      <div class="container">
        <nav v-reveal class="crumbs">
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <span>›</span>
          <span class="crumbs__current">{{ t('nav.products') }}</span>
        </nav>
        <p v-reveal="60" class="eyebrow">{{ t('catalog.eyebrow') }}</p>
        <h1 v-reveal="120" class="hero__title">
          {{ t('catalog.title') }}
        </h1>
        <p v-reveal="200" class="hero__lead">
          {{ t('catalog.lead') }}
        </p>
      </div>
    </div>

    <!-- Catalog -->
    <div class="catalog container">
      <Transition name="swap" mode="out-in">
        <!-- Pill skeletons while categories load -->
        <div v-if="!category" key="skel" class="filters" aria-hidden="true">
          <span v-for="n in 7" :key="n" class="filter skel skel--pill"></span>
        </div>
        <div v-else key="filters" v-reveal class="filters">
          <button
            v-for="(c, i) in filters"
            :key="i"
            class="filter"
            :class="{ 'filter--active': i === activeIndex }"
            @click="activeIndex = i"
          >
            {{ c.name }}
          </button>
        </div>
      </Transition>

      <!-- Skeleton grid while categories or a tab's products are being fetched -->
      <div v-if="productsLoading || !category" class="cards cards--skel" aria-hidden="true">
        <div v-for="n in 8" :key="n" class="card skel-card">
          <div class="card__media skel"></div>
          <div class="card__body">
            <div class="skel skel--chip"></div>
            <div class="skel skel--title"></div>
            <div class="skel skel--text"></div>
            <div class="skel skel--link"></div>
          </div>
        </div>
      </div>

      <transition-group v-else name="card-list" tag="div" class="cards">
        <router-link
          v-for="p in visible"
          :key="p.id"
          :to="`/mahsulotlar/${p.id}`"
          class="card"
        >
          <div class="card__media field-ph" :class="{ skel: p.image }">
            <img
              v-if="p.image"
              :src="mediaUrl(p.image)"
              :alt="tr(p.title)"
              class="card__img"
              @load="$event.target.classList.add('card__img--loaded'); $event.target.parentElement.classList.remove('skel')"
              @error="$event.target.parentElement.classList.remove('skel')"
            />
            <svg v-else class="field-ph__icon" viewBox="0 0 24 24" fill="none">
              <path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="card__body">
            <span class="card__chip">{{ tr(p.category_name) }}</span>
            <h3 class="card__title">{{ tr(p.title) }}</h3>
            <p class="card__text">{{ tr(p.short_description) }}</p>
            <span class="card__link">
              {{ t('catalog.detail') }}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </router-link>
      </transition-group>
    </div>

    <!-- CTA band -->
    <div class="cta">
      <div class="container cta__inner">
        <h2 v-reveal class="cta__title" v-html="t('catalog.ctaTitle')"></h2>
        <p v-reveal="80" class="cta__text">
          {{ t('catalog.ctaText') }}
        </p>
        <router-link v-reveal="160" to="/boglanish" class="btn btn-white cta__btn">
          {{ t('catalog.ctaBtn') }}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--cream);
  padding: 140px 0 64px;
}

.crumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--orange-strong);
  margin-bottom: 26px;
}

.crumbs a:hover {
  color: var(--orange);
}

.crumbs span:not(.crumbs__current) {
  color: var(--muted-2);
}

.crumbs__current {
  color: var(--muted);
}

.hero__title {
  font-size: clamp(30px, 4.6vw, 48px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  max-width: 620px;
  margin: 14px 0 18px;
}

.hero__lead {
  color: var(--muted);
  font-size: 17px;
  max-width: 540px;
}

.catalog {
  padding: 56px 24px 80px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 36px;
}

.filter {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  background: var(--card-cream);
  transition: background 0.18s ease, color 0.18s ease;
}

.filter:hover {
  background: #f7e2cf;
}

.filter--active {
  background: var(--orange);
  color: #fff;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  position: relative;
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
  overflow: hidden;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.card__img--loaded {
  opacity: 1;
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

.card:hover .card__link {
  color: var(--orange);
}

/* Free-field placeholder (no image) */
.field-ph {
  background: linear-gradient(135deg, var(--cream-300), var(--cream-400));
  display: grid;
  place-items: center;
  color: #d8b89a;
}

.field-ph__icon {
  width: 34px;
  height: 34px;
}

/* Skeleton pulse — loading cards and image placeholders. A soft opacity
   breath that matches the page's fade-based reveal animations.
   Kept after .field-ph so it wins on elements with both classes. */
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

.skel--pill {
  width: 118px;
  height: 38px;
  padding: 0;
  pointer-events: none;
  border-radius: var(--radius-pill);
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

/* The skeleton grid eases in instead of popping; the real cards already
   animate per-card via the card-list enter transition. */
.cards--skel {
  animation: cards-skel-in 0.25s ease both;
}

@keyframes cards-skel-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* filter transition — enter only; the skeleton grid covers the swap, and a
   leave animation with position:absolute made grid cards (and their images)
   balloon to natural size mid-switch. */
.card-list-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.card-list-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.97);
}

.cta {
  background: #f2580c;
  padding: 72px 0;
}

.cta__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta__title {
  color: #fff;
  font-size: clamp(24px, 3.4vw, 34px);
  font-weight: 800;
  line-height: 1.15;
}

.cta__text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  max-width: 520px;
  margin: 16px 0 28px;
}

@media (max-width: 980px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .hero {
    padding: 110px 0 44px;
  }
  .hero__title {
    font-size: clamp(26px, 7vw, 32px);
  }
  .hero__lead {
    font-size: 15px;
  }
  .catalog {
    padding: 36px 20px 64px;
  }
  .filters {
    gap: 9px;
    margin-bottom: 26px;
  }
  .filter {
    font-size: 13px;
    padding: 8px 15px;
  }

  /* Compact two-column grid — matches the mobile catalog mock. */
  .cards {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  /* Taller, portrait media to match the mobile mock. */
  .card__media {
    aspect-ratio: 5 / 6;
  }
  .card__body {
    padding: 12px 12px 16px;
  }
  .card__chip {
    font-size: 11px;
    padding: 4px 10px;
    margin-bottom: 9px;
  }
  .card__title {
    font-size: 15px;
    margin-bottom: 10px;
  }
  /* Cards stay compact on mobile — drop the description line. */
  .card__text,
  .skel--text {
    display: none;
  }
  .card__link {
    font-size: 13px;
  }
}
</style>
