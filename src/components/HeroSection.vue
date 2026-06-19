<script setup>
import heroImg from '../assets/images/Union.png'
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

      <div class="hero__media">
        <img v-parallax="{ distance: 14, scale: 1.06 }" class="hero__img" :src="heroImg" alt="Caravan Chicken ishchisi va jo'ja" />
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
  padding-bottom: 40px;
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
  width: 608px;
  max-width: 100%;
  height: 174px;
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

.hero__media {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
}

.hero__img {
  position: absolute;
  right: 0;
  bottom: 20;
  width: 1472px;
  height: 1042px;
  max-width: none;
  object-fit: contain;
  object-position: right bottom;
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
  }

  .hero__img {
    object-position: center;
  }
}

@media (max-width: 520px) {
  .hero__actions .btn {
    flex: 1 1 100%;
  }
}
</style>
