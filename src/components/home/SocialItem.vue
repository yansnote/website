<script setup lang="ts">
import { computed, defineProps } from 'vue'

import GithubIcon from '@/assets/images/icons/github.svg'
import LinkedInIcon from '@/assets/images/icons/linkedin.svg'
import XIcon from '@/assets/images/icons/twitter.svg'
import FacebookIcon from '@/assets/images/icons/facebook.svg'

const props = defineProps<{
  name: string
  link: string
}>()

const icon = computed(() => {
  switch (props.name) {
    case 'Github':
      return GithubIcon
    case 'LinkedIn':
      return LinkedInIcon
    case 'X':
      return XIcon
    case 'Facebook':
      return FacebookIcon
    default:
      return ''
  }
})

const color = computed(() => {
  switch (props.name) {
    case 'Github':
      return 'yn-blue'
    case 'LinkedIn':
      return 'yn-yellow'
    case 'X':
      return 'yn-teal'
    case 'Facebook':
      return 'yn-orange'
    default:
      return ''
  }
})
</script>
<template>
  <a
    :href="link"
    class="inline-flex items-center mr-4 p-1 rounded-full border-2 border-bold"
    :class="'bg-' + color"
  >
    <img :src="icon" :alt="name" class="size-7" />
  </a>
</template>
