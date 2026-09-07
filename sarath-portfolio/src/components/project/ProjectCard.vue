<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Project } from '@/data/projects'
import TechBadge from './TechBadge.vue'
import { ArrowUpRight, Github } from 'lucide-vue-next'

interface Props {
  project: Project
  featured?: boolean
  layout?: 'default' | 'compact' | 'featured'
}

const props = withDefaults(defineProps<Props>(), {
  featured: false,
  layout: 'default'
})

const routePath = computed(() => `/projects/${props.project.slug}`)
</script>

<template>
  <article
    class="group relative flex flex-col justify-between p-6 sm:p-8 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-card-hover overflow-hidden"
  >
    <!-- Background typographic accent decoration -->
    <div
      class="absolute top-0 right-0 -mr-6 -mt-6 font-mono text-7xl sm:text-8xl font-bold opacity-[0.03] group-hover:opacity-[0.06] select-none transition-opacity duration-300 pointer-events-none"
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
        <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-content-main group-hover:text-white transition-colors mb-1">
          {{ project.name }}
        </h3>
        <p class="text-sm font-medium text-accent-primary/90">
          {{ project.subtitle }}
        </p>
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
