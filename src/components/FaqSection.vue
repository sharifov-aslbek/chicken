<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()
const faqs = computed(() => t('faq.items'))

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" class="faq">
    <div class="container faq__inner">
      <header v-reveal.left class="faq__head">
        <p class="eyebrow">{{ t('faq.eyebrow') }}</p>
        <h2 class="section-title faq__title">{{ t('faq.title') }}</h2>
        <p class="faq__lead">
          {{ t('faq.lead') }}
        </p>
        <a href="#contact" class="faq__ask">
          {{ t('faq.ask') }}
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </header>

      <ul class="faq__list">
        <li
          v-for="(f, i) in faqs"
          :key="i"
          v-reveal.right="i * 70"
          class="faq__item"
          :class="{ 'faq__item--open': openIndex === i }"
        >
          <button class="faq__q" :aria-expanded="openIndex === i" @click="toggle(i)">
            <span>{{ f.q }}</span>
            <span class="faq__toggle">
              <svg viewBox="0 0 24 24" fill="none">
                <path v-if="openIndex === i" d="M6 12h12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                <path v-else d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
              </svg>
            </span>
          </button>
          <div class="faq__a-wrap" :class="{ 'faq__a-wrap--open': openIndex === i }">
            <div class="faq__a-inner">
              <div class="faq__a">{{ f.a }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: #fff;
  padding: 96px 0;
}

.faq__inner {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 64px;
  align-items: start;
}

.faq__head {
  position: sticky;
  top: 90px;
}

.faq__title {
  margin-top: 10px;
  color: var(--ink);
}

.faq__lead {
  margin-top: 18px;
  color: var(--muted);
  font-size: 16px;
  max-width: 340px;
}

.faq__ask {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 22px;
  font-weight: 600;
  font-size: 15px;
  color: var(--orange);
}

.faq__ask svg {
  width: 16px;
  height: 16px;
}

.faq__ask:hover {
  color: var(--orange-strong);
}

.faq__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  /* Reserve enough height for the tallest open state (all items collapsed
     + one answer expanded) so toggling +/- never changes the section
     height and shifts the content below. */
  min-height: 760px;
}

.faq__item {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.faq__item--open {
  background: var(--cream);
  border-color: transparent;
}

.faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  text-align: left;
  padding: 22px 24px;
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  transition: color 0.2s ease;
}

.faq__item--open .faq__q {
  color: var(--orange);
  padding-bottom: 12px;
}

.faq__toggle {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--card-cream);
  color: var(--orange);
}

.faq__item--open .faq__toggle {
  background: var(--orange);
  color: #fff;
}

.faq__toggle svg {
  width: 18px;
  height: 18px;
}

.faq__a {
  padding: 0 24px 22px;
  font-size: 15px;
  color: var(--muted);
  line-height: 1.6;
  max-width: 620px;
}

/* Accordion via grid-template-rows 0fr -> 1fr: animates to the exact answer
   height (no max-height guessing, so no dead time / lag), and stays fully
   contained by .faq__list's reserved min-height so the section below never
   shifts while opening or closing. */
.faq__a-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.28s ease;
}

.faq__a-wrap--open {
  grid-template-rows: 1fr;
}

.faq__a-inner {
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.faq__a-wrap--open .faq__a-inner {
  opacity: 1;
  transition: opacity 0.24s ease 0.08s;
}

@media (prefers-reduced-motion: reduce) {
  .faq__a-wrap,
  .faq__a-inner {
    transition: opacity 0.15s ease;
  }
}

@media (max-width: 920px) {
  .faq__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .faq__head {
    position: static;
  }

  .faq__list {
    min-height: 0;
  }

  .faq__lead {
    max-width: none;
  }
}
</style>
