<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import processImg from '../assets/images/photo-qadoqlash.png'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const stepsEl = ref(null)
const run = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        run.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.35 }
  )
  if (stepsEl.value) observer.observe(stepsEl.value)
})

onBeforeUnmount(() => observer?.disconnect())

const icons = ['sprout', 'hand', 'spark', 'box', 'dots']
const steps = computed(() =>
  t('process.steps').map((s, i) => ({ ...s, n: i + 1, icon: icons[i] }))
)
</script>

<template>
  <section id="process" class="process">
    <div class="container">
      <header v-reveal class="process__head">
        <p class="eyebrow">{{ t('process.eyebrow') }}</p>
        <h2 class="section-title process__title">
          {{ t('process.title') }}
        </h2>
      </header>

      <ol ref="stepsEl" class="steps" :class="{ 'steps--run': run }">
        <li v-for="(s, i) in steps" :key="s.n" v-reveal3d.cascade="i * 110" class="step">
          <div class="step__top">
            <span class="step__num">{{ s.n }}</span>
            <span v-if="i < steps.length - 1" class="step__line"><i class="step__fill"></i></span>
          </div>
          <h3 class="step__title">
            <span class="step__icon">
              <svg v-if="s.icon === 'sprout'" viewBox="0 0 24 24" fill="none">
                <path d="M12 20v-8m0 0C12 8 9 6 5 6c0 4 3 6 7 6Zm0 0c0-3 2-5 6-5 0 3-2 5-6 5Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="s.icon === 'hand'" viewBox="0 0 24 24" fill="none">
                <path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V10m0-.5V4.5a1.5 1.5 0 0 1 3 0V10m0-.5V6a1.5 1.5 0 0 1 3 0v7c0 3.3-2.7 6-6 6s-6-2.2-6-5v-1l-1.4-1.4a1.5 1.5 0 0 1 2.1-2.1L8 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="s.icon === 'spark'" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else-if="s.icon === 'box'" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                <path d="M4 7.5l8 4.5 8-4.5M12 12v9" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none">
                <circle cx="6" cy="12" r="1.6" fill="currentColor" />
                <circle cx="11" cy="12" r="1.6" fill="currentColor" />
                <path d="M15 8l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            {{ s.title }}
          </h3>
          <p class="step__text">{{ s.text }}</p>
        </li>
      </ol>

      <img v-reveal3d.pop :src="processImg" class="process__photo" alt="Qadoqlash liniyasi" />
    </div>
  </section>
</template>

<style scoped>
.process {
  padding: 96px 0 110px;
  background: #fff;
}

.process__head {
  text-align: center;
  margin-bottom: 56px;
}

.process__title {
  margin-top: 10px;
}

.steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}

.step__top {
  position: relative;
  margin-bottom: 22px;
}

.step__num {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f3caa9;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  position: relative;
  z-index: 2;
  transform: scale(0.86);
  transition:
    background 0.4s ease,
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s ease;
}

.step__line {
  position: absolute;
  top: 22px;
  left: 52px;
  right: -24px;
  border-top: 2px dashed #f1c8a8;
  z-index: 1;
}

/* solid orange progress fill that draws across each dashed segment */
.step__fill {
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  border-top: 2px solid var(--orange);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.5s ease;
}

/* ---- run state: light each node, then fill the segment after it ---- */
.steps--run .step__num {
  background: var(--orange);
  transform: scale(1);
}

.steps--run .step:nth-child(1) .step__num { transition-delay: 0s; }
.steps--run .step:nth-child(2) .step__num { transition-delay: 0.5s; }
.steps--run .step:nth-child(3) .step__num { transition-delay: 1s; }
.steps--run .step:nth-child(4) .step__num { transition-delay: 1.5s; }
.steps--run .step:nth-child(5) .step__num { transition-delay: 2s; }

/* a soft pulse ring as each node activates */
.steps--run .step__num {
  box-shadow: 0 0 0 0 rgba(242, 88, 12, 0.35);
  animation: node-pulse 0.6s ease-out both;
}
.steps--run .step:nth-child(1) .step__num { animation-delay: 0s; }
.steps--run .step:nth-child(2) .step__num { animation-delay: 0.5s; }
.steps--run .step:nth-child(3) .step__num { animation-delay: 1s; }
.steps--run .step:nth-child(4) .step__num { animation-delay: 1.5s; }
.steps--run .step:nth-child(5) .step__num { animation-delay: 2s; }

@keyframes node-pulse {
  0% { box-shadow: 0 0 0 0 rgba(242, 88, 12, 0.45); }
  100% { box-shadow: 0 0 0 14px rgba(242, 88, 12, 0); }
}

.steps--run .step__fill {
  transform: scaleX(1);
}
.steps--run .step:nth-child(1) .step__fill { transition-delay: 0.25s; }
.steps--run .step:nth-child(2) .step__fill { transition-delay: 0.75s; }
.steps--run .step:nth-child(3) .step__fill { transition-delay: 1.25s; }
.steps--run .step:nth-child(4) .step__fill { transition-delay: 1.75s; }

.step__title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}

.step__icon {
  color: var(--orange);
  display: inline-flex;
}

.step__icon svg {
  width: 20px;
  height: 20px;
}

.step__text {
  font-size: 14.5px;
  color: var(--muted);
  max-width: 200px;
}

.process__photo {
  width: 100%;
  aspect-ratio: 16 / 6;
  border-radius: var(--radius);
  object-fit: cover;
}

@media (prefers-reduced-motion: reduce) {
  .step__num,
  .steps--run .step__num {
    background: var(--orange);
    transform: none;
    animation: none;
    box-shadow: none;
    transition: none;
  }
  .step__fill,
  .steps--run .step__fill {
    transform: scaleX(1);
    transition: none;
  }
}

@media (max-width: 900px) {
  .steps {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }

  .step__line {
    display: none;
  }
}

@media (max-width: 520px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-bottom: 40px;
  }

  /* row layout: numbered circle on the left, icon+title + text on the right */
  .step {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 16px;
    align-items: start;
  }

  .step__top {
    grid-row: 1 / span 2;
    margin-bottom: 0;
  }

  .step__title {
    margin-top: 0;
  }

  .step__text {
    max-width: none;
  }

  .process__photo {
    aspect-ratio: 3 / 4;
  }
}
</style>
