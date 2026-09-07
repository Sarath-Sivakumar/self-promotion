<script setup lang="ts">
import SocialLinks from '@/components/common/SocialLinks.vue'
import { MapPin, Clock } from 'lucide-vue-next'
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium mb-3">
        GET IN TOUCH
      </div>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6">
        Contact
      </h1>
      <p class="text-xl sm:text-2xl text-content-secondary max-w-3xl leading-relaxed">
        Want to talk about AI systems, autonomous agents, backend engineering or interesting software problems?
      </p>
    </header>

    <!-- Main Contact Container -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 max-w-4xl">
      <!-- Left Column: Primary Contact Channels -->
      <div class="md:col-span-7 space-y-6">
        <h2 class="text-xl font-bold text-content-main mb-4">
          Direct Channels
        </h2>

        <!-- Render verified social links list -->
        <SocialLinks variant="list" />

        <div class="p-6 rounded-card bg-dark-card border border-border-subtle space-y-2">
          <div class="text-xs font-mono text-accent-primary font-semibold">
            RESPONSE TIMEFRAME
          </div>
          <p class="text-sm text-content-secondary leading-relaxed">
            I typically respond within 24–48 hours for engineering inquiries, collaboration discussions, and technical conversations.
          </p>
        </div>
      </div>

      <!-- Right Column: Location & Context -->
      <div class="md:col-span-5 space-y-6">
        <h2 class="text-xl font-bold text-content-main mb-4">
          Location & Context
        </h2>

        <div class="p-6 rounded-card bg-dark-card border border-border-subtle space-y-4">
          <div class="flex items-start gap-3">
            <MapPin class="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
            <div>
              <div class="text-sm font-bold text-content-main">Location</div>
              <div class="text-sm text-content-secondary">Chennai, India (IST / UTC+5:30)</div>
            </div>
          </div>

          <div class="flex items-start gap-3 pt-4 border-t border-border-subtle/50">
            <Clock class="w-5 h-5 text-accent-secondary shrink-0 mt-0.5" />
            <div>
              <div class="text-sm font-bold text-content-main">Working Mode</div>
              <div class="text-sm text-content-secondary">Open to global discussions on agentic AI & backend architectures.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
