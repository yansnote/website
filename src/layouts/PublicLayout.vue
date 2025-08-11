<script setup lang="ts"></script>

<template>
  <div class="w-full md:py-3 md:px-5">
    <div class="bg-yn-orange bg-yn-blue bg-yn-teal bg-yn-yellow bg-base hidden"></div>

    <div
      class="w-full max-w-4xl mx-auto md:border-2 border-(--bold-color) bg-(--base-color) md:rounded-4xl"
    >
      <header class="flex justify-between items-center py-8 px-5 md:px-8">
        <router-link to="/" class="flex items-center size-12">
          <img src="/Logo.svg" alt="YansNote Logo" />
        </router-link>
        <nav class="flex gap-3">
          <router-link
            to="/"
            class="px-2 text-yn-yellow border-b-2 border-transparent hover:border-yn-yellow"
            exact-active-class="border-yn-yellow hover:cursor-default"
            >Me</router-link
          >
          <router-link
            to="/portfolio"
            class="px-2 text-yn-teal border-b-2 border-transparent hover:border-yn-teal"
            active-class="border-yn-teal hover:cursor-default"
            >Portfolio</router-link
          >
          <a
            href="https://mhatsuto.com/author/0/"
            class="text-yn-orange border-b-2 border-transparent hover:border-yn-orange"
            >Blog</a
          >
        </nav>
      </header>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
