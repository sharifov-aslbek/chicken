<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ProductsSection />
    <WhyUsSection />
    <ProcessSection />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
