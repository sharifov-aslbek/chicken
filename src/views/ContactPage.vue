<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useOverallStore } from '../store/overall.js'
import { normalizePhone } from '../utils/phone.js'
import AppIcon from '../components/AppIcon.vue'

const { t } = useI18n()
const store = useOverallStore()

const role = ref('b2b')

const cardMeta = [
  { icon: 'phone', href: 'tel:+998712002111' },
  { icon: 'telegram', href: 'https://t.me/caravan_chicken' },
  { icon: 'pin', href: '#' },
  { icon: 'clock', href: '#' },
]
const cards = computed(() => t('contactP.cards').map((c, i) => ({ ...c, ...cardMeta[i] })))

const form = ref({ fullname: '', phone: '', company: '', description: '' })
const sending = ref(false)
const sent = ref(false)
const error = ref(false)

async function onSubmit() {
  if (sending.value) return
  sending.value = true
  sent.value = false
  error.value = false
  try {
    await store.sendPartnership({
      fullname: form.value.fullname.trim(),
      phone_number: normalizePhone(form.value.phone),
      company_name: form.value.company.trim(),
      type: role.value === 'b2b' ? 'B2B' : 'B2C',
      description: form.value.description.trim(),
    })
    sent.value = true
    form.value = { fullname: '', phone: '', company: '', description: '' }
    role.value = 'b2b'
  } catch (e) {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="page">
    <!-- Hero -->
    <div class="hero">
      <div class="container hero__inner">
        <p v-reveal class="eyebrow">{{ t('contactP.eyebrow') }}</p>
        <h1 v-reveal="80" class="hero__title">{{ t('contactP.title') }}</h1>
        <p v-reveal="160" class="hero__lead">
          {{ t('contactP.lead') }}
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
          :href="c.href"
          class="info__card"
        >
          <span class="info__icon">
            <AppIcon :name="c.icon" />
          </span>
          <span class="info__body">
            <span class="info__label">{{ c.label }}</span>
            <span class="info__value">{{ c.value }}</span>
          </span>
        </a>
      </div>

      <form v-reveal.right="120" class="form" @submit.prevent="onSubmit">
        <h2 class="form__title">{{ t('contactP.formTitle') }}</h2>
        <div class="form-row">
          <label class="field">
            <span class="field__label">{{ t('form.name') }}</span>
            <input type="text" :placeholder="t('form.namePh')" v-model="form.fullname" required />
          </label>
          <label class="field">
            <span class="field__label">{{ t('form.phone') }}</span>
            <input type="tel" placeholder="+998" v-model="form.phone" required />
          </label>
        </div>

        <label class="field">
          <span class="field__label">{{ t('form.company') }}</span>
          <input type="text" :placeholder="t('form.companyPh')" v-model="form.company" />
        </label>

        <div class="field">
          <span class="field__label">{{ t('form.iAm') }}</span>
          <div class="roles">
            <button type="button" class="role" :class="{ 'role--active': role === 'b2b' }" @click="role = 'b2b'">
              <span class="role__dot"></span>
              {{ t('contactP.roleB2b') }}
            </button>
            <button type="button" class="role" :class="{ 'role--active': role === 'b2c' }" @click="role = 'b2c'">
              <span class="role__dot"></span>
              {{ t('contactP.roleB2c') }}
            </button>
          </div>
        </div>

        <label class="field">
          <span class="field__label">{{ t('form.comment') }}</span>
          <textarea rows="4" :placeholder="t('form.commentPh')" v-model="form.description"></textarea>
        </label>

        <button type="submit" class="btn btn-primary form__submit" :disabled="sending">
          {{ sending ? t('form.sending') : t('form.submit') }}
        </button>
        <transition name="fade">
          <p v-if="sent" class="form__ok">{{ t('contactP.ok') }}</p>
        </transition>
        <transition name="fade">
          <p v-if="error" class="form__err">{{ t('form.err') }}</p>
        </transition>
      </form>
    </div>

    <!-- Map -->
    <div class="container map-wrap">
      <h2 v-reveal class="map__title">{{ t('contactP.mapTitle') }}</h2>
      <div v-reveal="80" class="map field-ph">
        <svg class="field-ph__icon" viewBox="0 0 24 24" fill="none">
          <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M9 4v13M15 6.5v13" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
        <span class="map__label">{{ t('contactP.mapLabel') }}</span>
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
  background: #fff6ec;
  border: 1px solid #f3d9bf;
  border-radius: 18px;
  padding: 18px 22px 18px 18px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.info__card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.info__icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: #fff1e8;
  color: var(--orange);
  display: grid;
  place-items: center;
}

.info__icon :deep(.icon) {
  width: 22px;
  height: 22px;
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
  color: #8a817a;
}

.info__value {
  font-size: 15.5px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
}

.form {
  background: #fff;
  border: 1px solid #f3d9bf;
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

.form__submit:disabled {
  opacity: 0.6;
  cursor: default;
}

.form__ok {
  margin-top: 14px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--green-600);
}

.form__err {
  margin-top: 14px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #d63f26;
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
  height: 400px;
  border: 1px solid #f3d9bf;
  border-radius: 24px;
}

.map__label {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #8a817a;
}

.field-ph {
  background: #fbe9d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--orange);
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
    padding-top: 48px;
  }
}

@media (max-width: 520px) {
  .hero {
    padding: 120px 0 44px;
  }

  .hero__lead {
    font-size: 15.5px;
  }

  .form-row,
  .roles {
    grid-template-columns: 1fr;
  }

  .form {
    padding: 24px;
  }

  .map-wrap {
    padding-top: 44px;
    padding-bottom: 64px;
  }

  .map {
    height: 300px;
  }
}
</style>
