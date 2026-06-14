<script setup>
import featureImg from '../assets/images/5takuchlitomon.png'

const cards = [
  {
    title: "Jo'jalikdan dasturxongacha to'liq nazorat",
    text: 'Yetishtirishdan qadoqlashgacha — har bir bosqich bizning nazoratimizda.',
    icon: 'shield',
  },
  {
    title: '5–6 daqiqada tayyor',
    text: 'Yarim tayyor mahsulotlar — band kunlar, kutilmagan mehmonlar va restoran menyulari uchun ideal yechim.',
    icon: 'bolt',
  },
  {
    title: 'Uzluksiz, yirik hajmda yetkazib berish',
    text: "Restoran va kafelar uchun ulgurji va barqaror ta'minot kafolati.",
    icon: 'truck',
  },
  {
    title: 'Gigiyenik ishlab chiqarish',
    text: "Zamonaviy uskunalar va qat'iy tozalik standartlari.",
    icon: 'spark',
  },
]
</script>

<template>
  <section class="why">
    <div class="container">
      <header v-reveal class="why__head">
        <p class="eyebrow">Nega aynan Caravan Chicken?</p>
        <h2 class="section-title why__title">Bizning 5 ta kuchli tomonimiz</h2>
      </header>

      <div class="bento">
        <!-- Featured image card -->
        <article v-swing3d="{ from: 'left' }" class="bento__feature" :style="{ backgroundImage: `linear-gradient(180deg, rgba(20, 14, 10, 0.05), rgba(20, 14, 10, 0.7)), url(${featureImg})` }">
          <span class="feature-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="9" r="5" stroke="currentColor" stroke-width="1.8" />
              <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
            </svg>
          </span>
          <div class="feature-text">
            <h3>Halol va xalqaro ISO sertifikatlar</h3>
            <p>Shariy qoidalar asosida mahsulotlar qo'lda so'yiladi — bu bizning asosiy va'damiz.</p>
          </div>
        </article>

        <article
          v-for="(c, i) in cards"
          :key="c.title"
          v-swing3d="{ delay: 90 + i * 110, from: i % 2 ? 'right' : 'left' }"
          class="bento__card"
        >
          <span class="bento__icon">
            <svg v-if="c.icon === 'shield'" viewBox="0 0 24 24" fill="none">
              <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="c.icon === 'bolt'" viewBox="0 0 24 24" fill="none">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="c.icon === 'truck'" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              <circle cx="7" cy="18" r="1.8" stroke="currentColor" stroke-width="1.7" />
              <circle cx="17" cy="18" r="1.8" stroke="currentColor" stroke-width="1.7" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none">
              <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            </svg>
          </span>
          <h3 class="bento__title">{{ c.title }}</h3>
          <p class="bento__text">{{ c.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  background: var(--cream);
  padding: 96px 0;
  border-radius: 40px;
}

.why__head {
  text-align: center;
  margin-bottom: 48px;
}

.why__title {
  margin-top: 10px;
  color: #2b1d14;
}

.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 22px;
}

.bento__feature {
  grid-column: 1 / 3;
  grid-row: 1;
  min-height: 280px;
  border-radius: var(--radius-lg);
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  background-color: #e7d8c6;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.bento__feature::after {
  display: none;
}

.feature-badge {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #fff;
  color: var(--orange);
  display: grid;
  place-items: center;
}

.feature-badge svg {
  width: 24px;
  height: 24px;
}

.feature-text h3 {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
}

.feature-text p {
  font-size: 14.5px;
  max-width: 440px;
  color: rgba(255, 255, 255, 0.92);
}

.bento__card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 26px;
  box-shadow: var(--shadow-sm);
}
/* feature occupies row1 col1-2; the 4 cards auto-flow:
   row1-col3 (nazorat), then row2 col1/2/3 */

.bento__icon {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--card-cream);
  color: var(--orange);
  margin-bottom: 18px;
}

.bento__icon svg {
  width: 24px;
  height: 24px;
}

.bento__title {
  font-size: 19px;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 8px;
  line-height: 1.25;
}

.bento__text {
  font-size: 14.5px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .bento {
    grid-template-columns: 1fr 1fr;
  }

  .bento__feature {
    grid-column: 1 / 3;
  }
}

@media (max-width: 560px) {
  .bento {
    grid-template-columns: 1fr;
  }

  .bento__feature {
    grid-column: 1;
  }
}
</style>
