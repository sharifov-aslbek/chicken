<script setup>
import BrandLogo from './BrandLogo.vue'
import AppIcon from './AppIcon.vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const pages = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.products', to: '/mahsulotlar' },
  { key: 'nav.about', to: '/biz-haqimizda' },
  { key: 'nav.process', to: '/#process' },
  { key: 'nav.faq', to: '/#faq' },
  { key: 'nav.contact', to: '/boglanish' },
]

const socials = [
  { icon: 'telegram', label: 'Telegram', href: 'https://t.me/caravan_chicken' },
  { icon: 'instagram', label: 'Instagram', href: '#' },
  { icon: 'facebook', label: 'Facebook', href: '#' },
  { icon: 'youtube', label: 'YouTube', href: '#' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div v-reveal class="footer__brand">
          <BrandLogo light />
          <p class="footer__desc">{{ t('footer.desc') }}</p>
          <div class="footer__socials">
            <a v-for="s in socials" :key="s.label" :href="s.href" class="social" :aria-label="s.label">
              <AppIcon :name="s.icon" />
            </a>
          </div>
        </div>

        <div v-reveal="90" class="footer__col">
          <h3 class="footer__title">{{ t('footer.pagesTitle') }}</h3>
          <ul>
            <li v-for="p in pages" :key="p.to"><router-link :to="p.to">{{ t(p.key) }}</router-link></li>
          </ul>
        </div>

        <div v-reveal="180" class="footer__col">
          <h3 class="footer__title">{{ t('footer.contactTitle') }}</h3>
          <ul class="footer__contacts">
            <li>
              <span class="footer__ico">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                </svg>
              </span>
              +998 71 200 21 11
            </li>
            <li>
              <span class="footer__ico">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" stroke-width="1.7" />
                  <path d="m4 7 8 5 8-5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                </svg>
              </span>
              info@caravanchicken.uz
            </li>
            <li>
              <span class="footer__ico">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.7" />
                </svg>
              </span>
              {{ t('footer.address') }}
            </li>
            <li>
              <span class="footer__ico">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7" />
                  <path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {{ t('footer.hours') }}
            </li>
          </ul>
        </div>

        <div v-reveal="270" class="footer__col">
          <h3 class="footer__title">{{ t('footer.findTitle') }}</h3>
          <div class="footer__map" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M9 4v13M15 6.5v13" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>{{ t('footer.copyright') }}</p>
        <div class="footer__legal">
          <a href="#">{{ t('footer.privacy') }}</a>
          <a href="#">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>

    <a href="tel:+998712002111" class="call-fab" aria-label="Qo'ng'iroq qilish">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" fill="currentColor" />
      </svg>
    </a>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: #3e0a0a;
  color: rgba(255, 255, 255, 0.78);
  padding: 64px 0 28px;
}

.footer__top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.4fr 1fr;
  gap: 40px;
  padding-bottom: 44px;
}

.footer__desc {
  margin-top: 18px;
  font-size: 14.5px;
  line-height: 1.6;
  max-width: 320px;
}

.footer__socials {
  display: flex;
  gap: 12px;
  margin-top: 22px;
}

.social {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  display: grid;
  place-items: center;
  transition: background 0.18s ease;
}

.social:hover {
  background: var(--orange);
}

.social :deep(.icon) {
  width: 19px;
  height: 19px;
}

.footer__title {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
}

.footer__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.footer__col a {
  font-size: 14.5px;
  transition: color 0.18s ease;
}

.footer__col a:hover {
  color: var(--orange-soft);
}

.footer__contacts li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14.5px;
  line-height: 1.5;
}

.footer__ico {
  color: var(--orange);
  flex-shrink: 0;
  display: inline-flex;
  margin-top: 1px;
}

.footer__ico svg {
  width: 19px;
  height: 19px;
}

.footer__map {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
  color: var(--orange);
  display: grid;
  place-items: center;
}

.footer__map svg {
  width: 40px;
  height: 40px;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.footer__bottom p {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.6);
}

.footer__legal {
  display: flex;
  gap: 28px;
}

.footer__legal a {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.18s ease;
}

.footer__legal a:hover {
  color: #fff;
}

/* Floating call button — fixed bottom-right with a pulsing ring. */
.call-fab {
  position: absolute;
  right: 26px;
  bottom: 26px;
  z-index: 5;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #41c56b;
  color: #fff;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
  animation: fab-bob 2.4s ease-in-out infinite;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.call-fab svg {
  width: 28px;
  height: 28px;
}

.call-fab:hover {
  transform: scale(1.08);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.34);
}

/* Two expanding rings behind the button. */
.call-fab::before,
.call-fab::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #41c56b;
  z-index: -1;
  animation: fab-pulse 2.2s ease-out infinite;
}

.call-fab::after {
  animation-delay: 1.1s;
}

@keyframes fab-pulse {
  0% {
    transform: scale(1);
    opacity: 0.55;
  }
  100% {
    transform: scale(1.9);
    opacity: 0;
  }
}

@keyframes fab-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .call-fab,
  .call-fab::before,
  .call-fab::after {
    animation: none;
  }
}

@media (max-width: 920px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
}

@media (max-width: 560px) {
  .call-fab {
    right: 18px;
    bottom: 18px;
    width: 54px;
    height: 54px;
  }
}

@media (max-width: 560px) {
  .footer__top {
    grid-template-columns: 1fr;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
