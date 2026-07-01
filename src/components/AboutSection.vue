<script setup>
import aboutMobileImg from '../assets/images/about-us-mobile.png'
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const icons = ['hand', 'bird', 'box']
const features = computed(() =>
  t('about.features').map((f, i) => ({ ...f, icon: icons[i] }))
)
</script>

<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div class="about__content">
        <p v-reveal.left class="eyebrow">{{ t('about.eyebrow') }}</p>
        <h2 v-reveal.left="80" class="section-title about__title">
          {{ t('about.title') }}
        </h2>
        <p v-reveal.left="160" class="about__lead">
          {{ t('about.lead') }}
        </p>

        <div class="about__media" role="img" aria-label="Caravan Chicken ishlab chiqarish liniyasi">
          <img class="about__photo about__photo--mobile" :src="aboutMobileImg" alt="Caravan Chicken ishlab chiqarish liniyasi" />
        </div>

        <ul class="about__list">
          <li v-for="(f, i) in features" :key="f.title" v-reveal.left="220 + i * 90" class="feature">
            <span class="feature__icon">
              <svg v-if="f.icon === 'hand'" viewBox="0 0 24 24" fill="none">
                <path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V10m0-.5V4.5a1.5 1.5 0 0 1 3 0V10m0-.5V6a1.5 1.5 0 0 1 3 0v7c0 3.3-2.7 6-6 6s-6-2.2-6-5v-1l-1.4-1.4a1.5 1.5 0 0 1 2.1-2.1L8 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="f.icon === 'bird'" viewBox="0 0 24 24" fill="none">
                <path d="M16 7c0 5-3.5 9-8 9-2.5 0-4.5-1-4.5-1S6 13 6 10c-1.5.5-2.5 0-2.5 0C4 7.5 6 6 9 6c2 0 3.5 1 3.5 1" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                <path d="M16 7l4-2-1.5 3.2L21 10" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                <circle cx="13" cy="7.5" r="0.9" fill="currentColor" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none">
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                <path d="M4 7.5l8 4.5 8-4.5M12 12v9" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
            </span>
            <div>
              <h3 class="feature__title">{{ f.title }}</h3>
              <p class="feature__text">{{ f.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <span class="about__fade" aria-hidden="true"></span>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  background: var(--cream);
  overflow: hidden;
  min-height: 812px;
}


.about__grid {
  display: grid;
  grid-template-columns: 650px 1fr;
  align-items: center;
  align-content: center;
  gap: 56px;
  min-height: 812px;
}

.about__content {
  padding: 0;
}

.about__title {
  margin: 16px 0 22px;
  max-width: 650px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 46px;
  line-height: 106%;
  letter-spacing: -0.015em;
  color: #3e0a0a;
}

.about__lead {
  max-width: 650px;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0;
  color: #4a423c;
  margin-bottom: 36px;
}

.about__list {
  list-style: none;
  display: grid;
  gap: 26px;
}

.feature {
  display: flex;
  gap: 18px;
  align-items: flex-start;
}

.feature__icon {
  flex-shrink: 0;
  color: var(--orange);
  display: inline-flex;
}

.feature__icon svg {
  width: 26px;
  height: 26px;
}

.feature__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #1f1a17;
  margin-bottom: 4px;
}

.feature__text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #4a423c;
}

.about__media {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  /* Image is 1040×812 — at 812px section height it sits at its natural size,
     occupying ~72% of a 1440 frame on the right (matching Figma). */
  width: 72%;
  background-image: url('../assets/images/union2.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
}

.about__photo--mobile {
  display: none;
}

/* Desktop and above: keep the section bounded to the 1200px container and
   anchor the photo to it (instead of the viewport edge), so this section lines
   up with the rest of the page at any width — normal desktop or zoomed out.
   The rule is continuous at 1440px (equals the full-bleed behaviour there), so
   ~1440 screens are unchanged; wider screens are reined into the container. */
@media (min-width: 1241px) {
  .about__grid {
    position: relative;
  }

  /* Reproduce the 1440 design frame relative to the 1200 container so the
     photo keeps its ideal placement (same crop, arc and shadow).
     Bleed past the container = (1440 - 1200) / 2 = 120px; the image is 1040×812
     so at 72% of 1440 it sits at its natural size. */
  .about__media {
    right: -120px;
    width: 1040px;
  }
}

.about__fade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 140px;
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(to top, #fff6ec 0%, rgba(255, 246, 236, 0) 100%);
}

/* Tablet / narrow desktop: shrink the photo so it no longer overlaps the
   text and everything stays fully visible before the mobile layout. */
@media (max-width: 1240px) and (min-width: 981px) {
  .about,
  .about__grid {
    min-height: 680px;
  }

  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__content {
    padding-right: 44%;
  }

  .about__title {
    font-size: 40px;
  }

  .about__media {
    width: 42%;
  }
}

@media (max-width: 980px) {
  .about,
  .about__grid {
    min-height: 0;
  }

  .about__grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .about__content {
    padding: 56px 0 40px;
  }

  .eyebrow {
    text-align: center;
  }

  .about__title {
    font-size: 34px;
  }

  .about__media {
    position: relative;
    top: auto;
    bottom: auto;
    right: auto;
    width: 100%;
    height: auto;
    margin: 12px 0 32px;
    background-image: none;
  }

  .about__photo--mobile {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 18px;
  }

  .about__fade {
    display: none;
  }
}
</style>
