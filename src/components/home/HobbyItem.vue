<script setup lang="ts">
import { computed, defineProps } from 'vue'

import codingIcon from '@/assets/images/icons/coding.svg'
import photographyIcon from '@/assets/images/icons/photographing.svg'
import gamingIcon from '@/assets/images/icons/gaming.svg'
import travelingIcon from '@/assets/images/icons/traveling.svg'
import readingIcon from '@/assets/images/icons/reading.svg'
import brewingIcon from '@/assets/images/icons/brewing.svg'
import televisionIcon from '@/assets/images/icons/television.svg'
import writingIcon from '@/assets/images/icons/writing.svg'
import craftingIcon from '@/assets/images/icons/crafting.svg'

const props = defineProps<{
  name: string
}>()

// Temporary solution: need to save in Firestore
const colors = ['yn-teal', 'yn-yellow', 'yn-orange', 'yn-blue', 'base']
const color = computed(() => {
  return colors[Math.floor(Math.random() * colors.length)]
})

// Temporary solution : need to save in Firestore
const icon = computed(() => {
  const name = props.name.toLowerCase()
  switch (name) {
    case 'coding':
      return codingIcon
    case 'photography':
      return photographyIcon
    case 'playing games':
      return gamingIcon
    case 'travelling':
      return travelingIcon
    case 'reading':
      return readingIcon
    case 'brewing coffee':
      return brewingIcon
    case 'watching movies':
      return televisionIcon
    case 'writing':
      return writingIcon
    case 'crafting':
      return craftingIcon
    default:
      return ''
  }
})
</script>
<template>
  <div class="flex items-center gap-1 border-2 border-bold bg-white rounded-full p-1 pe-3">
    <figure class="border-2 border-bold p-1 rounded-full" :class="'bg-' + color">
      <img :src="icon" :alt="name" class="size-6" />
    </figure>
    <span class="font-bold">{{ name }}</span>
  </div>
</template>
