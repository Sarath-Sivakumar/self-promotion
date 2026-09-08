<script setup lang="ts">
import SocialLinks from '@/components/common/SocialLinks.vue'
import { MapPin, MessageSquare, ExternalLink, Mail } from 'lucide-vue-next'
import { GMAIL_COMPOSE_URL, EMAIL_ADDRESS } from '@/data/socials'
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium mb-3">
        GET IN TOUCH
      </div>
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6">
        Got something interesting in mind?
      </h1>
      <p class="text-lg sm:text-xl text-content-secondary max-w-3xl leading-relaxed">
        Whether you're building agents, wrestling with backend architecture, exploring AI systems, or just want to debate whether memory and world state are actually the same thing — my inbox is open.
      </p>
    </header>

    <!-- Main Contact Container -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 max-w-4xl">
      <!-- Left Column: Primary Contact Channels -->
      <div class="md:col-span-7 space-y-6">
        <h2 class="text-xl font-bold text-content-main mb-4">
          Direct Channels
        </h2>

        <!-- Primary Email CTA Button (Proper mailto, no target="_blank") -->
        <div class="p-6 rounded-card bg-gradient-to-br from-dark-card to-dark-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-200 shadow-card">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div>
              <span class="font-mono text-xs uppercase text-accent-primary font-semibold">Primary Contact</span>
              <h3 class="text-xl font-bold text-content-main mt-0.5">Email Me</h3>
            </div>
            <div class="p-2.5 rounded-lg bg-accent-muted text-accent-primary">
              <Mail class="w-5 h-5" />
            </div>
          </div>
          <p class="text-sm text-content-secondary mb-5">
            Send an email directly from your default mail client.
          </p>
          <a
            :href="`mailto:${EMAIL_ADDRESS}`"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-btn bg-accent-primary text-black font-semibold text-sm hover:bg-accent-primary/90 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Email me</span>
            <span class="font-mono text-xs opacity-75">({{ EMAIL_ADDRESS }})</span>
          </a>
        </div>

        <!-- Secondary Channels List: GitHub, LinkedIn -->
        <SocialLinks variant="list" />

        <!-- Open Gmail Web Action (Explicit Gmail in browser, with target="_blank") -->
        <div class="p-4 rounded-card bg-dark-card border border-border-subtle flex items-center justify-between gap-4">
          <div class="text-xs text-content-secondary">
            <span class="text-content-main font-medium">Prefer Gmail in browser?</span>
            <span class="hidden sm:inline text-content-muted"> Compose directly in Google Mail.</span>
          </div>
          <a
            :href="GMAIL_COMPOSE_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-dark-secondary hover:bg-dark-hover border border-border-subtle text-xs font-mono text-accent-primary hover:text-white transition-colors shrink-0"
          >
            <span>Open Gmail ↗</span>
            <ExternalLink class="w-3.5 h-3.5" />
          </a>
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
            <MessageSquare class="w-5 h-5 text-accent-secondary shrink-0 mt-0.5" />
            <div>
              <div class="text-sm font-bold text-content-main">Conversations</div>
              <div class="text-sm text-content-secondary">Always open to discussions about autonomous agent runtimes, LLMs, and backend system design.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
