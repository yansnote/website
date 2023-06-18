<template>
  <main class="main">
    <header-comp />

    <router-view/>
  </main>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  components: {
    HeaderComp
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

:root {
  --base-color: #fcf3e6;
  --bold-color: #33342f;
  --teal-color: #52C1C5;
  --yellow-color: #FFC348;
  --orange-color: #F26E55;
  --blue-color: #4780BA;
}

body {
  color: var(--bold-color);
  font-size: 18px;
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;

  @media screen and (max-width: 720px) {
    margin: 0;
  }
}

.main {
  max-width: 980px;
  border: 2px solid var(--bold-color);
  border-radius: 2.5rem;
  background: var(--base-color);
  margin: 30px auto;
  padding: 30px 50px;
  box-sizing: border-box;

  @media screen and (max-width: 920px) {
    margin: auto;
    padding: 30px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px;
    margin: 0;
    border: none;
    border-radius: 0;
  }
}

</style>
