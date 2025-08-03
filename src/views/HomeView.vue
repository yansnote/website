<script setup lang="ts">
import { Timestamp } from 'firebase/firestore'
import FirestoreService from '@/firebase/firestore'

import HeroSection from '@/components/home/HeroSection.vue'
import HobbySection from '@/components/home/HobbySection.vue'

import TimelineItem from '@/components/home/TimelineItem.vue'

import { onMounted, ref } from 'vue'

interface TimelineItemType {
  id: string
  type: string
  description: string
  date: Timestamp
}

const timeline = ref<TimelineItemType[]>([])

const fetchData = async () => {
  try {
    const [timelineData, hobbies] = await Promise.all([
      FirestoreService.getCollection('timeline', [FirestoreService.orderBy('date', 'desc')]),
      FirestoreService.getCollection('info', [FirestoreService.where('type', '==', 'hobby')]),
    ])

    timeline.value = (timelineData as TimelineItemType[]).map((item) => ({
      id: item.id,
      type: item.type,
      description: item.description,
      date: item.date,
    }))

    console.log('Hobbies:', hobbies)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <section class="w-full px-8 mt-8">
    <HeroSection />
  </section>

  <section class="w-full px-8 mt-18">
    <HobbySection />
  </section>

  <section class="w-full px-8 my-18">
    <h3 class="text-2xl font-bold text-center">My Timeline and Life Events</h3>

    <div class="mt-4 space-y-3">
      <TimelineItem
        v-for="item in timeline"
        :key="item.id"
        :date="item.date"
        :description="item.description"
        :type="item.type"
      />
    </div>
  </section>
</template>
