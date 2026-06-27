<script setup>
import { ref, computed, onMounted } from 'vue'
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
const categories = computed(() => home.value || [])
const filters = computed(() => categories.value.map((c) => tr(c.name)))
const activeIndex = ref(0)

// Cards = products of the currently selected category.
const visible = computed(() => categories.value[activeIndex.value]?.products || [])
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

      <div v-reveal class="filters">
        <button
          v-for="(f, i) in filters"
          :key="i"
          class="filter"
          :class="{ 'filter--active': i === activeIndex }"
          @click="activeIndex = i"
        >
          {{ f }}
        </button>
      </div>

      <div class="cards">
        <article v-for="(p, i) in visible" :key="p.id" v-scroll3d class="card">
          <div v-reveal3d.pop class="card__media img-ph">
            <img v-if="p.image" :src="mediaUrl(p.image)" :alt="tr(p.title)" class="card__img" />
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
