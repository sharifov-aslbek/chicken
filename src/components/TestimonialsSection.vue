<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t, locale } = useI18n()
const reviews = computed(() => t('reviews.items'))

// Typewriter state, one entry per review card.
const typed = ref([])
const finished = ref([])
const cardEls = []
let observer = null
const timers = []
const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function clearTimers() {
  timers.forEach((id) => clearTimeout(id))
  timers.length = 0
}

function fullText(i) {
  return `"${reviews.value[i].text}"`
}

function reset() {
  typed.value = reviews.value.map(() => '')
  finished.value = reviews.value.map(() => false)
}

function typeCard(i) {
  const full = fullText(i)
  let n = 0
  const step = () => {
    typed.value[i] = full.slice(0, n)
    if (n < full.length) {
      n += 1
      timers.push(setTimeout(step, 22))
    } else {
      finished.value[i] = true
    }
  }
  step()
}

function showInstantly() {
  reviews.value.forEach((_, i) => {
    typed.value[i] = fullText(i)
    finished.value[i] = true
  })
}

onMounted(() => {
  reset()
  if (reduceMotion) {
    showInstantly()
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        const i = Number(e.target.dataset.idx)
        observer.unobserve(e.target)
        timers.push(setTimeout(() => typeCard(i), i * 280))
      })
    },
    { threshold: 0.45 }
  )
  cardEls.forEach((el) => el && observer.observe(el))
})

// Re-type from scratch when the language changes.
watch(locale, () => {
  clearTimers()
  reset()
  if (reduceMotion) {
    showInstantly()
    return
  }
  reviews.value.forEach((_, i) => timers.push(setTimeout(() => typeCard(i), i * 280)))
})

onBeforeUnmount(() => {
  observer && observer.disconnect()
  clearTimers()
})
</script>

<template>
  <section class="reviews">
    <div class="container">
      <header v-reveal class="reviews__head">
        <p class="eyebrow">{{ t('reviews.eyebrow') }}</p>
        <h2 class="section-title reviews__title">{{ t('reviews.title') }}</h2>
      </header>

      <div class="reviews__grid">
        <article
          v-for="(r, i) in reviews"
          :key="r.name"
          :ref="(el) => { if (el) cardEls[i] = el.$el || el }"
          :data-idx="i"
          v-scroll3d="{ tilt: 6 }"
          v-reveal3d.cascade="i * 110"
          class="review"
        >
          <div class="review__top">
            <div class="review__stars" aria-label="5 yulduz">
              <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.6 9.1l5.8-.8L12 3Z" />
              </svg>
            </div>
            <span class="review__logo">LOGO</span>
          </div>
          <p class="review__text">
            <span class="review__sizer" aria-hidden="true">"{{ r.text }}"</span>
            <span class="review__typed">{{ typed[i] }}<i v-if="!finished[i]" class="review__caret" aria-hidden="true"></i></span>
          </p>
          <div class="review__author">
            <span class="review__avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.6" />
                <path d="M5.5 19c.7-3.2 3.3-5 6.5-5s5.8 1.8 6.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </span>
            <span class="review__who">
              <strong>{{ r.name }}</strong>
              <span>{{ r.company }}</span>
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  background: var(--cream);
  padding: 96px 0;
}

.reviews__head {
  text-align: center;
  margin-bottom: 48px;
}

.reviews__title {
  margin-top: 10px;
  color: #2b1d14;
}

.reviews__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

.review {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.review__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.review__stars {
  display: inline-flex;
  gap: 4px;
  color: var(--orange);
}

.review__stars svg {
  width: 18px;
  height: 18px;
  transform-origin: center;
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    filter 0.25s ease;
}

/* staggered "pop + spin-in" once the card reveals */
.review.is-revealed .review__stars svg {
  animation: star-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
}
.review.is-revealed .review__stars svg:nth-child(1) { animation-delay: 0.12s; }
.review.is-revealed .review__stars svg:nth-child(2) { animation-delay: 0.24s; }
.review.is-revealed .review__stars svg:nth-child(3) { animation-delay: 0.36s; }
.review.is-revealed .review__stars svg:nth-child(4) { animation-delay: 0.48s; }
.review.is-revealed .review__stars svg:nth-child(5) { animation-delay: 0.6s; }

@keyframes star-pop {
  0% { opacity: 0; transform: scale(0) rotate(-90deg); }
  55% { opacity: 1; transform: scale(1.35) rotate(12deg); }
  75% { transform: scale(0.9) rotate(-4deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
}

/* hover: stars lift in a little wave and glow */
.review:hover .review__stars svg {
  transform: scale(1.2) rotate(-8deg);
  filter: drop-shadow(0 2px 5px rgba(242, 88, 12, 0.55));
}
.review:hover .review__stars svg:nth-child(1) { transition-delay: 0s; }
.review:hover .review__stars svg:nth-child(2) { transition-delay: 0.05s; }
.review:hover .review__stars svg:nth-child(3) { transition-delay: 0.1s; }
.review:hover .review__stars svg:nth-child(4) { transition-delay: 0.15s; }
.review:hover .review__stars svg:nth-child(5) { transition-delay: 0.2s; }

@media (prefers-reduced-motion: reduce) {
  .review.is-revealed .review__stars svg {
    animation: none;
  }
  .review:hover .review__stars svg {
    transform: none;
    filter: none;
  }
}

.review__logo {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--muted-2);
  background: var(--card-cream);
  border-radius: var(--radius-pill);
  padding: 6px 14px;
}

.review__text {
  position: relative;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--ink);
  margin-bottom: 28px;
  flex: 1;
}

/* Invisible full text reserves the final height so typing doesn't shift layout. */
.review__sizer {
  visibility: hidden;
}

.review__typed {
  position: absolute;
  inset: 0;
}

.review__caret {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: var(--orange);
  animation: review-caret 0.8s steps(1) infinite;
}

@keyframes review-caret {
  50% {
    opacity: 0;
  }
}

.review__author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.review__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--card-cream);
  color: var(--muted);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.review__avatar svg {
  width: 24px;
  height: 24px;
}

.review__who {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.review__who strong {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
}

.review__who span {
  font-size: 14px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .reviews__grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
}
</style>
