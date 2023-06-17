<template>
  <section class="jumbotron">
    <div class="biography">
      <h3 class="bio-pre">Hello! I am</h3>
      <h1 class="bio-name">Yan Naing</h1>

      <p>
        I am currently an assistant manager of a low-code automation team. I am also a freelance web developer, a husband and a father.
      </p>
    </div>

    <div class="face">
      <img src="../assets/YanNaing.jpg" alt="Yan Naing">
    </div>
  </section>

  <section class="hobbies">
    <h3 class="section-header">Some of My Hobbies</h3>

    <div class="hobby-body">
      <ChipComp
        v-for="(hobby, i) in hobbies"
        :key="i"
        :title="hobby.title"
        :icon="hobby.icon"
        :color="hobby.color"
      />
    </div>
  </section>
</template>

<script>
import ChipComp from '@/components/ChipComp.vue'

import CodeIcon from '@/assets/xml.svg'
import PhotographyIcon from '@/assets/camera-outline.svg'
import CoffeeIcon from '@/assets/coffee-outline.svg'
import WritingIcon from '@/assets/feather.svg'
import MovieIcon from '@/assets/television-classic.svg'
import GameIcon from '@/assets/gamepad-variant-outline.svg'
import CraftIcon from '@/assets/hammer-screwdriver.svg'
import TravelIcon from '@/assets/plane-car.svg'
import ReadIcon from '@/assets/book-open-page-variant-outline.svg'

export default {
  components: { ChipComp },
  data: () => {
    return {
      hobbies: [
        {
          icon: CodeIcon,
          title: 'Coding',
          color: 'var(--teal-color)'
        },
        {
          icon: PhotographyIcon,
          title: 'Photography',
          color: 'var(--yellow-color)'
        },
        {
          icon: GameIcon,
          title: 'Playing Games',
          color: 'var(--orange-color)'
        },
        {
          icon: MovieIcon,
          title: 'Watching Movies',
          color: 'var(--yellow-color)'
        },
        {
          icon: WritingIcon,
          title: 'Writing',
          color: 'var(--blue-color)'
        },
        {
          icon: ReadIcon,
          title: 'Reading',
          color: 'var(--base-color)'
        },
        {
          icon: CraftIcon,
          title: 'Crafting',
          color: 'var(--teal-color)'
        },
        {
          icon: CoffeeIcon,
          title: 'Brewing Coffee',
          color: 'var(--orange-color)'
        },
        {
          icon: TravelIcon,
          title: 'Travelling',
          color: 'var(--yellow-color)'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section-header {
  font-size: 1.82rem;
  text-align: center;
  margin-bottom: 40px;
}
.jumbotron {
    margin-top: 100px;
    display: grid;
    grid-template-columns: minmax(320px, 3fr) minmax(320px, 2fr);

    .biography {
      .bio-pre {
        padding: 0;
        margin: 0;
      }
      .bio-name {
        font-size: 3rem;
        margin: 0;
      }
    }

    .face {
      text-align: center;
      img {
        max-width: 75%;
        margin: 0 auto;
        border-radius: 30px;
        border: 2px solid var(--bold-color);
        box-shadow: 3px 3px 0 var(--bold-color);
        margin: 0 auto;
      }
    }
  }

  .hobbies {
    margin-top: 100px;

    .hobby-body {
      width: 82%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
  }
</style>
ChipComp
