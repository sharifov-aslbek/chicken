<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const values = ['120+', '7+', '30+', '12']
const icons = ['users', 'calendar', 'layers', 'map']
const stats = computed(() =>
  t('stats.items').map((label, i) => ({ value: values[i], label, icon: icons[i] }))
)

const partners = ['Evos', 'Oqtepa', 'MaxWay', 'Les Ailes', 'FeedUp', 'Caféteria']
</script>

<template>
  <section class="stats">
    <div class="container">
      <div class="stats__card">
        <div v-for="(s, i) in stats" :key="i" v-reveal="i * 90" class="stat" :class="{ 'stat--border': i > 0 }">
          <span class="stat__icon">
            <!-- users -->
            <svg v-if="s.icon === 'users'" viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.8" />
              <path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              <path d="M16 6.2a3 3 0 0 1 0 5.6M18 19a5.2 5.2 0 0 0-2.5-4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
            <!-- calendar -->
            <svg v-else-if="s.icon === 'calendar'" viewBox="0 0 24 24" fill="none">
              <rect x="3.5" y="5" width="17" height="15" rx="3" stroke="currentColor" stroke-width="1.8" />
              <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
            <!-- layers -->
            <svg v-else-if="s.icon === 'layers'" viewBox="0 0 24 24" fill="none">
              <path d="M12 3l9 5-9 5-9-5 9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
              <path d="M3 13l9 5 9-5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
            </svg>
            <!-- map -->
            <svg v-else viewBox="0 0 24 24" fill="none">
              <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
              <path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </span>
          <div class="stat__value">{{ s.value }}</div>
          <div class="stat__label">{{ s.label }}</div>
        </div>
      </div>

      <div v-reveal class="trusted">
        <p class="trusted__title">{{ t('stats.trusted') }}</p>
        <div class="trusted__logos">
          <div v-for="p in partners" :key="p" class="trusted__logo">
            <span class="trusted__chip"></span>
            {{ p }}
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
}

.stat--border {
  border-left: 1px solid rgba(242, 88, 12, 0.18);
}

.stat__icon {
  display: inline-flex;
  color: var(--orange);
  margin-bottom: 14px;
}

.stat__icon svg {
  width: 26px;
  height: 26px;
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
  font-size: 15px;
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
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted-2);
  margin-bottom: 32px;
}

.trusted__logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px 48px;
}

.trusted__logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  color: var(--muted-2);
  opacity: 0.85;
}

.trusted__chip {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #d9d2ca;
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
  .stats__card {
    grid-template-columns: 1fr;
  }

  .stat--border {
    border-left: none;
  }

  .trusted__logo {
    font-size: 18px;
  }
}
</style>
