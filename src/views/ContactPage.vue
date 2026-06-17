<script setup>
import { ref } from 'vue'

const role = ref('b2b')

const cards = [
  { icon: 'phone', label: 'Telefon', value: '+998 71 200 21 11' },
  { icon: 'send', label: 'Telegram', value: '@caravan_chicken' },
  { icon: 'pin', label: 'Manzil', value: "Sergeli tumani, Qumariq MFY, Alisher Navoiy ko'chasi, 11-uy" },
  { icon: 'clock', label: 'Ish vaqti', value: 'Dushanba–Shanba, 9:00–18:00' },
]

const sent = ref(false)
function onSubmit() {
  sent.value = true
}
</script>

<template>
  <section class="page">
    <!-- Hero -->
    <div class="hero">
      <div class="container hero__inner">
        <p v-reveal class="eyebrow">Bog'lanish</p>
        <h1 v-reveal="80" class="hero__title">Biz bilan bog'laning</h1>
        <p v-reveal="160" class="hero__lead">
          Hamkorlik, ulgurji yoki shaxsiy buyurtma — formani to'ldiring yoki quyidagi
          kanallar orqali murojaat qiling. Tez orada javob beramiz.
        </p>
      </div>
    </div>

    <!-- Contact + form -->
    <div class="container grid">
      <div class="info">
        <a
          v-for="(c, i) in cards"
          :key="c.label"
          v-reveal.left="i * 90"
          :href="c.icon === 'phone' ? 'tel:+998712002111' : c.icon === 'send' ? 'https://t.me/caravan_chicken' : '#'"
          class="info__card"
        >
          <span class="info__icon">
            <svg v-if="c.icon === 'phone'" viewBox="0 0 24 24" fill="none">
              <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="c.icon === 'send'" viewBox="0 0 24 24" fill="none">
              <path d="M21 4 3 11l6 2 2 6 10-15Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="c.icon === 'pin'" viewBox="0 0 24 24" fill="none">
              <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              <circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.7" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7" />
              <path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span class="info__body">
            <span class="info__label">{{ c.label }}</span>
            <span class="info__value">{{ c.value }}</span>
          </span>
        </a>
      </div>

      <form v-reveal.right="120" class="form" @submit.prevent="onSubmit">
        <h2 class="form__title">So'rov yuborish</h2>
        <div class="form-row">
          <label class="field">
            <span class="field__label">Ism</span>
            <input type="text" placeholder="Ismingizni kiriting" required />
          </label>
          <label class="field">
            <span class="field__label">Telefon raqami</span>
            <input type="tel" placeholder="+998" required />
          </label>
        </div>

        <label class="field">
          <span class="field__label">Korxona / brend nomi</span>
          <input type="text" placeholder="Restoran yoki do'koningiz nomi" />
        </label>

        <div class="field">
          <span class="field__label">Men:</span>
          <div class="roles">
            <button type="button" class="role" :class="{ 'role--active': role === 'b2b' }" @click="role = 'b2b'">
              <span class="role__dot"></span>
              Restoran / Kafe (B2B)
            </button>
            <button type="button" class="role" :class="{ 'role--active': role === 'b2c' }" @click="role = 'b2c'">
              <span class="role__dot"></span>
              Oddiy mijoz (B2C)
            </button>
          </div>
        </div>

        <label class="field">
          <span class="field__label">Izoh yoki so'rovingiz</span>
          <textarea rows="4" placeholder="Qo'shimcha ma'lumotlar..."></textarea>
        </label>

        <button type="submit" class="btn btn-primary form__submit">So'rov yuborish</button>
        <transition name="fade">
          <p v-if="sent" class="form__ok">Rahmat! So'rovingiz qabul qilindi — tez orada bog'lanamiz.</p>
        </transition>
      </form>
    </div>

    <!-- Map -->
    <div class="container map-wrap">
      <h2 v-reveal class="map__title">Bizni xaritada toping</h2>
      <div v-reveal="80" class="map field-ph">
        <svg class="field-ph__icon" viewBox="0 0 24 24" fill="none">
          <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M9 4v13M15 6.5v13" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
        <span class="map__label">Interaktiv xarita shu yerga joylashtiriladi</span>
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
  margin: 14px 0 18px;
}

.hero__lead {
  color: var(--muted);
  font-size: 17px;
  max-width: 560px;
}

.grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 40px;
  align-items: start;
  padding-top: 72px;
  padding-bottom: 16px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info__card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--cream);
  border-radius: var(--radius);
  padding: 18px 20px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.info__card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.info__icon {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #fff;
  color: var(--orange);
  display: grid;
  place-items: center;
}

.info__icon svg {
  width: 24px;
  height: 24px;
}

.info__body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info__label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.info__value {
  font-size: 15.5px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
}

.form {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow);
}

.form__title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 22px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.field {
  display: block;
  margin-bottom: 18px;
}

.field__label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
}

.field input,
.field textarea {
  width: 100%;
  font-family: inherit;
  font-size: 15px;
  color: var(--ink);
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 13px 15px;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--muted-2);
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(242, 88, 12, 0.12);
}

.field textarea {
  resize: vertical;
  min-height: 110px;
}

.roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.role {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: inherit;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 13px 16px;
  transition: border-color 0.18s ease, background 0.18s ease;
}

.role__dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--muted-2);
  flex-shrink: 0;
  position: relative;
  transition: border-color 0.18s ease;
}

.role--active {
  border-color: var(--orange);
  background: var(--cream);
}

.role--active .role__dot {
  border-color: var(--orange);
}

.role--active .role__dot::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--orange);
}

.form__submit {
  width: 100%;
  margin-top: 4px;
}

.form__ok {
  margin-top: 14px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--green-600);
}

.map-wrap {
  padding-top: 64px;
  padding-bottom: 90px;
}

.map__title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  margin-bottom: 26px;
}

.map {
  aspect-ratio: 16 / 7;
  border-radius: var(--radius-lg);
  flex-direction: column;
  gap: 12px;
}

.map__label {
  font-size: 14px;
  font-weight: 600;
  color: #c79e7e;
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

.fade-enter-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
}

@media (max-width: 920px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 520px) {
  .form-row,
  .roles {
    grid-template-columns: 1fr;
  }
  .form {
    padding: 24px;
  }
}
</style>
