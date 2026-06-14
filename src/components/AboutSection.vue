<script setup>
import aboutImg from '../assets/images/union2.png'

const features = [
  {
    title: "Halol so'yish kafolati",
    text: "Shariy qoidalar asosida, qo'lda so'yiladi.",
    icon: 'hand',
  },
  {
    title: "O'z tovuq fermamiz mavjud",
    text: "Sog'lom ozuqa va toza sharoit kafolati.",
    icon: 'bird',
  },
  {
    title: 'Gigiyenik va halol qadoqlash',
    text: 'Zamonaviy uskunalarda toza, ishonchli qadoqlash.',
    icon: 'box',
  },
]
</script>

<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div class="about__content">
        <p v-reveal.left class="eyebrow">Biz haqimizda</p>
        <h2 v-reveal.left="80" class="section-title about__title">
          Ishonch ustida qurilgan katta ishlab chiqarish tizimi
        </h2>
        <p v-reveal.left="160" class="about__lead">
          Caravan Chicken — jo'jalikdan dasturxoningizgacha bo'lgan barcha
          jarayonlarni to'liq nazorat qiluvchi kompaniya. Zamonaviy uskunalar,
          120+ tajribali mutaxassis va yiliga 3,5 milliondan ortiq bosh jo'ja
          yetishtirish quvvati bizga har bir mahsulotda barqaror sifatni
          ta'minlash imkonini beradi.
        </p>

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

      <div class="about__media">
        <img v-parallax="{ distance: 22, scale: 1.1 }" class="about__photo" :src="aboutImg" alt="Caravan Chicken ishlab chiqarish liniyasi" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  background: var(--cream);
  border-radius: 40px;
  overflow: hidden;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  align-items: center;
  gap: 56px;
}

.about__content {
  padding: 100px 0;
}

.about__title {
  margin: 16px 0 22px;
  max-width: 440px;
}

.about__lead {
  color: var(--muted);
  font-size: 16.5px;
  line-height: 1.7;
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
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 4px;
}

.feature__text {
  color: var(--muted);
  font-size: 15px;
}

.about__media {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50%;
}

.about__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

@media (max-width: 980px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .about__content {
    padding: 64px 0 40px;
  }

  .about__media {
    position: relative;
    width: 100%;
    height: 320px;
  }
}
</style>
