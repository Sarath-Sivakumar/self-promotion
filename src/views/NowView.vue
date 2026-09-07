<script setup lang="ts">
import ContactCTA from '@/components/home/ContactCTA.vue'
import { Hammer, BookOpen, Compass } from 'lucide-vue-next'

const buildingItems = [
  {
    title: 'Natasha',
    desc: 'Autonomous AI system and agent infrastructure focusing on goal decomposition, execution harnesses, and world state tracking.'
  },
  {
    title: 'Echo',
    desc: 'Conversational and real-time voice AI systems integrating low-latency acoustic models, streaming STT/TTS, and domain RAG.'
  }
]

const studyingItems = [
  {
    title: 'MSc Artificial Intelligence',
    desc: 'Deepening theoretical and applied understanding in machine intelligence, representation learning, and modern neural architectures.'
  }
]

const exploringItems = [
  'AI systems engineering and production deployment patterns',
  'LLM internals, mechanistic interpretability, and attention mechanics',
  'Agent architecture, planning heuristics, and self-correction loops',
  'Distributed systems resilience, state synchronization, and failure domains',
  'High-throughput inference systems and model quantization'
]
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
        <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium">
          CURRENT ACTIVITIES & PRIORITIES
        </div>
        <div class="font-mono text-xs text-content-muted">
          Last updated: September 2026
        </div>
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6">
        Now
      </h1>
      <p class="text-xl sm:text-2xl text-content-secondary max-w-3xl leading-relaxed">
        A public snapshot of what I am currently building, studying, and exploring.
      </p>
    </header>

    <!-- Content Sections -->
    <div class="space-y-16 max-w-4xl">
      <!-- Building Section -->
      <section aria-label="Building">
        <div class="flex items-center gap-3 mb-6">
          <div class="p-2 rounded-lg bg-dark-card border border-border-subtle text-accent-primary">
            <Hammer class="w-5 h-5" />
          </div>
          <h2 class="text-2xl font-bold text-content-main">
            Building
          </h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="item in buildingItems"
            :key="item.title"
            class="p-6 rounded-card bg-dark-card border border-border-subtle"
          >
            <h3 class="text-lg font-bold text-content-main mb-2">
              {{ item.title }}
            </h3>
            <p class="text-base text-content-secondary leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </section>

      <!-- Studying Section -->
      <section aria-label="Studying" class="pt-12 border-t border-border-subtle">
        <div class="flex items-center gap-3 mb-6">
          <div class="p-2 rounded-lg bg-dark-card border border-border-subtle text-blue-400">
            <BookOpen class="w-5 h-5" />
          </div>
          <h2 class="text-2xl font-bold text-content-main">
            Studying
          </h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="item in studyingItems"
            :key="item.title"
            class="p-6 rounded-card bg-dark-card border border-border-subtle"
          >
            <h3 class="text-lg font-bold text-content-main mb-2">
              {{ item.title }}
            </h3>
            <p class="text-base text-content-secondary leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </section>

      <!-- Exploring Section -->
      <section aria-label="Exploring" class="pt-12 border-t border-border-subtle">
        <div class="flex items-center gap-3 mb-6">
          <div class="p-2 rounded-lg bg-dark-card border border-border-subtle text-accent-secondary">
            <Compass class="w-5 h-5" />
          </div>
          <h2 class="text-2xl font-bold text-content-main">
            Exploring
          </h2>
        </div>

        <div class="p-6 rounded-card bg-dark-card border border-border-subtle">
          <ul class="space-y-3">
            <li
              v-for="(item, idx) in exploringItems"
              :key="idx"
              class="flex items-start gap-3 text-base text-content-secondary leading-relaxed"
            >
              <span class="text-accent-primary font-mono text-sm mt-1">▸</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>
</template>
