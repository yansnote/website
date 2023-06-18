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

  <section class="timeline-section">
    <h3 class="section-header">My Timeline and Life Events</h3>

    <div class="timeline-wrapper">
      <div class="timeline-body">
        <TimelineComp
          v-for="(value, i) in timeline"
          :key="i"
          :title="value.title"
          :date="value.date"
          :icon="value.icon"
          :color="value.color"
          class="timeline-item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ChipComp from '@/components/ChipComp.vue'
import TimelineComp from '@/components/TimelineComp.vue'

import CodeIcon from '@/assets/hobbies/xml.svg'
import PhotographyIcon from '@/assets/hobbies/camera-outline.svg'
import CoffeeIcon from '@/assets/hobbies/coffee-outline.svg'
import WritingIcon from '@/assets/hobbies/feather.svg'
import MovieIcon from '@/assets/hobbies/television-classic.svg'
import GameIcon from '@/assets/hobbies/gamepad-variant-outline.svg'
import CraftIcon from '@/assets/hobbies/hammer-screwdriver.svg'
import TravelIcon from '@/assets/hobbies/plane-car.svg'
import ReadIcon from '@/assets/hobbies/book-open-page-variant-outline.svg'

import LifeIcon from '@/assets/timeline/flag-checkered.svg'
import EduIcon from '@/assets/timeline/school-outline.svg'
import CareerIcon from '@/assets/timeline/account-tie-outline.svg'
import MedalIcon from '@/assets/timeline/seal.svg'

export default {
  components: {
    ChipComp,
    TimelineComp
  },
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
      ],
      timeline: [
        {
          date: "2022 October 08",
          icon: LifeIcon,
          title: "Became a father",
          color: "var(--orange-color)"
        },
        {
          date: "2021 December 15",
          icon: LifeIcon,
          title: "Founded a family with Thida Aye",
          color: "var(--orange-color)"
        },
        {
          date: "2021 July 28",
          icon: CareerIcon,
          title: "Started working as Low-Code Automation Developer at Hana Microfinance",
          color: "var(--teal-color)"
        },
        {
          date: "2020 January 18",
          icon: EduIcon,
          title: "Got DMA (Diploma of Management Administration) from Yangon University of Economics",
          color: "var(--yellow-color)"
        },
        {
          date: "2018 November 12",
          icon: CareerIcon,
          title: "Started working as Business Analyst at Hana Microfinance",
          color: "var(--teal-color)"
        },
        {
          date: "2017 December 23",
          icon: EduIcon,
          title: "Got DTSM (Diploman in Tourism Management and Studies) from National Management Degree Collage",
          color: "var(--yellow-color)"
        },
        {
          date: "2017 July 01",
          icon: CareerIcon,
          title: "Changed career as Tour Operator at Croton Travles and Tour",
          color: "var(--teal-color)"
        },
        {
          date: "2014 October, 01",
          icon: CareerIcon,
          title: "Founded HEXCORES Web Development Team",
          color: "var(--teal-color)"
        },
        {
          date: "2014 March, 16",
          icon: MedalIcon,
          title: "Won the prize at Code for Change Myanmar Hackathon (Firstever hackathon held in Myanmar)",
          color: "var(--blue-color)"
        },
        {
          date: "2011 September, 01",
          icon: CareerIcon,
          title: "Started carrier life as a web developer at Myanmar Links",
          color: "var(--teal-color)"
        },
        {
          date: "2011 February, 01",
          icon: EduIcon,
          title: "Got B.A degree from Yadanabon University",
          color: "var(--yellow-color)"
        },
        {
          date: "2006",
          icon: EduIcon,
          title: "Finished basic education student life",
          color: "var(--yellow-color)"
        },
        {
          date: "1991 February, 12",
          icon: LifeIcon,
          title: "Hello World!",
          color: "var(--orange-color)"
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
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  @media screen and (max-width: 720px) {
    margin-top: 80px;
    gap: 80px;
  }

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
      max-width: 60%;
      margin: 0 auto;
      border-radius: 30px;
      border: 2px solid var(--bold-color);
      box-shadow: 3px 3px 0 var(--bold-color);
      margin: 0 auto;
    }
  }
}

.hobbies {
  margin-top: 150px;

  .hobby-body {
    width: 82%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
}

.timeline-section {
  margin-top: 150px;

  .timeline-wrapper {
    display: flex;
    justify-content: center;
    .timeline-body {
      display: inline-block;

      .timeline-item {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
ChipComp
