import { defineStore } from 'pinia'

import { ref } from 'vue'
import FirestoreService from '@/firebase/firestore'
import { type TimelineType } from '@/types/Contracts'

export const useTimelineStore = defineStore('timeline', () => {
  const timeline = ref<TimelineType[]>([])

  async function fetchTimeline() {
    console.info('Fetching timeline data...')
    try {
      const timelineData = await FirestoreService.getCollection('timeline')
      timeline.value = (timelineData as TimelineType[]).map((item) => ({
        id: item.id,
        type: item.type,
        description: item.description,
        date: item.date,
      }))
    } catch (error) {
      console.error('Error fetching timeline data:', error)
    }
  }

  fetchTimeline()

  return { timeline }
})
