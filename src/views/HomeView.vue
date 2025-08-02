<script setup lang="ts">
// Import icons properly
import githubIcon from '@/assets/images/icons/github.svg'
import linkedinIcon from '@/assets/images/icons/linkedin.svg'
import twitterIcon from '@/assets/images/icons/twitter.svg'
import facebookIcon from '@/assets/images/icons/facebook.svg'
import profileImage from '@/assets/images/YanNaing.jpg'

import codingIcon from '@/assets/images/icons/coding.svg'
import photographyIcon from '@/assets/images/icons/photographing.svg'
import gamingIcon from '@/assets/images/icons/gaming.svg'
import travelingIcon from '@/assets/images/icons/traveling.svg'
import readingIcon from '@/assets/images/icons/reading.svg'
import brewingIcon from '@/assets/images/icons/brewing.svg'
import televisionIcon from '@/assets/images/icons/television.svg'
import writingIcon from '@/assets/images/icons/writing.svg'
import craftingIcon from '@/assets/images/icons/crafting.svg'

const socials = [
  {
    name: 'GitHub',
    icon: githubIcon,
    link: 'https://github.com/Mr-Zer0',
    color: 'yn-blue',
  },
  {
    name: 'LinkedIn',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/ynaing',
    color: 'yn-yellow',
  },
  {
    name: 'Twitter',
    icon: twitterIcon,
    link: 'https://twitter.com/Mr_YanNaing',
    color: 'yn-teal',
  },
  {
    name: 'Facebook',
    icon: facebookIcon,
    link: 'https://www.facebook.com/yn.zero',
    color: 'yn-orange',
  },
]

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
  <section class="w-full px-8 mt-8 flex justify-between items-start gap-3">
    <!-- This div ensures Tailwind generates the custom bg-yn-* classes -->
    <div class="bg-yn-blue bg-yn-yellow bg-yn-teal bg-yn-orange bg-base hidden"></div>
    <div>
      <h3 class="text-xl font-bold">Hello! I am</h3>
      <h3 class="text-5xl font-bold">Yan Naing</h3>
      <p class="mt-2">
        I am currently a power platform consultant at United Nations ESCAP. I am also a freelance
        web developer, a husband and a father.
      </p>
      <div class="mt-3">
        <a
          v-for="(item, i) in socials"
          :key="i"
          :href="item.link"
          class="inline-flex items-center mr-4 p-1 rounded-full border-2 border-bold"
          :class="'bg-' + item.color"
        >
          <img :src="item.icon" :alt="item.name" class="size-7" />
        </a>
      </div>
    </div>

    <figure class="w-1/2 max-w-3xs rounded-2xl overflow-hidden border-2 border-bold">
      <img :src="profileImage" alt="Yan Naing" class="w-full" />
    </figure>
  </section>

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
