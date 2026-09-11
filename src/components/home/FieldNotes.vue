<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'

interface FieldNote {
  slug: string
  title: string
  description: string
  status: string
}

const notes: FieldNote[] = [
  {
    slug: 'why-ai-agents-need-world-state',
    title: 'Why AI Agents Need World State',
    description: 'Memory tells an agent what happened. World state tells it what is actually true right now.',
    status: 'Draft / In Progress'
  },
  {
    slug: 'planner-vs-harness',
    title: 'Planner vs Harness: Where Should Agent Intelligence Live?',
    description: 'How much should we trust the model, and how much should the surrounding software control?',
    status: 'Draft / In Progress'
  }
]
</script>

<template>
  <section class="w-full py-14 sm:py-20 md:py-24 border-b border-border-subtle" aria-label="Field Notes">
    <!-- Header -->
    <div class="max-w-3xl mb-12 sm:mb-16">
      <p class="text-xs sm:text-sm tracking-[0.18em] uppercase text-accent-primary font-semibold mb-2">
        NOTES FROM THE RABBIT HOLE
      </p>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content-main">
        Things that usually make more sense after I've broken them once.
      </h2>
    </div>

    <!-- Maximum Two Typography-Led Editorial Previews -->
    <div class="space-y-6 sm:space-y-8 max-w-4xl">
      <article
        v-for="note in notes"
        :key="note.slug"
        class="group p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all"
      >
        <RouterLink
          :to="`/blog/${note.slug}`"
          class="block space-y-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
        >
          <div class="flex items-center justify-between text-xs text-content-muted">
            <span class="inline-flex items-center gap-1.5 font-medium text-accent-primary">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
              {{ note.status }}
            </span>
            <ArrowUpRight class="w-4 h-4 text-content-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-content-main group-hover:text-accent-primary transition-colors tracking-tight">
            {{ note.title }}
          </h3>

          <p class="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
            {{ note.description }}
          </p>
        </RouterLink>
      </article>
    </div>

    <!-- Section Outro CTA: View all notes -->
    <div class="mt-12 sm:mt-16 text-center sm:text-left">
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-content-main hover:text-accent-primary transition-colors group"
      >
        <span>View all notes</span>
        <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </RouterLink>
    </div>
  </section>
</template>
