<template>
  <main>
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

main {
  width: 980px;
  border: 2px solid #33342f;
  border-radius: 2.5rem;
  background: #FCF3E6;
  margin: 30px auto;
  padding: 30px;
}

</style>
