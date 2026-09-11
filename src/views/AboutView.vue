<script setup lang="ts">
import { skillCategories, focusAreas } from '@/data/skills'
import { experiences } from '@/data/experience'
import TechBadge from '@/components/project/TechBadge.vue'
import AppButton from '@/components/common/AppButton.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
import { siteConfig } from '@/config/site'

const coreValues = [
  'Systems that survive failure.',
  'Models surrounded by strong engineering.',
  'State that reflects reality.',
  'AI that actually does things.',
  'Architecture that remains understandable six months later.'
]
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header: Story First -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium mb-3">
        ENGINEERING JOURNEY & MINDSET
      </div>
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6 leading-tight">
        I like systems more than features.
      </h1>
      <p class="text-lg sm:text-xl text-content-secondary max-w-3xl leading-relaxed">
        I started much closer to the conventional backend world — Java, Spring Boot, APIs, databases and business logic. Then LLMs became another component in the architecture. Then agents happened.
      </p>
    </header>

    <!-- Main Content Container -->
    <div class="space-y-16 md:space-y-24">
      <!-- Section: The Rabbit Hole / Story Narrative -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" aria-label="Engineering Story">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              The Shift
            </h2>
            <p class="text-sm font-mono text-content-muted">
              From endpoints to autonomous loops
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-6 text-base sm:text-lg text-content-secondary leading-relaxed">
          <p>
            Suddenly the questions became much more interesting:
          </p>

          <ul class="space-y-3 font-mono text-sm sm:text-base text-content-main py-2 border-y border-border-subtle/60">
            <li class="flex items-start gap-3">
              <span class="text-accent-primary font-bold">?</span>
              <span>Who owns state?</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-accent-primary font-bold">?</span>
              <span>What happens when the model is wrong?</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-accent-primary font-bold">?</span>
              <span>How does an agent know an action actually worked?</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-accent-primary font-bold">?</span>
              <span>What should be deterministic?</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-accent-primary font-bold">?</span>
              <span>What belongs inside the model, and what belongs around it?</span>
            </li>
          </ul>

          <p>
            I've been falling down that rabbit hole ever since.
          </p>
          <p>
            When building autonomous agents and retrieval systems, reliability is rarely about prompt tweaking. It is about building strict boundaries: letting the language model provide semantic reasoning, while deterministic runtime harnesses enforce validation, state transitions, tool execution isolation, and recovery.
          </p>
        </div>
      </section>

      <!-- Section: What I Care About (Simple Lines, Not Cards) -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-border-subtle" aria-label="What I Care About">
        <div class="lg:col-span-4">
          <div class="sticky top-28">
            <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
              What I Care About
            </h2>
            <p class="text-sm font-mono text-content-muted">
              Engineering priorities
            </p>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="divide-y divide-border-subtle/70">
            <div
              v-for="(item, idx) in coreValues"
              :key="idx"
              class="py-4.5 flex items-baseline gap-4 group"
            >
              <span class="font-mono text-xs text-accent-primary font-semibold">
                0{{ idx + 1 }}
              </span>
              <p class="text-base sm:text-lg text-content-main font-medium group-hover:text-white transition-colors">
                {{ item }}
              </p>
            </div>
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
          <div class="sticky top-28 space-y-4">
            <div>
              <h2 class="text-2xl font-bold tracking-tight text-content-main mb-2">
                Experience
              </h2>
              <p class="text-sm font-mono text-content-muted">
                Professional engineering track
              </p>
            </div>

            <div>
              <AppButton
                :href="siteConfig.resume.url"
                :download="siteConfig.resume.downloadName"
                :aria-label="siteConfig.resume.ariaLabel"
                variant="outline"
                size="sm"
              >
                Download Resume ↓
              </AppButton>
            </div>
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
