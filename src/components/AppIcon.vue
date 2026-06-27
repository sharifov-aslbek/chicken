<script setup>
// Crisp inline SVG icons — colour follows `currentColor`, so size/colour
// are controlled entirely from CSS. Replaces the old raster PNG icons.
defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <!-- Telegram / paper plane -->
    <path
      v-if="name === 'telegram'"
      d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
      fill="currentColor"
    />

    <!-- Instagram -->
    <template v-else-if="name === 'instagram'">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8" />
      <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
    </template>

    <!-- Facebook -->
    <path
      v-else-if="name === 'facebook'"
      d="M13.5 21v-7h2.3l.4-2.9h-2.7V9.25c0-.84.26-1.4 1.46-1.4H16V5.26c-.27-.04-1.2-.12-2.27-.12-2.26 0-3.81 1.38-3.81 3.91v2.05H7.6V14h2.32v7h3.58z"
      fill="currentColor"
    />

    <!-- YouTube -->
    <path
      v-else-if="name === 'youtube'"
      d="M22.5 8.4a2.72 2.72 0 0 0-1.9-1.92C18.9 6 12 6 12 6s-6.9 0-8.6.48A2.72 2.72 0 0 0 1.5 8.4 28.4 28.4 0 0 0 1.02 12a28.4 28.4 0 0 0 .48 3.6 2.72 2.72 0 0 0 1.9 1.92C5.1 18 12 18 12 18s6.9 0 8.6-.48a2.72 2.72 0 0 0 1.9-1.92 28.4 28.4 0 0 0 .48-3.6 28.4 28.4 0 0 0-.48-3.6zM9.82 15.3V8.7L15.5 12l-5.68 3.3z"
      fill="currentColor"
    />

    <!-- Phone -->
    <path
      v-else-if="name === 'phone'"
      d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
      fill="currentColor"
    />

    <!-- Map pin -->
    <template v-else-if="name === 'pin'">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.8" />
    </template>

    <!-- Clock -->
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </template>
  </svg>
</template>

<style scoped>
.icon {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
