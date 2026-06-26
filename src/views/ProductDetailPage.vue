<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import productImg from '../assets/images/StaticProduct.png'
import { useI18n } from '../i18n/index.js'
import { useOverallStore } from '../store/overall.js'

const { t, locale } = useI18n()
const route = useRoute()
const store = useOverallStore()
const { product, home } = storeToRefs(store)

// API text fields are { uz, ru, en } objects — pick the active locale, fall back to UZ.
function tr(field) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[locale.value] || field.uz || ''
}

// Gallery images come from the API; fall back to the static placeholder.
const slides = computed(() => {
  const imgs = (product.value?.images || []).filter(Boolean)
  return imgs.length ? imgs : [productImg]
})

// Characteristics map straight onto the spec list.
const specs = computed(() =>
  (product.value?.characteristics || []).map((c) => ({
    label: tr(c.name),
    value: tr(c.value),
  }))
)

// Related = other products from the home feed, same category first.
const related = computed(() => {
  const all = (home.value || []).flatMap((c) => c.products || [])
  return all
    .filter((p) => p.id !== product.value?.id)
    .sort((a, b) => Number(b.category_id === product.value?.category_id) - Number(a.category_id === product.value?.category_id))
    .slice(0, 4)
})

const active = ref(0)
const go = (i) => {
  active.value = (i + slides.value.length) % slides.value.length
}
const next = () => go(active.value + 1)
const prev = () => go(active.value - 1)

function load() {
  active.value = 0
  store.getProduct(route.params.slug)
  if (!home.value) store.getHome()
}

onMounted(load)
// Refetch when navigating between products.
watch(() => route.params.slug, load)

const badges = computed(() => [
  { icon: 'shield', text: t('detail.badgeHalal') },
  { icon: 'award', text: t('detail.badgeIso') },
])
</script>

<template>
  <section class="page">
    <div class="container">
      <!-- Breadcrumb -->
      <nav v-reveal class="crumbs">
        <router-link to="/">{{ t('nav.home') }}</router-link>
        <span>›</span>
        <router-link to="/mahsulotlar">{{ t('nav.products') }}</router-link>
        <span>›</span>
        <span class="crumbs__current">{{ tr(product?.title) }}</span>
      </nav>

      <!-- Top: gallery + info -->
      <div class="top">
        <div class="gallery">
          <div v-reveal3d.pop class="gallery__stage">
            <div class="gallery__track" :style="{ transform: `translateX(-${active * 100}%)` }">
              <div v-for="(img, i) in slides" :key="i" class="gallery__slide">
                <img :src="img" :alt="tr(product?.title)" />
              </div>
            </div>

            <button class="gallery__nav gallery__nav--prev" type="button" aria-label="Oldingi rasm" @click="prev">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button class="gallery__nav gallery__nav--next" type="button" aria-label="Keyingi rasm" @click="next">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <div class="gallery__dots">
              <button
                v-for="(img, i) in slides"
                :key="i"
                class="dot"
                :class="{ 'dot--active': i === active }"
                type="button"
                :aria-label="`${i + 1}-rasm`"
                @click="go(i)"
              ></button>
            </div>
          </div>

          <div class="gallery__thumbs">
            <button
              v-for="(img, i) in slides"
              :key="i"
              v-reveal="i * 70"
              class="thumb"
              :class="{ 'thumb--active': i === active }"
              type="button"
              @click="go(i)"
            >
              <img :src="img" alt="" />
            </button>
          </div>
        </div>

        <div class="info">
          <span v-reveal.right class="info__chip">{{ tr(product?.category_name) }}</span>
          <h1 v-reveal.right="60" class="info__title">{{ tr(product?.title) }}</h1>
          <p v-reveal.right="120" class="info__desc">{{ tr(product?.short_description) }}</p>

          <ul v-if="specs.length" v-reveal.right="180" class="specs">
            <li v-for="s in specs" :key="s.label">
              <span class="specs__label">{{ s.label }}</span>
              <span class="specs__value">{{ s.value }}</span>
            </li>
          </ul>

          <div v-reveal.right="240" class="price">
            <span class="price__eyebrow">{{ t('detail.priceEyebrow') }}</span>
            <strong class="price__value">{{ t('detail.priceValue') }}</strong>
            <div class="price__actions">
              <router-link to="/boglanish" class="btn btn-primary">{{ t('detail.order') }}</router-link>
              <router-link to="/boglanish" class="btn btn-white">{{ t('detail.askPrice') }}</router-link>
            </div>
          </div>

          <div v-reveal.right="300" class="badges">
            <span v-for="b in badges" :key="b.text" class="badge">
              <svg v-if="b.icon === 'shield'" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                <path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="9" r="5" stroke="currentColor" stroke-width="1.6" />
                <path d="m9 13-1.5 7L12 18l4.5 2L15 13" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
              </svg>
              {{ b.text }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Detail block -->
    <div class="detail">
      <div class="container">
        <h2 v-reveal class="detail__title">{{ t('detail.aboutTitle') }}</h2>
        <div v-reveal>
          <p class="detail__text">{{ tr(product?.description) }}</p>
        </div>
      </div>
    </div>

    <!-- Related -->
    <div class="related container">
      <h2 v-reveal class="related__title">{{ t('detail.relatedTitle') }}</h2>
      <div class="cards">
        <router-link
          v-for="(p, i) in related"
          :key="p.id"
          :to="`/mahsulotlar/${p.id}`"
          v-reveal3d="i * 70"
          class="card"
        >
          <div class="card__media">
            <img :src="p.image || productImg" :alt="tr(p.title)" />
          </div>
          <div class="card__body">
            <span class="card__chip">{{ tr(p.category_name) }}</span>
            <h3 class="card__title">{{ tr(p.title) }}</h3>
            <p class="card__text">{{ tr(p.short_description) }}</p>
            <span class="card__link">
              {{ t('detail.detailLink') }}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding-top: 120px;
}

.crumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 30px;
}

.crumbs a {
  color: var(--orange-strong);
}
.crumbs a:hover {
  color: var(--orange);
}
.crumbs span:not(.crumbs__current) {
  color: var(--muted-2);
}

.top {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 48px;
  align-items: start;
  padding-bottom: 64px;
}

.gallery__stage {
  position: relative;
  aspect-ratio: 4 / 3.4;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--card-cream);
}

.gallery__track {
  display: flex;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery__slide {
  flex: 0 0 100%;
  height: 100%;
}

.gallery__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: var(--ink);
  box-shadow: var(--shadow);
  opacity: 0;
  transition: opacity 0.2s ease, background 0.2s ease;
}

.gallery__stage:hover .gallery__nav {
  opacity: 1;
}

.gallery__nav:hover {
  background: #fff;
  color: var(--orange-strong);
}

.gallery__nav svg {
  width: 22px;
  height: 22px;
}

.gallery__nav--prev {
  left: 14px;
}

.gallery__nav--next {
  right: 14px;
}

.gallery__dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: width 0.25s ease, background 0.25s ease;
}

.dot--active {
  width: 22px;
  border-radius: var(--radius-pill);
  background: var(--orange);
}

.gallery__thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 14px;
}

.thumb {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.18s ease, transform 0.18s ease;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumb:hover {
  transform: translateY(-2px);
}

.thumb--active {
  border-color: var(--orange);
}

.info__chip {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--card-cream);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  margin-bottom: 16px;
}

.info__title {
  font-size: clamp(28px, 3.6vw, 40px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 16px;
}

.info__desc {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 28px;
}

.specs {
  list-style: none;
  border-top: 1px solid var(--line);
  margin-bottom: 28px;
}

.specs li {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 13px 0;
  border-bottom: 1px solid var(--line);
  font-size: 14.5px;
}

.specs__label {
  color: var(--muted);
}

.specs__value {
  color: var(--ink);
  font-weight: 600;
  text-align: right;
}

.price {
  background: var(--cream);
  border: 1px solid var(--cream-400);
  border-radius: var(--radius);
  padding: 22px 24px;
  margin-bottom: 22px;
}

.price__eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
}

.price__value {
  display: block;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 18px;
}

.price__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.badges {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
}

.badge svg {
  width: 20px;
  height: 20px;
  color: var(--orange);
}

.detail {
  background: var(--cream);
  padding: 64px 0;
}

.detail__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  margin-bottom: 32px;
}

.detail__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.detail__sub {
  font-size: 16px;
  font-weight: 700;
  color: var(--orange-strong);
  margin-bottom: 12px;
}

.detail__text {
  color: var(--ink-soft);
  font-size: 15.5px;
  line-height: 1.75;
}

.related {
  padding: 72px 24px 90px;
}

.related__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  margin-bottom: 32px;
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
  overflow: hidden;
}

.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.card:hover .card__media img {
  transform: scale(1.04);
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

.field-ph {
  background: linear-gradient(135deg, var(--cream-300), var(--cream-400));
  display: grid;
  place-items: center;
  color: #d8b89a;
}

.field-ph__icon {
  width: 38px;
  height: 38px;
}

@media (max-width: 980px) {
  .top {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .detail__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  /* Similar products become a horizontal swipe slider. */
  .cards {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    margin: 0 -24px;
    padding: 4px 24px 18px;
  }
  .cards::-webkit-scrollbar {
    display: none;
  }
  .card {
    flex: 0 0 80%;
    scroll-snap-align: start;
  }
  .price__actions .btn {
    flex: 1;
  }
  /* Touch devices have no hover — keep the slider arrows visible. */
  .gallery__nav {
    opacity: 1;
    width: 38px;
    height: 38px;
  }
}
</style>
