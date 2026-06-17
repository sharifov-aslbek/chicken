<script setup>
const stats = [
  { value: '120+', label: "Doimiy hamkor", icon: 'users' },
  { value: '7+', label: 'Yillik tajriba', icon: 'calendar' },
  { value: '30+', label: 'Mahsulot turi', icon: 'grid' },
  { value: '12', label: 'Hududda yetkazish', icon: 'pin' },
]

const values = [
  {
    title: "Halal so'yish kafolati",
    text: "Mahsulotlarimiz shariy qoidalar asosida, qo'lda va nazorat ostida so'yiladi.",
    icon: 'hand',
  },
  {
    title: "O'z tovuq fermamiz",
    text: "Yarim 3.5 mln bosh quvvati — boshidan oxirigacha o'zimiz nazorat qilamiz.",
    icon: 'bird',
  },
  {
    title: 'Gigiyenik qadoqlash',
    text: "Zamonaviy uskunalarda toza, ishonchli va halol qadoqlash jarayoni.",
    icon: 'box',
  },
]
</script>

<template>
  <section class="page">
    <!-- Hero -->
    <div class="hero">
      <div class="container hero__inner">
        <p v-reveal class="eyebrow">Biz haqimizda</p>
        <h1 v-reveal="80" class="hero__title">Bir maqsad yo'lida birlashgan katta oila</h1>
        <p v-reveal="160" class="hero__lead">
          Caravan Chicken — jo'jalikdan dasturxoningizgacha bo'lgan barcha jarayonni o'z
          nazorati ostida olib boradigan ishlab chiqarish kompaniyasi.
        </p>
      </div>
    </div>

    <!-- Team banner -->
    <div class="container">
      <div v-reveal3d.pop class="banner field-ph">
        <svg class="field-ph__icon" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.5" />
          <circle cx="16.5" cy="10" r="2.2" stroke="currentColor" stroke-width="1.5" />
          <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M14.5 19c0-2 1-3.6 2.4-4.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <span class="banner__label">Jamoa surati uchun erkin maydon</span>
      </div>
    </div>

    <!-- Story -->
    <div class="container story">
      <div v-reveal.left class="story__text">
        <h2 class="story__title">Bizning hikoyamiz</h2>
        <p>
          Caravan Chicken — jo'jalikdan boshlangan kichik bir tashabbus edi. Bugun u
          zamonaviy uskunalar, tajribali mutaxassislar va o'z fermasi bilan O'zbekistondagi
          yetakchi tovuq mahsulotlari ishlab chiqaruvchilaridan biriga aylandi.
        </p>
        <p>
          Maqsadimiz oddiy: har bir oilaning dasturxoniga halol, toza va ishonchli mahsulot
          yetkazish. Ana shu ishonch bizni har kuni oldinga yetaklaydi.
        </p>
      </div>
      <div v-reveal.right="120" class="story__media field-ph">
        <svg class="field-ph__icon" viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" stroke-width="1.5" />
          <circle cx="9" cy="10" r="1.8" stroke="currentColor" stroke-width="1.5" />
          <path d="m5 18 5-4.5 3 2.5L17 12l3 3" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
        <div class="story__badge">
          <strong>3.5 mln</strong>
          <span>Yillik yetishtirish quvvati — bir boshdan</span>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="container stats">
      <div v-for="(s, i) in stats" :key="s.label" v-reveal="i * 90" class="stat">
        <span class="stat__icon">
          <svg v-if="s.icon === 'users'" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.7" />
            <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 6.5a3 3 0 0 1 0 5.6M17 14c2.3.4 4 2.3 4 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
          <svg v-else-if="s.icon === 'calendar'" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="currentColor" stroke-width="1.7" />
            <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
          <svg v-else-if="s.icon === 'grid'" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7" />
            <rect x="13" y="4" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7" />
            <rect x="4" y="13" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7" />
            <rect x="13" y="13" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none">
            <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            <circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.7" />
          </svg>
        </span>
        <strong class="stat__value">{{ s.value }}</strong>
        <span class="stat__label">{{ s.label }}</span>
      </div>
    </div>

    <!-- Values -->
    <div class="values-wrap">
      <div class="container">
        <p v-reveal class="eyebrow values__eyebrow">Qadriyatlarimiz</p>
        <h2 v-reveal="80" class="values__heading">Sifat, pokizlik va insonlar ishonchi</h2>
        <div class="values">
          <article v-for="(v, i) in values" :key="v.title" v-swing3d="{ delay: i * 110, from: i % 2 ? 'right' : 'left' }" class="value">
            <span class="value__icon">
              <svg v-if="v.icon === 'hand'" viewBox="0 0 24 24" fill="none">
                <path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V10m0-.5V4.5a1.5 1.5 0 0 1 3 0V10m0-.5V6a1.5 1.5 0 0 1 3 0v7c0 3.3-2.7 6-6 6s-6-2.2-6-5v-1l-1.4-1.4a1.5 1.5 0 0 1 2.1-2.1L8 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="v.icon === 'bird'" viewBox="0 0 24 24" fill="none">
                <path d="M16 7c0 5-3.5 9-8 9-2.5 0-4.5-1-4.5-1S6 13 6 10c-1.5.5-2.5 0-2.5 0C4 7.5 6 6 9 6c2 0 3.5 1 3.5 1" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                <path d="M16 7l4-2-1.5 3.2L21 10" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                <circle cx="13" cy="7.5" r="0.9" fill="currentColor" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none">
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                <path d="M4 7.5l8 4.5 8-4.5M12 12v9" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
            </span>
            <h3 class="value__title">{{ v.title }}</h3>
            <p class="value__text">{{ v.text }}</p>
          </article>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta">
      <div class="container cta__inner">
        <h2 v-reveal class="cta__title">Caravan Chicken oilasiga qo'shiling</h2>
        <p v-reveal="80" class="cta__text">
          Hamkor, ulgurji xaridor yoki yetkazib beruvchi bo'lishni xohlaysizmi? — Biz bilan bog'laning.
        </p>
        <router-link v-reveal="160" to="/boglanish" class="btn btn-white cta__btn">
          Hamkor bo'lish
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
  padding: 140px 0 60px;
}

