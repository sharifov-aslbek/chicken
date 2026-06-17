<script setup>
import { ref, computed } from 'vue'
import { categories, products } from '../data/products.js'

const active = ref('Barchasi')

const visible = computed(() =>
  active.value === 'Barchasi'
    ? products
    : products.filter((p) => p.tag === active.value)
)
</script>

<template>
  <section class="page">
    <!-- Hero band -->
    <div class="hero">
      <div class="container">
        <nav v-reveal class="crumbs">
          <router-link to="/">Bosh sahifa</router-link>
          <span>›</span>
          <span class="crumbs__current">Mahsulotlar</span>
        </nav>
        <p v-reveal="60" class="eyebrow">Mahsulotlar katalogi</p>
        <h1 v-reveal="120" class="hero__title">
          Har bir menyu uchun ideal tovuq mahsulotlari
        </h1>
        <p v-reveal="200" class="hero__lead">
          Yangi so'yilgan, yarim tayyor, marinadlangan va dudlangan — 30 dan ortiq
          mahsulot turi ulgurji va chakana savdo uchun.
        </p>
      </div>
    </div>

    <!-- Catalog -->
    <div class="catalog container">
      <div v-reveal class="filters">
        <button
          v-for="c in categories"
          :key="c"
          class="filter"
          :class="{ 'filter--active': c === active }"
          @click="active = c"
        >
          {{ c }}
        </button>
      </div>

      <transition-group name="card-list" tag="div" class="cards">
        <router-link
          v-for="p in visible"
          :key="p.slug"
          :to="`/mahsulotlar/${p.slug}`"
          class="card"
        >
          <div class="card__media field-ph">
            <svg class="field-ph__icon" viewBox="0 0 24 24" fill="none">
              <path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="card__body">
            <span class="card__chip">{{ p.tag }}</span>
            <h3 class="card__title">{{ p.title }}</h3>
            <p class="card__text">{{ p.short }}</p>
            <span class="card__link">
              Batafsil
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
        <h2 v-reveal class="cta__title">Ulgurji yoki shaxsiy buyurtma?<br />Biz bilan bog'laning</h2>
        <p v-reveal="80" class="cta__text">
          Narx, hajm va yetkazib berish shartlari bo'yicha menejerimiz siz bilan tez orada bog'lanadi.
        </p>
        <router-link v-reveal="160" to="/boglanish" class="btn btn-white cta__btn">
          Hoziroq bog'lanish
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

/* filter transition */
.card-list-enter-active,
.card-list-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.card-list-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.97);
}
.card-list-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
.card-list-leave-active {
  position: absolute;
}

.cta {
  background: var(--orange-strong);
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
  .cards {
    grid-template-columns: 1fr;
  }
  .hero {
    padding-top: 120px;
  }
}
</style>
