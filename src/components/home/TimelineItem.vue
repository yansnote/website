<script setup lang="ts">
import { computed, defineProps } from 'vue'
import EventIcon from '@/assets/images/icons/event.svg'
import AchievementIcon from '@/assets/images/icons/achievement.svg'
import EducationIcon from '@/assets/images/icons/education.svg'
import JobIcon from '@/assets/images/icons/job.svg'
import { Timestamp } from 'firebase/firestore'

const props = withDefaults(
  defineProps<{
    date: Date | Timestamp
    description: string
    type: string
    rail?: boolean
  }>(),
  {
    rail: true,
  },
)

const color = computed(() => {
  switch (props.type) {
    case 'life-event':
      return 'bg-yn-orange'
    case 'education':
      return 'bg-yn-yellow'
    case 'achievement':
      return 'bg-yn-blue'
    case 'job':
      return 'bg-yn-teal'
    default:
      return 'bg-gray-200'
  }
})

const icon = computed(() => {
  switch (props.type) {
    case 'life-event':
      return EventIcon
    case 'education':
      return EducationIcon
    case 'achievement':
      return AchievementIcon
    case 'job':
      return JobIcon
    default:
      return ''
  }
})

const eventDate = computed(() => {
  const dateObj = props.date instanceof Timestamp ? props.date.toDate() : new Date(props.date)

  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>

<style scoped>
.rail {
  position: absolute;
  width: 2px;
  background-color: #ccc;
  height: calc(100% - 26px);
  top: 35px;
  left: 15px;
}
</style>

<template>
  <div class="flex items-start gap-4 relative">
    <div v-if="rail" class="rail"></div>
    <img
      :src="icon"
      alt="Timeline Icon"
      class="size-8 p-1 border-2 border-bold rounded-full"
      :class="color"
    />
    <div class="border-2 border-bold rounded-2xl py-2 px-4 bg-white">
      <h4 class="text-sm text-gray-500 font-bold">{{ eventDate }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
