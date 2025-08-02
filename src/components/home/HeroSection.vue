<script setup lang="ts">
import githubIcon from '@/assets/images/icons/github.svg'
import linkedinIcon from '@/assets/images/icons/linkedin.svg'
import twitterIcon from '@/assets/images/icons/twitter.svg'
import facebookIcon from '@/assets/images/icons/facebook.svg'
import profileImage from '@/assets/images/YanNaing.jpg'

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
</script>

<template>
  <div class="flex justify-between items-start gap-3">
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
  </div>
</template>
