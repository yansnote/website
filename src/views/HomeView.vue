<script setup lang="ts">
import profileImage from '@/assets/images/YanNaing.jpg'
import SocialItem from '@/components/home/SocialItem.vue'
import HobbyItem from '@/components/home/HobbyItem.vue'
import TimelineItem from '@/components/home/TimelineItem.vue'

import { useInfoStore } from '@/stores/info'
import { useTimelineStore } from '@/stores/timeline'

import { computed } from 'vue'

const infoStore = useInfoStore()
const timelineStore = useTimelineStore()

const socials = computed(() => infoStore.socials)
const hobbies = computed(() => infoStore.hobbies)
const timeline = computed(() => timelineStore.timeline)
</script>

<template>
  <section class="w-full px-5 md:px-8 mt-8">
    <div class="flex justify-between items-start gap-5">
      <div>
        <h3 class="text-xl font-bold">Hello! I am</h3>
        <h3 class="text-5xl font-bold">Yan Naing</h3>
        <p class="mt-2">
          I am currently a power platform consultant at United Nations ESCAP. I am also a freelance
          web developer, a husband and a father.
        </p>
        <div class="mt-3">
          <SocialItem v-for="(item, i) in socials" :key="i" :name="item.name" :link="item.link!" />
        </div>
      </div>

      <figure class="w-1/2 max-w-3xs rounded-2xl overflow-hidden border-2 border-bold">
        <img :src="profileImage" alt="Yan Naing" class="w-full" />
      </figure>
    </div>
  </section>

  <section class="w-full px-5 md:px-8 mt-18">
    <h3 class="text-2xl font-bold text-center">Some of My Hobbies</h3>

    <div class="flex flex-wrap gap-3 w-full md:w-3/5 mx-auto justify-center items-center mt-4">
      <HobbyItem v-for="(item, i) in hobbies" :key="i" :name="item.name" />
    </div>
  </section>

  <section class="w-full px-5 md:px-8 py-18">
    <h3 class="text-2xl font-bold text-center">My Timeline and Life Events</h3>

    <div class="mt-4 space-y-3">
      <TimelineItem
        v-for="(item, i) in timeline"
        :key="item.id"
        :date="item.date"
        :description="item.description"
        :type="item.type"
        :rail="i !== timeline.length - 1"
      />
    </div>
  </section>
</template>
