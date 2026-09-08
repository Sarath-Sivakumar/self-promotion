<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { ArrowRight } from 'lucide-vue-next'

const focusItems = [
  {
    category: 'BUILDING',
    content: 'Autonomous AI systems and the infrastructure around them.',
    accent: 'text-accent-primary'
  },
  {
    category: 'LEARNING',
    content: 'How models, runtimes and distributed systems behave when things stop being ideal.',
    accent: 'text-accent-secondary'
  },
  {
    category: 'STUDYING',
    content: 'MSc Artificial Intelligence',
    accent: 'text-blue-400'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 border-b border-border-subtle" aria-label="Current Focus">
    <SectionHeading
      eyebrow="CURRENT STATUS"
      title="Currently"
      description="Active engineering focus, research themes, and academic pursuits."
    />

    <div class="space-y-4 max-w-3xl">
      <div
        v-for="item in focusItems"
        :key="item.category"
        class="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-card bg-dark-card border border-border-subtle gap-2 sm:gap-6"
      >
        <div class="font-mono text-xs tracking-wider font-semibold" :class="item.accent">
          {{ item.category }}
        </div>
        <div class="text-sm sm:text-base text-content-main font-medium sm:text-right">
          {{ item.content }}
        </div>
      </div>
    </div>

    <div class="mt-8">
      <RouterLink
        to="/now"
        class="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-white transition-colors group"
      >
        <span>See what I'm doing now</span>
        <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </RouterLink>
    </div>
  </section>
</template>
