<script setup lang="ts">
import { projects } from '@/data/projects'
import ProjectCard from '@/components/project/ProjectCard.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium mb-3">
        SYSTEMS & ENGINEERING
      </div>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6">
        Projects
      </h1>
      <p class="text-xl sm:text-2xl text-content-secondary max-w-3xl leading-relaxed">
        AI systems, developer tools and engineering products I have designed and built.
      </p>
    </header>

    <!-- Projects Grid / List -->
    <div class="space-y-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>
</template>
