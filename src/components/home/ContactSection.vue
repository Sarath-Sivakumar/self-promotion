<script setup lang="ts">
import { BUY_ME_A_COFFEE_URL, EMAIL_ADDRESS } from '@/data/socials'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full py-14 sm:py-20 md:py-28" aria-label="Contact">
    <div class="max-w-2xl space-y-6">
      <!-- Headline -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-content-main">
        Come say hi.
      </h2>

      <!-- Copy -->
      <p class="text-base sm:text-lg md:text-xl text-content-secondary leading-relaxed font-normal">
        Building something interesting, fighting an agent that refuses to behave, or just want to talk software?
        <br class="hidden sm:inline" />
        My inbox is open.
      </p>

      <!-- Primary Action -->
      <div class="pt-2">
        <a
          :href="`mailto:${EMAIL_ADDRESS}`"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-content-main text-[var(--page-bg)] font-semibold text-sm sm:text-base hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary group"
        >
          <span>Email me</span>
          <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <!-- Simple Inline Secondary Links (Not matching button cards!) -->
      <div class="pt-6 flex flex-wrap items-center gap-6 text-sm font-medium">
        <a
          href="https://github.com/Sarath-Sivakumar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
        >
          GitHub ↗
        </a>
        <span class="text-border-subtle">·</span>
        <a
          href="https://linkedin.com/in/sarath-sivakumar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
        >
          LinkedIn ↗
        </a>
        <span class="text-border-subtle">·</span>
        <a
          :href="BUY_ME_A_COFFEE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
        >
          Buy me a coffee ↗
        </a>
      </div>
    </div>
  </section>
</template>
