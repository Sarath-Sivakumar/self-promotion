<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight, ExternalLink } from 'lucide-vue-next'

const appStoreBadge = '/brand/store-badges/app-store.svg'
const googlePlayBadge = '/brand/store-badges/google-play.svg'
</script>

<template>
  <section id="selected-work" class="w-full py-12 sm:py-16 md:py-20 border-b border-border-subtle" aria-label="Selected Work">
    <!-- Quiet Transition -->
    <div class="max-w-3xl mb-12 sm:mb-16">
      <p class="text-xl sm:text-2xl md:text-3xl font-medium text-content-secondary leading-relaxed">
        These days, the things I take apart are a little bigger.
      </p>
    </div>

    <!-- Section Heading -->
    <div class="mb-14 sm:mb-20">
      <h2 class="text-xs sm:text-sm tracking-[0.18em] uppercase text-accent-primary font-semibold mb-2">
        SELECTED WORK
      </h2>
      <p class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content-main">
        A few things I'm building, shipping, or trying to understand.
      </p>
    </div>

    <!-- Three Representative Entries (Each With a Distinct Composition) -->
    <div class="space-y-16 sm:space-y-24">
      
      <!-- ===================================================================
           ENTRY 1: QUICKRUN (Product-Led Composition)
           =================================================================== -->
      <article class="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] transition-all">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left: Product metadata & availability -->
          <div class="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span class="inline-block text-xs font-semibold tracking-[0.14em] uppercase text-amber-500 mb-3">
                PRODUCT I'M BUILDING
              </span>
              <h3 class="text-3xl sm:text-4xl font-bold text-content-main tracking-tight mb-3">
                QuickRun
              </h3>
              <p class="text-lg sm:text-xl font-medium text-content-main mb-2">
                A faster way into your development workspace.
              </p>
              <p class="text-sm sm:text-base text-content-secondary leading-relaxed max-w-md">
                A local desktop utility that discovers, runs, and monitors the services that make up a multi-project development environment without terminal sprawl.
              </p>
            </div>

            <!-- Platform Availability Status -->
            <div class="pt-4 border-t border-[var(--border-subtle)]">
              <div class="text-xs uppercase tracking-wider text-content-muted font-medium mb-3">
                Platform Status
              </div>
              <div class="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--page-bg)] border border-[var(--border-subtle)] text-content-main">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span class="font-medium">Windows</span>
                  <span class="text-content-muted">· Release in progress</span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--page-bg)] border border-[var(--border-subtle)] text-content-secondary">
                  <span class="font-medium">macOS</span>
                  <span class="text-content-muted">· Coming soon</span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--page-bg)] border border-[var(--border-subtle)] text-content-secondary">
                  <span class="font-medium">Linux</span>
                  <span class="text-content-muted">· Coming soon</span>
                </span>
              </div>
            </div>

            <!-- Action Link -->
            <div class="pt-2">
              <a
                href="https://github.com/Sarath-Sivakumar/QuickRun"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-content-main hover:text-accent-primary transition-colors group"
              >
                <span>View source on GitHub</span>
                <ExternalLink class="w-4 h-4 text-content-muted group-hover:text-accent-primary group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

          <!-- Right: Product-Led Visual (Local Runner Control Pane) -->
          <div class="lg:col-span-6 w-full">
            <div class="rounded-xl bg-[var(--page-bg)] border border-[var(--border-subtle)] p-5 sm:p-6 shadow-xs font-sans text-xs sm:text-sm select-none">
              <!-- Window Bar -->
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span class="ml-2 font-medium text-content-main">QuickRun Desktop</span>
                </div>
                <span class="text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-emerald-500 font-medium">
                  3 Services Live
                </span>
              </div>

              <!-- Service List -->
              <div class="space-y-2.5 mb-4">
                <div class="flex items-center justify-between p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                  <div class="flex items-center gap-2.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span class="font-medium text-content-main">api-gateway</span>
                    <span class="text-xs text-content-muted">FastAPI · :8000</span>
                  </div>
                  <span class="text-xs font-medium text-emerald-400">Listening</span>
                </div>

                <div class="flex items-center justify-between p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                  <div class="flex items-center gap-2.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span class="font-medium text-content-main">web-client</span>
                    <span class="text-xs text-content-muted">Vite · :5173</span>
                  </div>
                  <span class="text-xs font-medium text-emerald-400">Ready (180ms)</span>
                </div>

                <div class="flex items-center justify-between p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)]">
                  <div class="flex items-center gap-2.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span class="font-medium text-content-main">worker-task</span>
                    <span class="text-xs text-content-muted">Python · PID 4912</span>
                  </div>
                  <span class="text-xs font-medium text-emerald-400">Idle (Awaiting events)</span>
                </div>
              </div>

              <!-- Log Stream Preview -->
              <div class="p-3 rounded-lg bg-[var(--surface)]/60 border border-[var(--border-subtle)] text-[11px] text-content-muted font-mono leading-relaxed">
                <div>[08:14:22] <span class="text-emerald-400">✓</span> Vite dev server running on http://localhost:5173</div>
                <div>[08:14:23] <span class="text-indigo-400">ℹ</span> FastAPI initialized route registry (14 endpoints)</div>
              </div>
            </div>
          </div>

        </div>
      </article>

      <!-- ===================================================================
           ENTRY 2: GROWVA (Mobile / Distribution-Led Composition)
           =================================================================== -->
      <article class="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] transition-all">
        <div class="max-w-2xl flex flex-col justify-between space-y-6">
          <div>
            <span class="inline-block text-xs font-semibold tracking-[0.14em] uppercase text-emerald-500 mb-3">
              CLIENT WORK I SHIPPED
            </span>
            <h3 class="text-3xl sm:text-4xl font-bold text-content-main tracking-tight mb-3">
              Growva
            </h3>
            <p class="text-lg sm:text-xl font-medium text-content-main mb-2">
              Fresh groceries, delivered across Kerala.
            </p>
            <p class="text-sm sm:text-base text-content-secondary leading-relaxed max-w-xl">
              A cross-platform grocery shopping experience for fresh produce and everyday essentials, available to customers across Kerala.
            </p>
          </div>

          <!-- Distribution & Store Badges -->
          <div class="pt-4 border-t border-[var(--border-subtle)] space-y-3">
            <div class="text-xs uppercase tracking-wider text-content-muted font-medium">
              Shipped to App Store & Google Play
            </div>
            
            <!-- Real Store Links with Normalized Official Badges -->
            <div class="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="https://apps.apple.com/in/app/growva/id6766032950"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Growva on the App Store (opens in new tab)"
                class="app-store-badge inline-flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg shrink-0"
              >
                <img
                  :src="appStoreBadge"
                  alt="Download on the App Store"
                  class="h-[36px] sm:h-[38px] w-auto object-contain block"
                  loading="lazy"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=app.growvagreen.store&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Growva on Google Play (opens in new tab)"
                class="google-play-badge inline-flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg shrink-0"
              >
                <img
                  :src="googlePlayBadge"
                  alt="Get it on Google Play"
                  class="h-[36px] sm:h-[38px] w-auto object-contain block"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <!-- Client Project Note -->
          <div class="text-xs text-content-muted">
            <span>Available on iOS and Android.</span>
          </div>
        </div>
      </article>

      <!-- ===================================================================
           ENTRY 3: NATASHA (System / Engineering-Led Composition)
           =================================================================== -->
      <article class="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] transition-all">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left: Engineering question & systems narrative -->
          <div class="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span class="inline-block text-xs font-semibold tracking-[0.14em] uppercase text-accent-primary mb-3">
                SYSTEM I'M EXPLORING
              </span>
              <h3 class="text-3xl sm:text-4xl font-bold text-content-main tracking-tight mb-2">
                Natasha
              </h3>
              <p class="text-lg sm:text-xl font-semibold text-content-main leading-snug mb-3">
                What happens when an AI system's plan meets reality?
              </p>
              <p class="text-sm sm:text-base text-content-secondary leading-relaxed max-w-md">
                An exploration of planning, tools, state, execution and recovery — and the boundary between model reasoning and reliable software.
              </p>
            </div>

            <!-- Systems Highlight Points -->
            <div class="pt-4 border-t border-[var(--border-subtle)] space-y-2 text-xs text-content-secondary">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                <span>Deterministic runtime harness governing semantic model actions</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                <span>Authoritative world state diffing instead of assumed model success</span>
              </div>
            </div>

            <!-- Primary CTA -->
            <div class="pt-2">
              <RouterLink
                to="/projects/natasha"
                class="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-accent-primary hover:underline group"
              >
                <span>Read case study</span>
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </RouterLink>
            </div>
          </div>

          <!-- Right: System Artifact (Architecture Execution Loop) -->
          <div class="lg:col-span-6 w-full">
            <div class="rounded-xl bg-[var(--page-bg)] border border-[var(--border-subtle)] p-5 sm:p-6 shadow-xs font-sans text-xs select-none">
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                <span class="font-medium text-content-main">Execution Flow & State Boundary</span>
                <span class="text-[11px] text-accent-primary font-mono">Architecture Trace</span>
              </div>

              <!-- Systems Pipeline Steps -->
              <div class="space-y-2.5">
                <div class="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <span class="font-mono text-[10px] text-accent-primary font-semibold mt-0.5">01</span>
                  <div>
                    <div class="font-medium text-content-main">Goal Decomposition (Semantic)</div>
                    <div class="text-[11px] text-content-muted">Model constructs structured intent tree from user instruction</div>
                  </div>
                </div>

                <div class="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <span class="font-mono text-[10px] text-accent-primary font-semibold mt-0.5">02</span>
                  <div>
                    <div class="font-medium text-content-main">Runtime Isolation Gate (Deterministic)</div>
                    <div class="text-[11px] text-content-muted">Harness verifies tool parameters, safety policies & rate limits</div>
                  </div>
                </div>

                <div class="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <span class="font-mono text-[10px] text-accent-primary font-semibold mt-0.5">03</span>
                  <div>
                    <div class="font-medium text-content-main">World State Diffing (Ground Truth)</div>
                    <div class="text-[11px] text-content-muted">Compares concrete environmental changes against assumed output</div>
                  </div>
                </div>

                <div class="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <span class="font-mono text-[10px] text-accent-primary font-semibold mt-0.5">04</span>
                  <div>
                    <div class="font-medium text-content-main">Dynamic Recovery or Verified Completion</div>
                    <div class="text-[11px] text-content-muted">Backtracks on stale assumptions; halts with verifiable evidence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

    </div>

    <!-- Section Outro CTA: View all work -->
    <div class="mt-14 sm:mt-18 text-center sm:text-left">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-content-main hover:text-accent-primary transition-colors group"
      >
        <span>View all work</span>
        <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </RouterLink>
    </div>
  </section>
</template>
