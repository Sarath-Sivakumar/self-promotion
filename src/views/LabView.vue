<script setup lang="ts">
import ContactCTA from '@/components/home/ContactCTA.vue'
import { FlaskConical } from 'lucide-vue-next'

const labCategories = [
  {
    name: 'Agent Systems',
    status: 'In active research',
    description: 'Prototyping minimal state-machine harnesses and bounded execution loops for recursive task completion.'
  },
  {
    name: 'LLM Inference',
    status: 'Benchmarking',
    description: 'Investigating structured schema output constraints and token latency across local and hosted models.'
  },
  {
    name: 'Retrieval Pipelines',
    status: 'Prototyping',
    description: 'Exploring hybrid dense/sparse retrieval reranking and context compression techniques.'
  },
  {
    name: 'Voice AI & Streaming',
    status: 'Exploratory',
    description: 'Measuring full-duplex conversational latency and client-side audio frame streaming.'
  },
  {
    name: 'Browser Automation',
    status: 'Investigating',
    description: 'Testing semantic DOM extraction algorithms for rapid element identification in complex web apps.'
  },
  {
    name: 'Backend Performance',
    status: 'Profiling',
    description: 'Analyzing high-throughput async event queues and connection pool behavior under AI workload surges.'
  },
  {
    name: 'AI Infrastructure',
    status: 'Experimenting',
    description: 'Setting up lightweight containerized evaluation harnesses and telemetry collectors.'
  }
]
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium mb-3">
        RESEARCH & EXPERIMENTS
      </div>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6">
        Lab
      </h1>
      <p class="text-xl sm:text-2xl text-content-secondary max-w-3xl leading-relaxed">
        Experiments, engineering notes and ideas that are too early or too small to become full project case studies.
      </p>
    </header>

    <!-- Experiments / Categories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div
        v-for="cat in labCategories"
        :key="cat.name"
        class="p-6 sm:p-7 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-all duration-200 flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="font-mono text-xs text-accent-primary font-medium">
              // LAB CATEGORY
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-dark-secondary border border-border-subtle text-content-muted">
              {{ cat.status }}
            </span>
          </div>

          <h3 class="text-xl font-bold text-content-main mb-2">
            {{ cat.name }}
          </h3>

          <p class="text-sm text-content-secondary leading-relaxed">
            {{ cat.description }}
          </p>
        </div>

        <div class="pt-4 mt-6 border-t border-border-subtle/50 flex items-center justify-between text-xs font-mono text-content-muted">
          <span>STATUS: WIP</span>
          <span>RESEARCH NOTE</span>
        </div>
      </div>
    </div>

    <!-- Tasteful Empty/Notice State -->
    <div class="p-8 rounded-card bg-dark-card border border-border-subtle text-center max-w-3xl mx-auto">
      <FlaskConical class="w-8 h-8 text-accent-primary mx-auto mb-3 opacity-80" />
      <h3 class="text-lg font-bold text-content-main mb-2">More experiments coming soon</h3>
      <p class="text-sm text-content-secondary max-w-lg mx-auto leading-relaxed">
        Experiments will appear here as they become ready to share. Code snippets, benchmarks, and architectural notes will be published systematically.
      </p>
    </div>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>
</template>
