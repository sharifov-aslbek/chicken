<script setup>
import BrandLogo from './BrandLogo.vue'

const pages = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Mahsulotlar', to: '/mahsulotlar' },
  { label: 'Biz haqimizda', to: '/biz-haqimizda' },
  { label: 'Jarayon', to: '/#process' },
  { label: 'Savollar', to: '/#faq' },
  { label: "Bog'lanish", to: '/boglanish' },
]

const socials = ['send', 'instagram', 'facebook', 'youtube']
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div v-reveal class="footer__brand">
          <BrandLogo light />
          <p class="footer__desc">
            Jo'jalikdan dasturxoningizgacha — halol, pokiza va tez yetkazib beriladigan tovuq
            mahsulotlari.
          </p>
          <div class="footer__socials">
            <a v-for="s in socials" :key="s" href="#" class="social" :aria-label="s">
              <svg v-if="s === 'send'" viewBox="0 0 24 24" fill="none">
                <path d="M21 4 3 11l6 2 2 6 10-15Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="s === 'instagram'" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" stroke-width="1.7" />
                <circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.7" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
              <svg v-else-if="s === 'facebook'" viewBox="0 0 24 24" fill="none">
                <path d="M14 8h2V5h-2.2C12 5 11 6.3 11 8v1.5H9V12h2v7h2.5v-7H16l.5-2.5H13.5V8.4c0-.3.2-.4.5-.4Z" fill="currentColor" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="12" rx="3.5" stroke="currentColor" stroke-width="1.7" />
                <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div v-reveal="90" class="footer__col">
          <h3 class="footer__title">Sahifalar</h3>
          <ul>
            <li v-for="p in pages" :key="p.to"><router-link :to="p.to">{{ p.label }}</router-link></li>
          </ul>
        </div>

        <div v-reveal="180" class="footer__col">
          <h3 class="footer__title">Kontakt</h3>
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
              Toshkent sh., Sergeli tumani, Qumariq MFY, Alisher Navoiy ko'chasi, 11-uy
            </li>
            <li>
              <span class="footer__ico">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7" />
                  <path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              Du–Sh, 9:00–18:00
            </li>
          </ul>
        </div>

        <div v-reveal="270" class="footer__col">
          <h3 class="footer__title">Bizni toping</h3>
          <div class="footer__map" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M9 4v13M15 6.5v13" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Caravan Chicken. Barcha huquqlar himoyalangan. · Ishlab chiqaruvchi: «Caravan Chickens Meat» MChJ</p>
        <div class="footer__legal">
          <a href="#">Maxfiylik siyosati</a>
          <a href="#">Foydalanish shartlari</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2b1410;
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

.social svg {
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

@media (max-width: 920px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
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
