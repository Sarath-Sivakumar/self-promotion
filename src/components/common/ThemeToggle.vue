<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { Sun, Moon } from 'lucide-vue-next'

const { currentTheme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    :aria-label="currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    class="w-10 h-10 inline-flex items-center justify-center p-0 bg-transparent border-0 text-content-secondary hover:text-content-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded transition-colors cursor-pointer select-none"
    @click="toggleTheme"
  >
    <!-- CURRENT = LIGHT -> show MOON icon -->
    <Moon
      v-if="currentTheme === 'light'"
      class="w-4 h-4 sm:w-[18px] sm:h-[18px]"
    />
    <!-- CURRENT = DARK -> show SUN icon -->
    <Sun
      v-else
      class="w-4 h-4 sm:w-[18px] sm:h-[18px]"
    />
  </button>
</template>
