<script setup lang="ts"></script>

<template>
  <div class="public-layout">
    <header class="bg-blue-600 text-white p-4">
      <nav class="flex gap-4">
        <router-link to="/" class="hover:text-blue-200">Home</router-link>
      </nav>
    </header>

    <main class="p-4">
      <router-view />
    </main>

    <footer class="bg-gray-100 p-4 text-center text-gray-600 mt-8">
      <p>© 2025 YansNote - Public Area</p>
    </footer>
  </div>
</template>
