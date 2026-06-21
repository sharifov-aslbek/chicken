<script setup>
import heroImgMobile from '../assets/images/hero-mobile.png'
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()
const tags = computed(() => t('hero.tags'))
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <p v-reveal class="hero__eyebrow">
          <template v-for="(tag, i) in tags" :key="tag">
            <span>{{ tag }}</span>
            <span v-if="i < tags.length - 1" class="dot">·</span>
          </template>
        </p>

        <h1 v-reveal="80" class="hero__title">
          {{ t('hero.title') }}
        </h1>

        <p v-reveal="160" class="hero__lead">
          {{ t('hero.lead') }}
        </p>

        <div v-reveal="240" class="hero__actions">
          <a href="#partner" class="btn btn-soft">{{ t('nav.partner') }}</a>
          <a href="#products" class="btn btn-white">{{ t('hero.viewProducts') }}</a>
          <a href="#buy" class="btn btn-ghost">
            {{ t('hero.buy') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div class="hero__media" role="img" aria-label="Caravan Chicken ishchisi va jo'ja">
        <img class="hero__img--mobile" :src="heroImgMobile" alt="Caravan Chicken ishchisi va jo'ja" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 788px;
  background: linear-gradient(180deg, #ff540a 0%, #ff8049 100%);
  color: #fff;
  overflow: hidden;
  border-radius: 0 0 40px 40px;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  align-content: center;
  gap: 32px;
  height: 100%;
  padding-top: 110px;
  padding-bottom: 0;
}

.hero__content {
  max-width: 600px;
  padding: 40px 0;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 20px;
}

.hero__eyebrow .dot {
  opacity: 0.7;
}

.hero__title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.02em;
  max-width: 608px;
  margin-bottom: 24px;
}

.hero__lead {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
  max-width: 540px;
  margin-bottom: 36px;
}

.hero__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
}

/* Decorative photo lives as a right-anchored background that fills the hero
   height. The PNG has ~38% transparent padding at the bottom, so the
   background is oversized (auto 165%) and pinned to the top — the empty
   bottom falls outside the box, leaving the photo flush with the hero edge. */
.hero__media {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 55%;
  background-image: url('../assets/images/Union.png');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto 165%;
}

.hero__img--mobile {
  display: none;
}

@media (max-width: 980px) {
  .hero {
    height: auto;
  }

  .hero__grid {
    grid-template-columns: 1fr;
    height: auto;
  }

  .hero__content {
    padding: 24px 0 0;
  }

  .hero__media {
    position: relative;
    width: 100%;
    height: 420px;
    background-position: center top;
    background-size: cover;
  }
}

@media (max-width: 640px) {
  .hero {
    border-radius: 0 0 28px 28px;
  }

  .hero__grid {
    gap: 0;
    padding-top: 96px;
    padding-bottom: 0;
  }

  .hero__content {
    max-width: 100%;
    padding: 8px 0 0;
  }

  .hero__title {
    font-size: 34px;
    font-weight: 800;
    line-height: 38px;
    letter-spacing: -0.01em;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .hero__lead {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 28px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }

  .hero__actions .btn {
    width: 100%;
  }

  /* Hamkor bo'lish — white filled */
  .hero__actions .btn-soft {
    background: #fff;
    color: var(--orange);
    box-shadow: var(--shadow-sm);
  }

  /* Mahsulotlarni ko'rish — outlined */
  .hero__actions .btn-white {
    background: transparent;
    color: #fff;
    border: 1.5px solid rgba(255, 255, 255, 0.85);
    box-shadow: none;
  }

  /* Sotib olish — centered text link */
  .hero__actions .btn-ghost {
    margin-top: 2px;
  }

  .hero__media {
    height: auto;
    margin: 28px -24px 0;
    width: calc(100% + 48px);
    background-image: none;
  }

  .hero__img--mobile {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
}
</style>
