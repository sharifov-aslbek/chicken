<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useOverallStore } from '../store/overall.js'
import { normalizePhone } from '../utils/phone.js'

const { t } = useI18n()
const store = useOverallStore()

const role = ref('restaurant')

const icons = ['phone', 'send', 'instagram', 'clock']
const contacts = computed(() => t('contact.list').map((text, i) => ({ icon: icons[i], text })))

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
      type: role.value === 'restaurant' ? 'B2B' : 'B2C',
      description: form.value.description.trim(),
    })
    sent.value = true
    form.value = { fullname: '', phone: '', company: '', description: '' }
    role.value = 'restaurant'
  } catch (e) {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container contact__inner">
      <div class="contact__intro">
        <p v-reveal.left class="eyebrow eyebrow--light">{{ t('contact.eyebrow') }}</p>
        <h2 v-reveal.left="80" class="section-title contact__title">{{ t('contact.title') }}</h2>
        <p v-reveal.left="160" class="contact__lead">
          {{ t('contact.lead') }}
        </p>

        <ul v-reveal.left="240" class="contact__list">
          <li v-for="c in contacts" :key="c.text">
            <span class="contact__icon" aria-hidden="true">
              <svg v-if="c.icon === 'phone'" viewBox="0 0 24 24" fill="none">
                <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="c.icon === 'send'" viewBox="0 0 24 24" fill="none">
                <path d="M21 4 3 11l6 2 2 6 10-15Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="c.icon === 'instagram'" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" stroke-width="1.7" />
                <circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.7" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7" />
                <path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            {{ c.text }}
          </li>
        </ul>
      </div>

      <form v-reveal.right="120" class="contact__form" @submit.prevent="onSubmit">
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
            <button
              type="button"
              class="role"
              :class="{ 'role--active': role === 'restaurant' }"
              @click="role = 'restaurant'"
            >
              <span class="role__dot"></span>
              {{ t('contact.roleRestaurant') }}
            </button>
            <button
              type="button"
              class="role"
              :class="{ 'role--active': role === 'customer' }"
              @click="role = 'customer'"
            >
              <span class="role__dot"></span>
              {{ t('contact.roleCustomer') }}
            </button>
          </div>
        </div>

        <label class="field">
          <span class="field__label">{{ t('form.comment') }}</span>
          <textarea rows="4" :placeholder="t('form.commentPh')" v-model="form.description"></textarea>
        </label>

        <button type="submit" class="btn btn-primary contact__submit" :disabled="sending">
          {{ sending ? t('form.sending') : t('form.submit') }}
        </button>
        <transition name="fade">
          <p v-if="sent" class="contact__ok">{{ t('contact.ok') }}</p>
        </transition>
        <transition name="fade">
          <p v-if="error" class="contact__err">{{ t('form.err') }}</p>
        </transition>
        <p class="contact__note">{{ t('contact.note') }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: #f2580c;
  padding: 100px 0;
}

.contact__inner {
  display: grid;
  grid-template-columns: 608px 1fr;
  gap: 56px;
  align-items: start;
}

.eyebrow--light {
  color: rgba(255, 255, 255, 0.85);
}

.contact__title {
  margin-top: 12px;
  max-width: 608px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 46px;
  line-height: 104%;
  letter-spacing: -0.015em;
  color: #fff6ec;
}

.contact__lead {
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  max-width: 608px;
}

.contact__list {
  list-style: none;
  margin-top: 32px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: var(--radius);
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 608px;
}

.contact__list li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 15.5px;
  font-weight: 500;
}

.contact__icon {
  color: #fff;
  display: inline-flex;
  flex-shrink: 0;
}

.contact__icon svg {
  width: 22px;
  height: 22px;
}

.contact__form {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow);
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
  font-size: 15px;
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

.contact__submit {
  width: 100%;
  margin-top: 4px;
}

.contact__submit:disabled {
  opacity: 0.6;
  cursor: default;
}

.contact__ok,
.contact__err {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 14px;
}

.contact__ok {
  color: var(--green-600);
}

.contact__err {
  color: #b3200a;
}

.fade-enter-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
}

.contact__note {
  text-align: center;
  font-size: 13px;
  color: var(--muted-2);
  margin-top: 14px;
}

@media (max-width: 1024px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact__title,
  .contact__lead,
  .contact__list {
    max-width: none;
  }
}

@media (max-width: 560px) {
  .contact__title {
    font-size: 34px;
  }
}

@media (max-width: 520px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .roles {
    grid-template-columns: 1fr;
  }

  .contact__form {
    padding: 24px;
  }
}
</style>