.hero__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__title {
  font-size: clamp(30px, 4.4vw, 46px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  max-width: 660px;
  margin: 14px 0 18px;
}

.hero__lead {
  color: var(--muted);
  font-size: 17px;
  max-width: 580px;
}

.banner {
  margin-top: -40px;
  aspect-ratio: 16 / 6.4;
  border-radius: var(--radius-lg);
  position: relative;
  flex-direction: column;
  gap: 14px;
}

.banner__label {
  position: absolute;
  bottom: 22px;
  font-size: 14px;
  font-weight: 600;
  color: #c79e7e;
}

.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  padding: 84px 24px;
}

.story__title {
  font-size: clamp(24px, 3.2vw, 32px);
  font-weight: 800;
  margin-bottom: 18px;
}

.story__text p {
  color: var(--ink-soft);
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 16px;
}

.story__media {
  aspect-ratio: 4 / 3.2;
  border-radius: var(--radius);
  position: relative;
}

.story__badge {
  position: absolute;
  left: 22px;
  bottom: 22px;
  background: var(--orange);
  color: #fff;
  border-radius: var(--radius);
  padding: 16px 20px;
  max-width: 230px;
  box-shadow: var(--shadow);
}

.story__badge strong {
  display: block;
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 6px;
}

.story__badge span {
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.95;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  padding-bottom: 30px;
}

.stat {
  background: var(--cream);
  border-radius: var(--radius);
  padding: 28px 24px;
  text-align: center;
}

.stat__icon {
  display: inline-flex;
  color: var(--orange);
  margin-bottom: 12px;
}

.stat__icon svg {
  width: 30px;
  height: 30px;
}

.stat__value {
  display: block;
  font-size: 34px;
  font-weight: 800;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 6px;
}

.stat__label {
  font-size: 14px;
  color: var(--muted);
}

.values-wrap {
  padding: 84px 0;
}

.values__eyebrow {
  text-align: center;
}

.values__heading {
  text-align: center;
  font-size: clamp(24px, 3.4vw, 34px);
  font-weight: 800;
  margin: 12px 0 40px;
}

.values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.value {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 30px 28px;
  background: #fff;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.value:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.value__icon {
  display: inline-grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: var(--cream);
  color: var(--orange);
  margin-bottom: 18px;
}

.value__icon svg {
  width: 28px;
  height: 28px;
}

.value__title {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 10px;
}

.value__text {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.65;
}

.field-ph {
  background: linear-gradient(135deg, var(--cream-300), var(--cream-400));
  display: grid;
  place-items: center;
  color: #d8b89a;
}

.field-ph__icon {
  width: 44px;
  height: 44px;
}

.cta {
  background: var(--orange-strong);
  padding: 64px 0;
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
}

.cta__text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  max-width: 540px;
  margin: 14px 0 26px;
}

@media (max-width: 980px) {
  .story {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .stats {
    grid-template-columns: 1fr 1fr;
  }
  .values {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
