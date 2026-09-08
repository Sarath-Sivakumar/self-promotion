<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/data/projects'
import SectionHeading from '@/components/common/SectionHeading.vue'
import ProjectCard from '@/components/project/ProjectCard.vue'
import AppButton from '@/components/common/AppButton.vue'

const natasha = computed(() => projects.find(p => p.slug === 'natasha'))
const secondaryProjects = computed(() => projects.filter(p => p.slug !== 'natasha'))
</script>

<template>
  <section id="featured-projects" class="py-16 md:py-24 border-b border-border-subtle" aria-label="Featured Projects">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Things I'm Building"
        description="These are the projects taking most of my attention right now — and occasionally most of my sleep."
      />

      <div class="hidden md:block pb-14">
        <AppButton to="/projects" variant="outline" size="sm">
          All Projects (3) →
        </AppButton>
      </div>
    </div>

    <!-- Layout Grid: Flagship (Natasha) on top, Echo & Debug Pilot below -->
    <div class="space-y-6">
      <!-- Flagship System: Natasha -->
      <div v-if="natasha" class="w-full">
        <ProjectCard :project="natasha" :featured="true" />
      </div>

      <!-- Secondary Systems: Echo and Debug Pilot -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="proj in secondaryProjects"
          :key="proj.id"
          :project="proj"
        />
      </div>
    </div>

    <div class="mt-8 text-center md:hidden">
      <AppButton to="/projects" variant="outline" size="md">
        View all projects →
      </AppButton>
    </div>
  </section>
</template>
