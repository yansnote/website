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
    <h3>Some of My Hobbies</h3>

    <div class="hobby-body">
      <chip-comp title="Testing" />
    </div>
  </section>
</template>

<script>
import ChipComp from '@/components/ChipComp.vue'

export default {
  components: { ChipComp }
}
</script>

<style lang="scss" scoped>
  .jumbotron {
    margin-top: 80px;
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
    margin-top: 80px;
  }
</style>
ChipComp
