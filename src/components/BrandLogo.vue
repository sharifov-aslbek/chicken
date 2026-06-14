<script setup>
import logoDark from '../assets/images/logo-darker.png'
import logoWhite from '../assets/images/logo-white-text.png'

defineProps({
  light: { type: Boolean, default: false },
})
</script>

<template>
  <a href="#" class="brand" aria-label="Caravan Chicken">
    <img
      class="brand__img"
      :src="light ? logoWhite : logoDark"
      alt="Caravan Chicken"
    />
  </a>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
}

.brand__img {
  height: 38px;
  width: auto;
  display: block;
}
</style>
