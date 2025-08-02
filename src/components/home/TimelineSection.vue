<script setup lang="ts">
import EventIcon from '@/assets/images/icons/event.svg'
import AchievementIcon from '@/assets/images/icons/achievement.svg'

const timeline = [
  {
    event: 'achievement',
    date: '2023-01-01',
    description: 'Started my journey in web development.',
    color: 'bg-yn-blue',
    icon: AchievementIcon,
  },
  {
    event: 'life',
    date: '2023-01-01',
    description: 'Hello World!',
    color: 'bg-yn-teal',
    icon: EventIcon,
  },
]
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
  <h3 class="text-2xl font-bold text-center">My Timeline and Life Events</h3>

  <div class="mt-4 space-y-3">
    <div v-for="(item, i) in timeline" :key="i" class="flex items-start gap-4 relative">
      <div class="rail"></div>
      <figure class="p-1 border-2 border-bold rounded-full" :class="item.color">
        <img :src="item.icon" alt="Timeline Icon" class="size-5 mx-auto" />
      </figure>
      <div class="border-2 border-bold rounded-2xl py-2 px-4 bg-white">
        <h4 class="text-sm text-gray-500 font-bold">{{ item.date }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
