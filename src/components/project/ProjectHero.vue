<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '@/data/projects'
import TechBadge from './TechBadge.vue'
import StoreBadges from './StoreBadges.vue'
import { ArrowLeft, Github, ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  project: Project
}>()
</script>

<template>
  <header class="pt-8 pb-12 md:pt-12 md:pb-16 border-b border-border-subtle mb-12">
    <!-- Breadcrumb back link -->
    <div class="mb-8">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 text-xs font-mono text-content-secondary hover:text-content-main transition-colors group"
      >
        <ArrowLeft class="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
        <span>BACK TO PROJECTS</span>
      </RouterLink>
    </div>

    <!-- Technical Eyebrow & Status -->
    <div class="flex flex-wrap items-center gap-3 font-mono text-xs mb-4">
      <span class="text-accent-primary font-semibold tracking-wider uppercase">
        {{ project.category || `SYSTEM ${project.number}` }}
      </span>
      <span class="w-1 h-1 rounded-full bg-border-subtle"></span>
      <span class="px-2.5 py-0.5 rounded-full bg-dark-secondary border border-border-subtle text-content-muted">
        {{ project.status }}
      </span>
    </div>

    <!-- Title and Subtitle -->
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-3 leading-tight">
      {{ project.name }}
    </h1>
    <p class="text-xl sm:text-2xl font-medium text-content-secondary mb-6 max-w-3xl">
      {{ project.subtitle }}
    </p>

    <!-- Core Insight: Why this is interesting / hard -->
    <p class="text-lg sm:text-xl text-content-main font-medium leading-relaxed max-w-3xl mb-8 border-l-2 border-accent-primary pl-4">
      {{ project.heroIntro }}
    </p>

    <!-- Store Badges & Platforms (Growva, QuickRun) -->
    <div v-if="project.stores && project.stores.length" class="mb-8">
      <StoreBadges :stores="project.stores" :app-name="project.name" />
    </div>

    <!-- Prominent Repository CTA (Echo & Debug Pilot, QuickRun) -->
    <div v-if="project.githubUrl" class="mb-8">
      <a
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn text-sm font-medium bg-dark-secondary hover:bg-dark-hover text-content-main border border-border-subtle hover:border-border-hover transition-all duration-200 group"
      >
        <Github class="w-4 h-4 text-accent-primary" />
        <span>View Repository</span>
        <ArrowUpRight class="w-4 h-4 text-content-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>

    <!-- Tech Stack Pill Group -->
    <div class="flex flex-wrap gap-2 pt-2">
      <TechBadge
        v-for="tech in project.techStack"
        :key="tech"
        :text="tech"
      />
    </div>
  </header>
</template>
