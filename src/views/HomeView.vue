<script setup lang="ts">
import { Timestamp } from 'firebase/firestore'
import FirestoreService from '@/firebase/firestore'

import HobbySection from '@/components/home/HobbySection.vue'

import SocialItem from '@/components/home/SocialItem.vue'
import TimelineItem from '@/components/home/TimelineItem.vue'

import profileImage from '@/assets/images/YanNaing.jpg'

import { computed, onMounted, ref } from 'vue'

interface TimelineItemType {
  id: string
  type: string
  description: string
  date: Timestamp
}

interface InfoType {
  id: string
  type: string
  name: string
  link: string | null
}

const timeline = ref<TimelineItemType[]>([])
const infos = ref<InfoType[]>([])

const socials = computed(() => infos.value.filter((info) => info.type === 'social'))
const hobbies = computed(() => infos.value.filter((info) => info.type === 'hobby'))

const fetchData = async () => {
  try {
    const [timelineData, info] = await Promise.all([
      FirestoreService.getCollection('timeline', [FirestoreService.orderBy('date', 'desc')]),
      FirestoreService.getCollection('info'),
    ])

    timeline.value = (timelineData as TimelineItemType[]).map((item) => ({
      id: item.id,
      type: item.type,
      description: item.description,
      date: item.date,
    }))

    infos.value = (info as InfoType[]).map((item) => ({
      id: item.id,
      type: item.type,
      name: item.name,
      link: item.link,
    }))

    console.log('Info:', infos.value)
    console.log('Socials:', socials.value)
    console.log('Hobbies:', hobbies.value)
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
