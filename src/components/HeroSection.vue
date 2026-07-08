<script setup>
import heroBanner1 from '../assets/images/hero/Asosiy Baner.png'
import heroBanner2 from '../assets/images/hero/Asosiy Baner 2.png'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()
const tags = computed(() => t('hero.tags'))

// Hero slideshow: full-size banners clipped to the Union.png curve via
// CSS mask; layers crossfade every 5 seconds.
const banners = [heroBanner1, heroBanner2]
const activeBanner = ref(0)
let bannerTimer = null

onMounted(() => {
  bannerTimer = setInterval(() => {
    activeBanner.value = (activeBanner.value + 1) % banners.length
  }, 5000)
})

onBeforeUnmount(() => clearInterval(bannerTimer))
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
          <router-link to="/boglanish" class="btn btn-soft">{{ t('nav.partner') }}</router-link>
          <router-link to="/mahsulotlar" class="btn btn-white">{{ t('hero.viewProducts') }}</router-link>
          <router-link to="/boglanish" class="btn btn-ghost">
            {{ t('hero.buy') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
      </div>

      <div class="hero__media" role="img" aria-label="Caravan Chicken ishchisi va jo'ja">
        <div
          v-for="(banner, i) in banners"
          :key="banner"
          class="hero__slide"
          :class="{ 'hero__slide--active': i === activeBanner }"
          :style="{ backgroundImage: `url(${banner})` }"
        ></div>
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
}

.hero__grid {
  display: grid;
  /* Fixed 610px text column — the title must render at exactly 610px. */
  grid-template-columns: 610px 1fr;
  align-items: center;
  align-content: center;
  gap: 32px;
  height: 100%;
  padding-top: 110px;
  padding-bottom: 0;
}

.hero__content {
  width: 610px;
  padding: 40px 0;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding-top: 5px;
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
  font-size: 49px;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.02em;
  width: 610px;
  margin-bottom: 24px;
  /* Titles in messages.js carry manual \n line breaks. */
  white-space: pre-line;
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

/* The curved silhouette comes from Union.png's alpha channel used as a CSS
   mask (same sizing the old background had: the PNG has ~38% transparent
   padding at the bottom, so the mask is oversized and pinned to the top).
   Full-size banner slides underneath get clipped to that curve. */
.hero__media {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60%;
  /* Decorative only — never block clicks on hero text/buttons beneath. */
  pointer-events: none;
  -webkit-mask-image: url('../assets/images/Union.png');
  mask-image: url('../assets/images/Union.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: right top;
  mask-position: right top;
  -webkit-mask-size: auto 188%;
  mask-size: auto 188%;
}

.hero__slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  /* The subject stands in the right ~40% of both banners — pin the right
     edge so he stays fully inside the curve at any viewport width. */
  background-position: right top;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1.2s ease;
}

/* Desktop, second banner: zoom while keeping the right edge anchored — the
   subject slides left inside the frame (the image's left slice drops out)
   and his right side stays uncut. */
@media (min-width: 981px) {
  .hero__slide:nth-child(2) {
    background-size: auto 118%;
  }
}

/* Incoming slide settles from a slight zoom (finishes before the next swap
   so the outgoing layer fades out without a transform jump). */
.hero__slide--active {
  opacity: 1;
  animation: hero-slide-zoom 4.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes hero-slide-zoom {
  from {
    transform: scale(1.08);
  }
  to {
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__slide {
    transition: opacity 0.4s ease;
  }

  .hero__slide--active {
    animation: none;
  }
}

/* Ultra-wide viewports (browser zoomed out, e.g. 25%): render the hero as a
   centered 1472px design canvas — the photo pulls in from the viewport edge
   by the excess, so it stays next to the text instead of stretching away.
   Below 1472px the offset is 0, so desktop→mobile styles are untouched. */
@media (min-width: 1472px) {
  .hero__media {
    right: calc((100vw - 1472px) / 2);
    /* 60% of the 1472px canvas — keeps the cover crop identical to how the
       photo renders on a regular desktop instead of zooming in. */
    width: 883px;
  }
}

/* Narrow desktop / tablet-landscape: scale the whole hero proportionally
   (788px tall at the 1472px canvas → 53.5vw). The mask tracks the hero
   height, so the photo keeps the exact desktop composition, just smaller —
   no straight clipped edges or tight crops. */
@media (max-width: 1471px) and (min-width: 981px) {
  /* Everything below is the 1472px desktop canvas expressed in vw
     (value / 14.72), so the hero renders as a proportionally scaled-down
     desktop — photo, type and spacing shrink together. */
  .hero {
    height: 53.5vw; /* 788px */
  }

  .hero__grid {
    grid-template-columns: 41.4vw 1fr; /* 610px */
    padding-top: 7.5vw; /* 110px */
  }

  .hero__content {
    width: 41.4vw; /* 610px */
    padding: 2.7vw 0; /* 40px */
  }

  .hero__title {
    font-size: 3.33vw; /* 49px */
    width: 41.4vw; /* 610px */
    margin: 0.95vw 0 1.6vw; /* 14px 24px */
  }

  .hero__lead {
    font-size: clamp(14px, 1.22vw, 18px);
    max-width: 36.7vw; /* 540px */
    margin-bottom: 2.4vw; /* 36px */
  }
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
    width: auto;
    max-width: 608px;
    padding: 24px 0 0;
  }

  .hero__title {
    width: auto;
    max-width: 608px;
  }

  .hero__media {
    position: relative;
    width: 100%;
    height: 420px;
    -webkit-mask-position: center top;
    mask-position: center top;
    -webkit-mask-size: cover;
    mask-size: cover;
  }

  .hero__slide {
    background-position: center top;
  }
}

@media (max-width: 640px) {
  .hero__grid {
    gap: 0;
    /* Header is 94px tall on mobile (16px offset + 78px bar); 94px here
       plus the 13px content padding and 5px eyebrow padding puts the
       eyebrow 18px below the navbar. */
    padding-top: 94px;
    padding-bottom: 0;
  }

  .hero__content {
    max-width: 100%;
    padding: 13px 0 0;
  }

  .hero__title {
    /* Proportional to the viewport so the desktop (608px canvas) composition
       is preserved on every phone: exactly 34px at 375px, scaling the same
       way above and below (9.07vw = 34/375). */
    font-size: 9.07vw;
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.01em;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .hero__eyebrow {
    font-size: 13px;
  }

  .hero__lead {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 54px;
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

  /* Mobile: the curve comes from hero-mobile.png's alpha channel. The box
     keeps that PNG's native aspect ratio and the mask stretches with it, so
     the shape scales to any width instead of getting cropped. */
  .hero__media {
    height: auto;
    aspect-ratio: 375 / 538;
    /* The mask's top-left arc is transparent, so pull the box up under the
       actions to keep the visible photo close to the "Sotib olish" link;
       pointer-events off so the invisible overlap can't block taps. */
    margin: -48px -24px 0;
    width: calc(100% + 48px);
    pointer-events: none;
    -webkit-mask-image: url('../assets/images/hero-mobile.png');
    mask-image: url('../assets/images/hero-mobile.png');
    -webkit-mask-position: top;
    mask-position: top;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }

  /* Zoom in slightly and nudge the photo down so the man's cap clears the
     curve's transparent top edge; the man sits in the right ~40% of both
     banners, so anchor the crop window there. */
  .hero__slide {
    background-size: auto 112%;
    background-position: 78% 40px;
  }

  .hero__img--mobile {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
}

/* Phone-width title steps: 551–640px keeps the proportional 9.07vw, then
   550–450px → 37px, 449–441px → 34px (bridge), 440px and below → 30px. */
@media (max-width: 550px) {
  .hero__title {
    font-size: 37px;
  }
}

@media (max-width: 449px) {
  .hero__title {
    font-size: 34px;
  }
}

@media (max-width: 440px) {
  .hero__title {
    font-size: 30px;
  }
}
</style>
