<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'
import sarathPortrait from '@/assets/images/sarath.webp'
import { ArrowDown } from 'lucide-vue-next'

const scrollToNext = () => {
  const element = document.getElementById('featured-projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    class="relative min-h-[82vh] lg:min-h-[86vh] flex flex-col justify-between pt-8 pb-8 sm:pt-12 sm:pb-12 border-b border-border-subtle"
    aria-label="Introduction Hero"
  >
    <!-- Main Content: Two-Column Hero on Desktop (>= 1024px) -->
    <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center my-auto">
      
      <!-- Left Column (55-60% on desktop: 7 cols of 12) -->
      <div class="lg:col-span-7 flex flex-col justify-center text-left">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm tracking-wider uppercase text-accent-primary font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
          <span>AI SYSTEMS ENGINEER · CHENNAI, INDIA</span>
        </div>

        <!-- Main Name Heading -->
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-content-main leading-[1.05] mb-6">
          Sarath<br />
          <span class="text-[#A8A8AA]">Sivakumar</span>
        </h1>

        <!-- Primary Statement -->
        <p class="text-lg sm:text-2xl font-medium text-content-main mb-5 leading-snug max-w-2xl">
          I build AI systems that can actually do things — not just chat.
        </p>

        <!-- Supporting Copy: Why this work interests Sarath -->
        <div class="space-y-3 text-base sm:text-lg text-content-secondary leading-relaxed max-w-xl mb-8">
          <p>
            Most of my work starts with a simple question:
          </p>
          <p class="text-content-main font-medium italic">
            What happens after the model gives an answer?
          </p>
          <p class="text-sm sm:text-base text-content-muted">
            That keeps pulling me into agents, planning, memory, tools, backend systems, state, failures and everything in between.
          </p>
        </div>

        <!-- Action CTA Buttons -->
        <div class="flex flex-wrap items-center gap-4 mb-8">
          <AppButton to="#featured-projects" variant="primary" size="lg" @click="scrollToNext">
            See what I'm building
          </AppButton>

          <AppButton to="/about" variant="secondary" size="lg">
            More about me
          </AppButton>
        </div>

        <!-- Connect Social Row in Hero -->
        <div class="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-border-subtle/50">
          <span class="font-mono text-xs uppercase tracking-widest text-content-muted font-semibold">
            Connect
          </span>
          <SocialLinks variant="inline" />
        </div>
      </div>

      <!-- Right Column: Portrait Stage (40-45% on desktop: 5 cols of 12) -->
      <div class="lg:col-span-5 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
        <div class="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px]">
          
          <!-- Visual Stage Container with clean integrated bottom fade -->
          <div
            class="hero-portrait-stage relative w-full h-[440px] sm:h-[500px] lg:h-[540px] rounded-[28px] sm:rounded-[32px] bg-white/[0.025] border border-white/[0.07] overflow-hidden flex items-end justify-center shadow-card"
          >
            <!-- Background Radial Glow -->
            <div
              class="absolute inset-0 pointer-events-none"
              style="background: radial-gradient(circle at 50% 35%, rgba(124, 140, 255, 0.16), rgba(124, 140, 255, 0.03) 55%, transparent 75%);"
            ></div>

            <!-- Faint Subtle Grid Pattern -->
            <div
              class="absolute inset-0 pointer-events-none opacity-40"
              style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px); background-size: 24px 24px;"
            ></div>

            <!-- Subtle Top Accent Edge Highlight -->
            <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent"></div>

            <!-- Portrait Cutout Image (Optimized WebP, full head and shoulders preserved, natural seamless stage integration) -->
            <img
              :src="sarathPortrait"
              alt="Sarath Sivakumar - AI Systems Engineer"
              width="1086"
              height="1448"
              class="relative z-10 w-auto h-[90%] sm:h-[92%] max-h-[500px] object-contain object-bottom select-none pointer-events-none animate-fade-in"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />

            <!-- Deliberate Subtle Bottom Edge Fade -->
            <div
              class="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#08090B] via-[#08090B]/80 to-transparent z-10 pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator (Clean and uncluttered) -->
    <div class="pt-8 sm:pt-12 flex items-center justify-between text-xs font-mono text-content-muted">
      <button
        type="button"
        class="inline-flex items-center gap-2 hover:text-content-main transition-colors group cursor-pointer focus:outline-none"
        @click="scrollToNext"
      >
        <span>Scroll to explore</span>
        <ArrowDown class="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
      </button>
    </div>
  </section>
</template>

