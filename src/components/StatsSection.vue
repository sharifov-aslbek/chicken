<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import iconUsers from '../assets/images/icons/icon.svg'
import iconCalendar from '../assets/images/icons/icon-2.svg'
import iconLayers from '../assets/images/icons/icon-3.svg'
import iconMap from '../assets/images/icons/icon-4.svg'

const { t } = useI18n()

const values = ['120+', '7+', '30+', '12']
const icons = [iconUsers, iconCalendar, iconLayers, iconMap]
const stats = computed(() =>
  t('stats.items').map((label, i) => ({ value: values[i], label, icon: icons[i] }))
)

// Partner logos — all images in the bizgaishonishadi folder, sorted by filename.
const partnerLogos = Object.entries(
  import.meta.glob('../assets/images/bizgaishonishadi/*.png', { eager: true, import: 'default' })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

// Duplicated once so the marquee can loop seamlessly.
const marquee = [...partnerLogos, ...partnerLogos]
</script>

<template>
  <section class="stats">
    <div class="container">
      <div class="stats__card">
        <div v-for="(s, i) in stats" :key="i" v-reveal="i * 90" class="stat" :class="{ 'stat--border': i > 0 }">
          <img class="stat__icon" :src="s.icon" :alt="s.label" width="36" height="36" />
          <div class="stat__value">{{ s.value }}</div>
          <div class="stat__label">{{ s.label }}</div>
        </div>
      </div>

      <div v-reveal class="trusted">
        <p class="trusted__title">{{ t('stats.trusted') }}</p>
        <div class="marquee">
          <div class="marquee__track">
            <div v-for="(logo, i) in marquee" :key="i" class="marquee__item">
              <img :src="logo" alt="Hamkor logotipi" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: 80px 0 72px;
  background: #fff;
}

.stats__card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: var(--cream);
  border-radius: var(--radius-lg);
  padding: 44px 16px;
}

.stat {
  padding: 8px 36px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.stat:hover {
  transform: translateY(-8px);
}

.stat:hover .stat__icon {
  transform: translateY(-2px) scale(1.06);
}

.stat--border {
  border-left: 1px solid rgba(242, 88, 12, 0.18);
}

.stat__icon {
  display: block;
  width: 36px;
  height: 36px;
  margin-bottom: 14px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.stat__value {
  font-size: clamp(38px, 4vw, 52px);
  font-weight: 800;
  line-height: 1;
  color: #f2580c;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.stat__label {
  font-size: 14px;
  line-height: 22px;
  font-family: var(--font-body);
  font-weight: 400;
  color: #4a423c;
  max-width: 180px;
}

.trusted {
  margin-top: 72px;
  text-align: center;
}

.trusted__title {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8a817a;
  margin-bottom: 32px;
}

.marquee {
  position: relative;
  overflow: hidden;
  /* Fade the logos out at both edges. */
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.marquee__track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 56px;
  animation: marquee-scroll 32s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marquee__item img {
  height: 56px;
  width: auto;
  object-fit: contain;
  display: block;
  border-radius: 14px;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    /* Shift by exactly half — the second copy lines up seamlessly. */
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}

@media (max-width: 900px) {
  .stats__card {
    grid-template-columns: 1fr 1fr;
    gap: 24px 0;
    padding: 32px 12px;
  }

  .stat--border:nth-child(odd) {
    border-left: none;
  }

  .stat {
    padding: 8px 24px;
  }
}

@media (max-width: 520px) {
  .stats {
    padding: 56px 0 64px;
  }

  .stats__card {
    grid-template-columns: 1fr 1fr;
    gap: 32px 0;
    padding: 28px 8px;
  }

  .stat--border {
    border-left: none;
  }

  .stat {
    padding: 4px 20px;
  }

  .stat__value {
    font-size: 40px;
    margin-bottom: 10px;
  }

  .stat__label {
    font-size: 14px;
    line-height: 22px;
    max-width: 140px;
  }

  .trusted {
    margin-top: 48px;
  }

  .trusted__title {
    margin-bottom: 28px;
  }

  .marquee__track {
    gap: 36px;
  }

  .marquee__item img {
    height: 40px;
  }
}
</style>
