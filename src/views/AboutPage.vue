<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const statValues = ['120+', '7+', '30+', '12']
const statIcons = ['users', 'calendar', 'grid', 'pin']
const stats = computed(() =>
  t('aboutP.stats').map((label, i) => ({ value: statValues[i], label, icon: statIcons[i] }))
)

const valueIcons = ['hand', 'bird', 'box']
const values = computed(() => t('aboutP.values').map((v, i) => ({ ...v, icon: valueIcons[i] })))
</script>

<template>
  <section class="page">
    <!-- Hero -->
    <div class="hero">
      <div class="container hero__inner">
        <p v-reveal class="eyebrow">{{ t('aboutP.eyebrow') }}</p>
        <h1 v-reveal="80" class="hero__title">{{ t('aboutP.title') }}</h1>
        <p v-reveal="160" class="hero__lead">
          {{ t('aboutP.lead') }}
        </p>
      </div>
    </div>

    <!-- Team banner -->
    <div class="container">
      <div v-reveal3d.pop class="banner" role="img" :aria-label="t('aboutP.title')"></div>
    </div>

    <!-- Story -->
    <div class="story">
      <div class="container story__inner">
        <div v-reveal.left class="story__text">
          <h2 class="story__title">{{ t('aboutP.storyTitle') }}</h2>
          <p>{{ t('aboutP.storyP1') }}</p>
          <p>{{ t('aboutP.storyP2') }}</p>
          <p>{{ t('aboutP.storyP3') }}</p>
        </div>
      </div>
      <div v-reveal.right="120" class="story__media">
        <div class="story__photo"></div>
        <div class="story__badge">
          <strong>3.5 mln</strong>
          <span>{{ t('aboutP.badgeText') }}</span>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="stats-band">
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
            <path d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            <path d="M20.5 12L12 16.5 3.5 12M20.5 16.5L12 21l-8.5-4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none">
            <path d="M9 4.5L4 6.5v13l5-2 6 2 5-2v-13l-5 2-6-2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            <path d="M9 4.5v13M15 6.5v13" stroke="currentColor" stroke-width="1.7" />
          </svg>
        </span>
        <strong class="stat__value">{{ s.value }}</strong>
        <span class="stat__label">{{ s.label }}</span>
      </div>
      </div>
    </div>

    <!-- Values -->
    <div class="values-wrap">
      <div class="container">
        <p v-reveal class="eyebrow values__eyebrow">{{ t('aboutP.valuesEyebrow') }}</p>
        <h2 v-reveal="80" class="values__heading">{{ t('aboutP.valuesHeading') }}</h2>
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
        <h2 v-reveal class="cta__title">{{ t('aboutP.ctaTitle') }}</h2>
        <p v-reveal="80" class="cta__text">
          {{ t('aboutP.ctaText') }}
        </p>
        <router-link v-reveal="160" to="/boglanish" class="btn btn-white cta__btn">
          {{ t('aboutP.ctaBtn') }}
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
  width: 100%;
  aspect-ratio: 1440 / 1200;
  border-radius: 20px;
  position: relative;
  background: url('../assets/images/bizhaqimizda/mainimage.png') center / cover no-repeat;
}

.story {
  position: relative;
  min-height: 951px;
  background: #fff;
}

/* Text column stays inside the container; vertically centered. */
.story__inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  min-height: 951px;
}

.story__text {
  max-width: 620px;
  padding: 72px 0;
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

/* Image bleeds to the right viewport edge at full section height. */
.story__media {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  z-index: 1;
}

.story__photo {
  position: absolute;
  inset: 0;
  background: url('../assets/images/bizhaqimizda/bizninghikoyamiz.png') right center / cover no-repeat;
}

.story__badge {
  position: absolute;
  left: 15%;
  bottom: 80px;
  background: #f2580c;
  color: #fff;
  border-radius: 18px;
  padding: 24px 28px;
  max-width: 360px;
  box-shadow: var(--shadow);
}

.story__badge strong {
  display: block;
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 10px;
}

.story__badge span {
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.95;
}

/* Full-width cream band, flush against the story section above. */
.stats-band {
  background: var(--cream);
  padding: 88px 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat {
  text-align: left;
  padding: 4px 24px 4px 0;
}

/* Thin vertical divider between items, like the design frame. */
.stat + .stat {
  border-left: 1px solid var(--line);
  padding-left: 32px;
}

.stat__icon {
  display: inline-flex;
  color: var(--orange);
  margin-bottom: 14px;
}

.stat__icon svg {
  width: 30px;
  height: 30px;
}

.stat__value {
  display: block;
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 800;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: #f2580c;
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
  border: 1px solid var(--color-border-subtle, rgba(243, 217, 191, 1));
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
  background: #f2580c;
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
    min-height: 0;
  }
  .story__inner {
    display: block;
    min-height: 0;
  }
  .story__text {
    max-width: none;
    padding: 56px 0 28px;
  }
  .stats-band {
    padding: 56px 0;
  }
  .stats {
    grid-template-columns: 1fr 1fr;
    gap: 36px 28px;
  }
  /* 2-col layout: only the second column keeps a divider. */
  .stat + .stat {
    border-left: none;
    padding-left: 0;
  }
  .stat:nth-child(even) {
    border-left: 1px solid var(--line);
    padding-left: 28px;
  }
  .values {
    grid-template-columns: 1fr;
  }

  /* Stacked layout: a landscape photo with the badge as a full-width block below. */
  .story__media {
    position: static;
    width: 100%;
    padding: 0 24px 64px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .story__photo {
    position: static;
    aspect-ratio: 335 / 180;
    border-radius: var(--radius);
    background-image: url('../assets/images/bizhaqimizda/story-photo.png');
  }

  .story__badge {
    position: static;
    left: auto;
    bottom: auto;
    width: 100%;
    max-width: none;
  }
}

@media (max-width: 560px) {
  .stats {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .stat:nth-child(even) {
    border-left: none;
    padding-left: 0;
  }
}
</style>
