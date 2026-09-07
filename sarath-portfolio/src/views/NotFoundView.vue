<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import { ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <div class="py-24 md:py-32 flex flex-col items-center justify-center text-center">
    <div class="font-mono text-xs text-accent-primary uppercase tracking-wider font-semibold mb-4">
      404 // ERROR
    </div>

    <h1 class="text-5xl sm:text-7xl font-bold tracking-tight text-content-main mb-4 font-mono">
      404
    </h1>

    <h2 class="text-2xl sm:text-3xl font-bold text-content-main mb-4">
      Page Not Found
    </h2>

    <p class="text-base sm:text-lg text-content-secondary max-w-md mb-8 leading-relaxed">
      The requested route does not exist or may have been relocated.
    </p>

    <div class="flex items-center gap-4">
      <AppButton to="/" variant="primary" size="md">
        <ArrowLeft class="w-4 h-4 mr-1.5" />
        <span>Return Home</span>
      </AppButton>
      <AppButton to="/projects" variant="outline" size="md">
        View Projects
      </AppButton>
    </div>
  </div>
</template>
