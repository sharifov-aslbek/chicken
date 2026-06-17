<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProduct, relatedProducts } from '../data/products.js'

const route = useRoute()
const product = computed(() => getProduct(route.params.slug))
const related = computed(() => relatedProducts(product.value.slug))

const badges = [
  { icon: 'shield', text: 'Halal sertifikat' },
  { icon: 'award', text: 'ISO sifat nazorati' },
]
</script>

<template>
  <section class="page">
    <div class="container">
      <!-- Breadcrumb -->
      <nav v-reveal class="crumbs">
        <router-link to="/">Bosh sahifa</router-link>
        <span>›</span>
        <router-link to="/mahsulotlar">Mahsulotlar</router-link>
        <span>›</span>
        <span class="crumbs__current">{{ product.title }}</span>
      </nav>

      <!-- Top: gallery + info -->
      <div class="top">
        <div class="gallery">
          <div v-reveal3d.pop class="gallery__main field-ph">
            <svg class="field-ph__icon" viewBox="0 0 24 24" fill="none">
              <path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="gallery__thumbs">
            <div v-for="n in 4" :key="n" v-reveal="n * 70" class="thumb field-ph">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6" />
                <circle cx="9" cy="10" r="1.6" stroke="currentColor" stroke-width="1.6" />
                <path d="m5 17 4.5-4 3 2.5L16 12l3.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div class="info">
          <span v-reveal.right class="info__chip">{{ product.tag }}</span>
          <h1 v-reveal.right="60" class="info__title">{{ product.fullTitle }}</h1>
          <p v-reveal.right="120" class="info__desc">{{ product.desc }}</p>

          <ul v-reveal.right="180" class="specs">
            <li v-for="s in product.specs" :key="s.label">
              <span class="specs__label">{{ s.label }}</span>
              <span class="specs__value">{{ s.value }}</span>
            </li>
          </ul>

          <div v-reveal.right="240" class="price">
            <span class="price__eyebrow">Ulgurji narx</span>
            <strong class="price__value">Kelishilgan holda — hajmga qarab</strong>
            <div class="price__actions">
              <router-link to="/boglanish" class="btn btn-primary">Buyurtma berish</router-link>
              <router-link to="/boglanish" class="btn btn-white">Narx so'rash</router-link>
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
        <h2 v-reveal class="detail__title">Mahsulot haqida batafsil</h2>
        <div class="detail__grid">
          <div v-reveal>
            <h3 class="detail__sub">Tavsif</h3>
            <p class="detail__text">{{ product.tavsif }}</p>
          </div>
          <div v-reveal="100">
            <h3 class="detail__sub">Saqlash va tayyorlash</h3>
            <p class="detail__text">{{ product.saqlash }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Related -->
    <div class="related container">
      <h2 v-reveal class="related__title">O'xshash mahsulotlar</h2>
      <div class="cards">
        <router-link
          v-for="(p, i) in related"
          :key="p.slug"
          :to="`/mahsulotlar/${p.slug}`"
          v-reveal3d="i * 70"
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

.gallery__main {
  aspect-ratio: 4 / 3.4;
  border-radius: var(--radius);
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
  color: #d8b89a;
}

.thumb svg {
  width: 26px;
  height: 26px;
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
  .cards {
    grid-template-columns: 1fr;
  }
  .price__actions .btn {
    flex: 1;
  }
}
</style>
