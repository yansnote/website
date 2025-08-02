<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import HobbySection from '@/components/home/HobbySection.vue'
import TimelineSection from '@/components/home/TimelineSection.vue'
</script>

<template>
  <section class="w-full px-8 mt-8">
    <HeroSection />
  </section>

  <section class="w-full px-8 mt-18">
    <HobbySection />
  </section>

  <section class="w-full px-8 my-18">
    <TimelineSection />
  </section>
</template>
