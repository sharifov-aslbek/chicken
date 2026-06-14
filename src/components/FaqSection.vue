<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'Caravan Chicken mahsulotlari nima bilan farq qiladi?',
    a: "Biz butun jarayonni — yetishtirishdan qadoqlashgacha — o'zimiz nazorat qilamiz. Bu barqaror sifat va to'liq halollik kafolatini beradi.",
  },
  {
    q: "Nega restoranlar Caravan Chicken'ni tanlaydi?",
    a: "Uzluksiz ta'minot, barqaror sifat va yirik hajmdagi buyurtmalarni o'z vaqtida yetkazib berish — restoranlar uchun eng muhim omillar.",
  },
  {
    q: "Mahsulotlar qanday sifat nazoratidan o'tadi?",
    a: "Har bir partiya gigiyenik sexda zamonaviy uskunalar yordamida tekshiriladi va xalqaro standartlarga muvofiq qayta ishlanadi.",
  },
  {
    q: 'Doimiy hamkorlar uchun alohida shartlar bormi?',
    a: "Ha, doimiy hamkorlar uchun individual narxlar, ustuvor yetkazib berish va moslashuvchan to'lov shartlari belgilanadi.",
  },
  {
    q: 'Minimal buyurtma miqdori qancha?',
    a: "Minimal buyurtma hajmi mahsulot turiga bog'liq. Aniq miqdor uchun biz bilan bog'laning — sizga mos shartlarni taklif qilamiz.",
  },
  {
    q: 'Yarim tayyor mahsulotlar qanday saqlanadi?',
    a: "Yarim tayyor mahsulotlar muzlatilgan holatda yetkazib beriladi va tegishli harorat rejimida uzoq muddat sifatini saqlaydi.",
  },
  {
    q: 'Yetkazib berish qancha vaqt oladi?',
    a: "Toshkent bo'ylab buyurtmalar odatda 24 soat ichida yetkaziladi. Doimiy hamkorlar uchun belgilangan jadval asosida ishlaymiz.",
  },
]

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" class="faq">
    <div class="container faq__inner">
      <header v-reveal.left class="faq__head">
        <p class="eyebrow">Savollar</p>
        <h2 class="section-title faq__title">Bizdan ko'p so'raladigan savollar</h2>
        <p class="faq__lead">
          Bu yerda sizni qiziqtirgan barcha savollarga javob topasiz. Boshqa savollaringiz
          bo'lsa, biz bilan bog'laning.
        </p>
        <a href="#contact" class="faq__ask">
          Savol berish
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </header>

      <ul class="faq__list">
        <li
          v-for="(f, i) in faqs"
          :key="i"
          v-reveal.right="i * 70"
          class="faq__item"
          :class="{ 'faq__item--open': openIndex === i }"
        >
          <button class="faq__q" :aria-expanded="openIndex === i" @click="toggle(i)">
            <span>{{ f.q }}</span>
            <span class="faq__toggle">
              <svg viewBox="0 0 24 24" fill="none">
                <path v-if="openIndex === i" d="M6 12h12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                <path v-else d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
              </svg>
            </span>
          </button>
          <div v-show="openIndex === i" class="faq__a">{{ f.a }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: #fff;
  padding: 96px 0;
}

.faq__inner {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 64px;
  align-items: start;
}

.faq__head {
  position: sticky;
  top: 90px;
}

.faq__title {
  margin-top: 10px;
  color: var(--ink);
}

.faq__lead {
  margin-top: 18px;
  color: var(--muted);
  font-size: 16px;
  max-width: 340px;
}

.faq__ask {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 22px;
  font-weight: 600;
  font-size: 15px;
  color: var(--orange);
}

.faq__ask svg {
  width: 16px;
  height: 16px;
}

.faq__ask:hover {
  color: var(--orange-strong);
}

.faq__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq__item {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.faq__item--open {
  background: var(--cream);
  border-color: transparent;
}

.faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  text-align: left;
  padding: 22px 24px;
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  transition: color 0.2s ease;
}

.faq__item--open .faq__q {
  color: var(--orange);
  padding-bottom: 12px;
}

.faq__toggle {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--card-cream);
  color: var(--orange);
}

.faq__item--open .faq__toggle {
  background: var(--orange);
  color: #fff;
}

.faq__toggle svg {
  width: 18px;
  height: 18px;
}

.faq__a {
  padding: 0 24px 22px;
  font-size: 15px;
  color: var(--muted);
  line-height: 1.6;
  max-width: 620px;
}

@media (max-width: 920px) {
  .faq__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .faq__head {
    position: static;
  }

  .faq__lead {
    max-width: none;
  }
}
</style>
