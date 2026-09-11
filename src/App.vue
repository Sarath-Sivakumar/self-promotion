<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[var(--page-bg)] text-[var(--text-primary)] selection:bg-accent-primary/20 selection:text-accent-primary w-full transition-colors duration-150">
    <!-- Sticky Header -->
    <AppHeader />

    <!-- Main Viewport Container -->
    <main class="flex-grow w-full max-w-container mx-auto px-5 sm:px-6 md:px-8">
      <RouterView v-slot="{ Component }">
        <Transition
          enter-active-class="transition-opacity duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-150 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
