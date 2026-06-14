<script setup>
const steps = [
  {
    n: 1,
    title: 'Yetishtirish',
    text: "Sog'lom va tabiiy sharoitda boqilgan jo'jalar.",
    icon: 'sprout',
  },
  {
    n: 2,
    title: "Halol so'yish",
    text: "Shariy qoidalar asosida, qo'lda so'yiladi.",
    icon: 'hand',
  },
  {
    n: 3,
    title: 'Tozalash & qayta ishlash',
    text: 'Zamonaviy, gigiyenik va pokiza sexda ishlov beriladi.',
    icon: 'spark',
  },
  {
    n: 4,
    title: 'Qadoqlash',
    text: 'Toza va xavfsiz, pokiza qadoqlash.',
    icon: 'box',
  },
  {
    n: 5,
    title: 'Yetkazib berish',
    text: "Tez, uzluksiz — to'g'ridan-to'g'ri qo'lingizgacha.",
    icon: 'dots',
  },
]
</script>

<template>
  <section id="process" class="process">
    <div class="container">
      <header v-reveal class="process__head">
        <p class="eyebrow">Jarayon</p>
        <h2 class="section-title process__title">
          Jo'jalikdan dasturxoningizgacha — 5 bosqich
        </h2>
      </header>

      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.n" v-reveal3d.cascade="i * 110" class="step">
          <div class="step__top">
            <span class="step__num">{{ s.n }}</span>
            <span v-if="i < steps.length - 1" class="step__line"></span>
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

      <div v-reveal3d.pop class="process__photo img-ph" data-label="Qadoqlash liniyasi rasmi"></div>
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
  background: var(--orange);
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  position: relative;
  z-index: 2;
}

.step__line {
  position: absolute;
  top: 22px;
  left: 52px;
  right: -24px;
  border-top: 2px dashed #f1c8a8;
  z-index: 1;
}

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
  }

  .process__photo {
    aspect-ratio: 4 / 3;
  }
}
</style>
