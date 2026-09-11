<script setup lang="ts">
import { siteConfig } from '@/config/site'
</script>

<template>
  <section class="w-full py-14 sm:py-20 md:py-24 border-b border-border-subtle" aria-label="Professional Experience">
    <div class="max-w-3xl">
      <!-- Label -->
      <p class="text-xs sm:text-sm tracking-[0.18em] uppercase text-accent-primary font-semibold mb-6">
        WHERE I DO THIS PROFESSIONALLY
      </p>

      <!-- Company & Role -->
      <div class="space-y-2 mb-6">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-content-main">
          Tata Consultancy Services
        </h2>
        <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-content-secondary font-medium">
          <span class="text-content-main">System Engineer</span>
          <span>·</span>
          <span>Apr 2024 – Present</span>
          <span>·</span>
          <span>Chennai, India</span>
        </div>
      </div>

      <!-- One short description only -->
      <p class="text-base sm:text-lg text-content-secondary leading-relaxed font-normal mb-8 max-w-2xl">
        Working across AI systems and backend engineering — building agentic retrieval pipelines alongside enterprise backend services, state management, and distributed systems.
      </p>

      <!-- Download Resume Action -->
      <div>
        <a
          :href="siteConfig.resume.url"
          :download="siteConfig.resume.downloadName"
          :aria-label="siteConfig.resume.ariaLabel"
          class="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-content-main hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded group"
        >
          <span>Download Resume</span>
          <span class="text-content-muted group-hover:text-accent-primary group-hover:translate-y-0.5 transition-transform">↓</span>
        </a>
      </div>
    </div>
  </section>
</template>
