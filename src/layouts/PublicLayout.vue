<script setup lang="ts"></script>

<template>
  <div class="w-full md:py-3 md:px-5">
    <div
      class="w-full max-w-4xl mx-auto md:border-2 border-(--bold-color) bg-(--base-color) rounded-4xl"
    >
      <header class="flex justify-between items-center p-8">
        <router-link to="/" class="flex items-center size-12">
          <img src="/Logo.svg" alt="YansNote Logo" />
        </router-link>
        <nav class="flex gap-4">
          <router-link to="/" class="hover:text-blue-200">Home</router-link>
        </nav>
      </header>

      <main>
        <router-view />
      </main>

      <footer class="bg-gray-100 p-4 text-center text-gray-600 mt-8">
        <p>© 2025 YansNote - Public Area</p>
      </footer>
    </div>
  </div>
</template>
