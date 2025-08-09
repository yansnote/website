import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { InfoType } from '@/types/Contracts'
import FirestoreService from '@/firebase/firestore'

export const useInfoStore = defineStore('info', () => {
  const info = ref<InfoType[]>([])

  const hobbies = computed(() => {
    return info.value
      .filter((item) => item.type === 'hobby')
      .map((item) => {
        return { id: item.id, name: item.name || '' }
      })
  })

  const socials = computed(() => {
    return info.value
      .filter((item) => item.type === 'social')
      .map((item) => {
        return {
          id: item.id,
          name: item.name || '',
          link: item.link || '',
        }
      })
  })

  async function fetchInfo() {
    console.info('Fetching info data...')
    try {
      const infoData = await FirestoreService.getCollection('info')
      info.value = (infoData as InfoType[]).map((item) => ({
        id: item.id,
        type: item.type,
        name: item.name,
        description: item.description,
        link: item.link,
      }))
    } catch (error) {
      console.error('Error fetching info data:', error)
    }
  }

  fetchInfo()

  return { info, hobbies, socials }
})
