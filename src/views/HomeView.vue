<script setup lang="ts">
import codingIcon from '@/assets/images/icons/coding.svg'
import photographyIcon from '@/assets/images/icons/photographing.svg'
import gamingIcon from '@/assets/images/icons/gaming.svg'
import travelingIcon from '@/assets/images/icons/traveling.svg'
import readingIcon from '@/assets/images/icons/reading.svg'
import brewingIcon from '@/assets/images/icons/brewing.svg'
import televisionIcon from '@/assets/images/icons/television.svg'
import writingIcon from '@/assets/images/icons/writing.svg'
import craftingIcon from '@/assets/images/icons/crafting.svg'

import Jumbotron from '@/components/home/Jumbotron.vue'

const hobbies = [
  {
    name: 'Coding',
    icon: codingIcon,
    color: 'yn-teal',
  },
  {
    name: 'Photography',
    icon: photographyIcon,
    color: 'yn-yellow',
  },
  {
    name: 'Playing Games',
    icon: gamingIcon,
    color: 'yn-orange',
  },
  {
    name: 'Watching Movies',
    icon: televisionIcon,
    color: 'yn-yellow',
  },
  {
    name: 'Writing',
    icon: writingIcon,
    color: 'yn-blue',
  },
  {
    name: 'Reading',
    icon: readingIcon,
    color: 'base',
  },
  {
    name: 'Crafting',
    icon: craftingIcon,
    color: 'yn-teal',
  },
  {
    name: 'Traveling',
    icon: travelingIcon,
    color: 'yn-orange',
  },
  {
    name: 'Brewing',
    icon: brewingIcon,
    color: 'yn-yellow',
  },
]
</script>

<template>
  <Jumbotron />

  <section class="w-full px-8 mt-18">
    <h3 class="text-2xl font-bold text-center">Some of My Hobbies</h3>

    <div class="flex flex-wrap gap-3 w-full md:w-3/5 mx-auto justify-center items-center mt-4">
      <div
        v-for="(item, i) in hobbies"
        :key="i"
        class="flex items-center gap-1 border-2 border-bold bg-white rounded-full p-1 pe-3"
      >
        <figure class="border-2 border-bold p-1 rounded-full" :class="'bg-' + item.color">
          <img :src="item.icon" :alt="item.name" class="size-6" />
        </figure>
        <span class="font-bold">{{ item.name }}</span>
      </div>
    </div>
  </section>
</template>
