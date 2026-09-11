<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full py-14 sm:py-20 md:py-24 border-b border-border-subtle" aria-label="Featured Case Study">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      
      <!-- Left Column: Editorial Case Study Narrative -->
      <div class="lg:col-span-6 space-y-6">
        <p class="text-xs sm:text-sm tracking-[0.18em] uppercase text-accent-primary font-semibold">
          FEATURED CASE STUDY
        </p>

        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-content-main leading-[1.2]">
          Building an AI system that has to survive its own plans.
        </h2>

        <div class="space-y-4 text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
          <p>
            Getting a model to produce a plan was never the interesting part.
          </p>
          <p>
            The harder questions began when plans met reality — tools failed, state changed, assumptions became stale, and actions still had to be verified.
          </p>
          <p>
            Natasha became my way of exploring where model reasoning should end and where reliable software should take over.
          </p>
        </div>

        <div class="pt-4">
          <RouterLink
            to="/projects/natasha"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-content-main text-[var(--page-bg)] font-semibold text-sm sm:text-base hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary group"
          >
            <span>Read the case study</span>
            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </RouterLink>
        </div>
      </div>

      <!-- Right Column: Architecture & Execution Boundary Artifact -->
      <div class="lg:col-span-6 w-full">
        <div class="rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-xs font-sans text-xs select-none">
          
          <div class="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-subtle)]">
            <span class="text-xs uppercase tracking-wider font-semibold text-content-main">
              The Boundary Principle
            </span>
            <span class="text-[11px] text-content-muted">
              Semantic vs. Deterministic
            </span>
          </div>

          <!-- Top: Semantic Reasoning -->
          <div class="p-4 rounded-xl bg-[var(--page-bg)] border border-[var(--border-subtle)] mb-4">
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold text-accent-primary text-xs uppercase tracking-wider">Model Reasoning</span>
              <span class="text-[10px] text-content-muted">Non-deterministic</span>
            </div>
            <p class="text-content-secondary text-xs leading-relaxed">
              Intent interpretation, task decomposition, and dynamic plan proposal. Allowed to suggest next actions, but prohibited from direct system side-effects.
            </p>
          </div>

          <!-- The Boundary Gate -->
          <div class="relative py-2 flex items-center justify-center my-2">
            <div class="absolute inset-x-0 h-px bg-accent-primary/30"></div>
            <span class="relative px-3 py-1 rounded-full bg-[var(--surface)] border border-accent-primary/40 text-[10px] font-semibold text-accent-primary uppercase tracking-widest">
              Isolation Boundary
            </span>
          </div>

          <!-- Bottom: Deterministic Runtime Harness -->
          <div class="p-4 rounded-xl bg-[var(--page-bg)] border border-[var(--border-subtle)] mt-4">
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold text-emerald-500 text-xs uppercase tracking-wider">Deterministic Runtime</span>
              <span class="text-[10px] text-content-muted">Authoritative Ground Truth</span>
            </div>
            <p class="text-content-secondary text-xs leading-relaxed">
              Schema validation, tool execution containment, authoritative world state diffs, recovery backtracking, and completion verification.
            </p>
          </div>

          <!-- Verification Rule Callout -->
          <div class="mt-4 p-3 rounded-lg bg-accent-muted border border-border-accent/40 text-[11px] text-content-secondary flex items-start gap-2.5">
            <span class="text-accent-primary font-bold">Rule:</span>
            <span>A model saying an action succeeded is not evidence. Only environmental observation constitutes verified state.</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
