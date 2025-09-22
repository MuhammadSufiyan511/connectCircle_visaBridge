<template>
  <div>
    <!-- Show Navbar only if NOT on Hero page -->
    <Navbar v-if="!isHeroPage" />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Adjust according to your hero page route path ("/" or "/landing")
const isHeroPage = computed(() => route.path === '/')
</script>
