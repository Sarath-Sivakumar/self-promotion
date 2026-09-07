<script setup lang="ts">
import { skillCategories, focusAreas } from '@/data/skills'
import { experiences } from '@/data/experience'
import TechBadge from '@/components/project/TechBadge.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium mb-3">
        BACKGROUND & PHILOSOPHY
      </div>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6">
        About
      </h1>
      <p class="text-xl sm:text-2xl text-content-main font-medium leading-relaxed max-w-3xl">
        I'm Sarath, an AI Systems Engineer focused on building intelligent software systems from the model layer through the runtime and backend infrastructure around it.
      </p>
    </header>

    <!-- Main Content Container -->
    <div class="space-y-16 md:space-y-24">
      <!-- Section: Background -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" aria-label="Background Story">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              Background
            </h2>
            <p class="text-sm font-mono text-content-muted">
              Origin & evolution of focus
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-6 text-base sm:text-lg text-content-secondary leading-relaxed">
          <p>
            My engineering foundation began primarily in Java, Spring Boot, and enterprise backend systems. Most of my professional depth is rooted in building resilient backend architectures, scalable microservices, relational data modeling, and core business logic.
          </p>
          <p>
            Over time, that focus expanded deeply into AI systems, LLM applications, and autonomous agents. Rather than treating machine learning models as isolated black-box APIs, I approach them as non-deterministic reasoning engines that require robust runtime harnesses, explicit state management, and strict execution guardrails.
          </p>
          <p>
            Today, my engineering interests sit at the direct intersection of AI systems, backend architecture, distributed systems, and intelligent runtime orchestration—designing software capable of autonomous planning, semantic retrieval, and reliable tool-driven execution.
          </p>
        </div>
      </section>

      <!-- Section: How I Think About Engineering -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-border-subtle" aria-label="Engineering Philosophy">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              How I Think About Engineering
            </h2>
            <p class="text-sm font-mono text-content-muted">
              Core architectural principles
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-6">
          <blockquote class="p-6 sm:p-8 rounded-card bg-dark-card border-l-4 border-accent-primary border-t border-r border-b border-border-subtle text-content-main text-lg sm:text-xl font-medium leading-relaxed italic">
            “The difficult part of building intelligent software is rarely just generating code. The harder problems are deciding what the system should guarantee, how state should be represented, how failures should be handled, where responsibilities belong, and how components should interact reliably.”
          </blockquote>

          <div class="space-y-4 text-base text-content-secondary leading-relaxed">
            <p>
              When developing autonomous agents and LLM-powered pipelines, reliability is achieved not by hoping the prompt handles edge cases, but by architecting strict separation between reasoning and execution.
            </p>
            <p>
              The language model provides semantic interpretation and heuristic decomposition, while deterministic backend code enforces validation schemas, manages transactional rollback, and bounds failure modes.
            </p>
          </div>
        </div>
      </section>

      <!-- Section: Focus Areas -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-border-subtle" aria-label="Focus Areas">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              Focus Areas
            </h2>
            <p class="text-sm font-mono text-content-muted">
              Specialized domains of practice
            </p>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="area in focusAreas"
              :key="area"
              class="p-4 rounded-card bg-dark-card border border-border-subtle flex items-center gap-3 text-sm font-medium text-content-main"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
              <span>{{ area }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Technologies -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-border-subtle" aria-label="Technologies">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              Technologies
            </h2>
            <p class="text-sm font-mono text-content-muted">
              Tools, frameworks & stacks
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-6">
          <div
            v-for="group in skillCategories"
            :key="group.category"
            class="p-6 rounded-card bg-dark-card border border-border-subtle"
          >
            <h3 class="text-base font-bold text-content-main mb-4 font-mono flex items-center gap-2">
              <span class="text-accent-primary font-semibold">//</span>
              <span>{{ group.category }}</span>
            </h3>

            <div class="flex flex-wrap gap-2">
              <TechBadge
                v-for="skill in group.skills"
                :key="skill"
                :text="skill"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Experience Detail -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-border-subtle" aria-label="Work Experience">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              Experience
            </h2>
            <p class="text-sm font-mono text-content-muted">
              Professional engineering track
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-6">
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="p-6 sm:p-8 rounded-card bg-dark-card border border-border-subtle"
          >
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 class="text-xl font-bold text-content-main">
                {{ exp.role }}
              </h3>
              <div class="text-xs font-mono text-content-muted">
                {{ exp.period }}
              </div>
            </div>

            <div class="text-sm font-medium text-accent-primary mb-4">
              {{ exp.company }} · {{ exp.location }}
            </div>

            <p class="text-base text-content-secondary leading-relaxed mb-4">
              {{ exp.summary }}
            </p>

            <ul v-if="exp.highlights" class="space-y-2 border-t border-border-subtle/60 pt-4">
              <li
                v-for="(highlight, idx) in exp.highlights"
                :key="idx"
                class="flex items-start gap-2.5 text-sm text-content-secondary"
              >
                <span class="text-accent-primary font-mono text-xs mt-1">▸</span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Section: Education -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-border-subtle" aria-label="Education">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              Education
            </h2>
            <p class="text-sm font-mono text-content-muted">
              Academic credentials & studies
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-4">
          <!-- Current Study -->
          <div class="p-6 rounded-card bg-dark-card border border-border-subtle">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-bold text-content-main">
                Master of Science (MSc) in Artificial Intelligence
              </h3>
              <span class="text-xs font-mono text-accent-primary px-2.5 py-0.5 rounded-full bg-accent-muted border border-accent-primary/20">
                In Progress
              </span>
            </div>
            <p class="text-sm text-content-secondary">
              Focusing on machine intelligence, deep learning architectures, semantic reasoning, and scalable agent systems.
            </p>
          </div>

          <!-- Undergraduate Degree -->
          <div class="p-6 rounded-card bg-dark-card border border-border-subtle">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-bold text-content-main">
                Bachelor of Computer Applications (BCA)
              </h3>
              <span class="text-xs font-mono text-content-muted">
                Completed
              </span>
            </div>
            <p class="text-sm text-content-secondary">
              Comprehensive grounding in computer science foundations, algorithms, data structures, and software engineering.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>
</template>
