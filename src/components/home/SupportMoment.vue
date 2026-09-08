<script setup lang="ts">
import { Coffee, ArrowUpRight } from 'lucide-vue-next'
import { BUY_ME_A_COFFEE_URL } from '@/data/socials'
</script>

<template>
  <section class="py-16 md:py-24 border-b border-border-subtle" aria-label="Support the Work">
    <div class="p-8 sm:p-10 md:p-12 lg:p-14 rounded-card bg-dark-card border border-border-subtle relative overflow-hidden transition-all duration-300 hover:border-border-hover shadow-card">
      <!-- Ambient subtle background glow with touch of warm yellow and violet -->
      <div
        class="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style="background: radial-gradient(circle, rgba(255, 221, 0, 0.25) 0%, rgba(124, 140, 255, 0.15) 50%, transparent 70%);"
      ></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        <!-- Left Column: Copy & Action (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <!-- Eyebrow with tiny yellow accent -->
          <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-primary font-medium">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FFDD00]"></span>
            <span>FUEL THE NEXT RABBIT HOLE</span>
          </div>

          <!-- Headline -->
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content-main leading-tight">
            Enjoying the adventure so far?
          </h2>

          <!-- Body -->
          <div class="space-y-4 text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl">
            <p>
              I spend a slightly unreasonable amount of time exploring AI systems, agents, backends, architecture and ideas that were definitely supposed to be simple.
            </p>
            <p>
              If something I've built, written or learned along the way helped you, you can always fuel the next experiment with a coffee.
            </p>
          </div>

          <!-- CTA and Subtext -->
          <div class="pt-2 space-y-3">
            <div>
              <a
                :href="BUY_ME_A_COFFEE_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[44px] rounded-btn bg-dark-secondary hover:bg-dark-hover text-content-main border border-border-subtle hover:border-[#FFDD00]/40 font-medium text-sm sm:text-base transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary select-none active:translate-y-px"
                aria-label="Buy me a coffee on BuyMeACoffee.com (opens in new tab)"
              >
                <Coffee class="w-5 h-5 text-[#FFDD00] transition-transform duration-200 group-hover:-rotate-12 group-hover:scale-110" />
                <span>Buy me a coffee</span>
                <ArrowUpRight class="w-4 h-4 text-content-muted group-hover:text-content-main transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p class="text-xs font-mono text-content-muted leading-relaxed">
              No subscriptions. No dramatic funding pitch. Just coffee → experiments → more things to write about.
            </p>
          </div>
        </div>

        <!-- Right Column: Subtle engineering personality box (5 cols) -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <div class="p-6 sm:p-7 rounded-2xl bg-dark-bg/70 border border-border-subtle space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-border-subtle/50">
              <div class="flex items-center gap-2 font-mono text-xs text-content-muted">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>EXPERIMENTAL RUNTIME</span>
              </div>
              <Coffee class="w-4 h-4 text-[#FFDD00]/80" />
            </div>

            <div class="font-mono text-xs sm:text-sm text-content-secondary space-y-2">
              <p class="text-content-muted">
                // Canonical engineering lifecycle
              </p>
              <p class="text-content-main font-medium italic">
                “Most projects begin with: &lsquo;This should be simple.&rsquo;”
              </p>
              <p class="text-accent-primary">
                History has been uncooperative.
              </p>
            </div>

            <div class="pt-3 border-t border-border-subtle/40 flex items-center justify-between text-[11px] font-mono text-content-muted">
              <span>SARATH SIVAKUMAR</span>
              <span>CHENNAI, IN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
