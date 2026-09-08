<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Project } from '@/data/projects'
import TechBadge from './TechBadge.vue'
import { ArrowUpRight, Github, Activity, Mic, Wrench } from 'lucide-vue-next'

interface Props {
  project: Project
  featured?: boolean
  layout?: 'default' | 'compact' | 'featured'
}

const props = withDefaults(defineProps<Props>(), {
  featured: false,
  layout: 'default'
})

const isNatasha = computed(() => props.project.slug === 'natasha')
const isEcho = computed(() => props.project.slug === 'echo')
const isDebugPilot = computed(() => props.project.slug === 'debug-pilot')
const routePath = computed(() => `/projects/${props.project.slug}`)
</script>

<template>
  <article
    :class="[
      'group relative flex flex-col justify-between rounded-card border transition-all duration-300 overflow-hidden',
      featured || isNatasha
        ? 'p-8 sm:p-10 bg-gradient-to-b from-[#12141C] to-[#0D0F14] border-accent-primary/25 hover:border-accent-primary/45 shadow-glow/30 hover:shadow-glow/50'
        : 'p-6 sm:p-8 bg-dark-card border-border-subtle hover:border-border-hover shadow-card hover:shadow-card-hover hover:-translate-y-1'
    ]"
  >
    <!-- Background typographic accent decoration -->
    <div
      class="absolute top-0 right-0 -mr-6 -mt-6 font-mono text-7xl sm:text-8xl font-bold opacity-[0.03] group-hover:opacity-[0.07] select-none transition-opacity duration-300 pointer-events-none"
    >
      {{ project.number }}
    </div>

    <div>
      <!-- Typographic header panel -->
      <div class="flex items-center justify-between pb-5 border-b border-border-subtle mb-6">
        <div class="flex items-center gap-3">
          <span class="font-mono text-xs text-accent-primary font-semibold tracking-wider">
            SYSTEM {{ project.number }}
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-border-subtle"></span>
          <span class="text-xs font-mono text-content-muted">
            {{ project.status }}
          </span>
          <span v-if="featured || isNatasha" class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-accent-muted text-accent-primary border border-accent-primary/30">
            Flagship System
          </span>
        </div>

        <RouterLink
          :to="routePath"
          class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-dark-secondary text-content-secondary group-hover:text-content-main group-hover:bg-dark-hover transition-colors"
          :aria-label="`View ${project.name} case study`"
        >
          <ArrowUpRight class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </RouterLink>
      </div>

      <!-- Project Name and Subtitle -->
      <div class="mb-4">
        <div class="flex items-center gap-3 mb-1">
          <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-content-main group-hover:text-white transition-colors">
            {{ project.name }}
          </h3>
          <span v-if="isEcho" class="p-1 rounded bg-accent-secondary/10 text-accent-secondary">
            <Mic class="w-4 h-4" />
          </span>
          <span v-else-if="isDebugPilot" class="p-1 rounded bg-blue-500/10 text-blue-400">
            <Wrench class="w-4 h-4" />
          </span>
          <span v-else-if="isNatasha" class="p-1 rounded bg-accent-primary/10 text-accent-primary">
            <Activity class="w-4 h-4" />
          </span>
        </div>
        <p class="text-sm font-medium text-accent-primary/90">
          {{ project.subtitle }}
        </p>
      </div>

      <!-- Subtle Project Motifs for Visual Rhythm -->
      <!-- Echo Subtle Voice / Audio Visual Motif (Decorative) -->
      <div
        v-if="isEcho"
        class="mb-5 p-3 rounded-lg bg-dark-secondary/70 border border-border-subtle/70 flex items-center justify-between text-xs font-mono text-content-muted"
        aria-hidden="true"
      >
        <div class="flex items-center gap-1.5 text-accent-secondary">
          <span class="inline-block w-1 h-3 bg-accent-secondary rounded-full"></span>
          <span class="inline-block w-1 h-5 bg-accent-secondary rounded-full"></span>
          <span class="inline-block w-1 h-2 bg-accent-secondary rounded-full"></span>
          <span class="inline-block w-1 h-4 bg-accent-secondary rounded-full"></span>
          <span class="inline-block w-1 h-2.5 bg-accent-secondary rounded-full"></span>
        </div>
        <span class="text-[11px] text-content-secondary font-mono tracking-wider">
          STT → LLM REASONING → RAG → TTS
        </span>
      </div>

      <!-- Debug Pilot Subtle Diagnostic Visual Motif (Decorative) -->
      <div
        v-else-if="isDebugPilot"
        class="mb-5 p-3 rounded-lg bg-dark-secondary/70 border border-border-subtle/70 flex items-center justify-between text-xs font-mono text-content-muted"
        aria-hidden="true"
      >
        <span class="text-[11px] text-rose-400 font-mono font-semibold">
          FAULT: StackTrace
        </span>
        <span class="text-[11px] text-content-secondary font-mono tracking-wider">
          PLAN → EXECUTE → REFLECT → DIAGNOSE
        </span>
      </div>

      <!-- Natasha Subtle Flagship Architecture Motif -->
      <div
        v-else-if="isNatasha && featured"
        class="mb-5 p-3.5 rounded-lg bg-dark-secondary/70 border border-accent-primary/20 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-content-muted"
        aria-hidden="true"
      >
        <span class="text-accent-primary font-medium">RUNTIME HARNESS</span>
        <span class="text-content-secondary">GOAL → PLANNING → TOOLS → WORLD STATE → RECOVERY</span>
      </div>

      <!-- Description -->
      <p class="text-sm sm:text-base text-content-secondary leading-relaxed mb-6">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <TechBadge
          v-for="tag in project.tags"
          :key="tag"
          :text="tag"
          size="sm"
        />
      </div>
    </div>

    <!-- Action Link & Repository Link -->
    <div class="pt-4 border-t border-border-subtle/60 flex items-center justify-between">
      <RouterLink
        :to="routePath"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-content-main hover:text-accent-primary transition-colors group/link"
      >
        <span>View case study</span>
        <span class="text-content-muted group-hover/link:text-accent-primary group-hover/link:translate-x-1 transition-all">→</span>
      </RouterLink>

      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-content-secondary hover:text-content-main bg-dark-secondary hover:bg-dark-hover border border-border-subtle transition-colors"
        @click.stop
      >
        <Github class="w-3.5 h-3.5 text-accent-primary" />
        <span>Repository ↗</span>
      </a>
    </div>
  </article>
</template>

