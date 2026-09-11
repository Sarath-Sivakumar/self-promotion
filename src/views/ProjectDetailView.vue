<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projects } from '@/data/projects'
import ProjectHero from '@/components/project/ProjectHero.vue'
import ProjectSection from '@/components/project/ProjectSection.vue'
import TechBadge from '@/components/project/TechBadge.vue'
import GrowvaDevicePreview from '@/components/project/GrowvaDevicePreview.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Github
} from 'lucide-vue-next'

const route = useRoute()

const slug = computed(() => {
  return (route.params.slug as string) || route.path.split('/').pop() || ''
})

const project = computed(() => {
  return projects.find(p => p.slug === slug.value)
})

// Compute next project for navigation footer
const nextProject = computed(() => {
  if (!project.value) return null
  const currentIndex = projects.findIndex(p => p.id === project.value!.id)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
})
</script>

<template>
  <div v-if="project" class="py-6 sm:py-10">
    <!-- Hero Section -->
    <ProjectHero :project="project" />

    <!-- Overview Section -->
    <ProjectSection title="Overview" eyebrow="FOUNDATION">
      <div class="space-y-6 max-w-4xl text-base sm:text-lg">
        <p class="leading-relaxed text-content-secondary">
          {{ project.overview }}
        </p>

        <!-- Specific checklist for Natasha -->
        <div v-if="project.overviewPoints" class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <div
            v-for="(point, idx) in project.overviewPoints"
            :key="idx"
            class="flex items-start gap-3 p-4 rounded-card bg-dark-card border border-border-subtle"
          >
            <CheckCircle2 class="w-4 h-4 text-accent-primary shrink-0 mt-1" />
            <span class="text-sm text-content-main">{{ point }}</span>
          </div>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Growva: App Preview & Store Badges -->
    <ProjectSection
      v-if="project.slug === 'growva'"
      title="Mobile Shopping Experience"
      eyebrow="CLIENT PRODUCT PREVIEW"
      description="A cross-platform mobile shopping experience engineered for farm-fresh produce and everyday essentials on iOS and Android."
    >
      <GrowvaDevicePreview :stores="project.stores" />
    </ProjectSection>

    <!-- Specific Section for Debug Pilot: Key Metrics -->
    <ProjectSection
      v-if="project.metrics && project.metrics.length"
      title="Performance Metrics"
      eyebrow="BENCHMARKS & IMPACT"
    >
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          v-for="metric in project.metrics"
          :key="metric.label"
          class="p-6 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-colors"
        >
          <div class="text-3xl sm:text-4xl font-mono font-bold text-accent-primary mb-2">
            {{ metric.value }}
          </div>
          <div class="text-sm font-bold text-content-main mb-1">
            {{ metric.label }}
          </div>
          <div v-if="metric.description" class="text-xs text-content-muted leading-relaxed">
            {{ metric.description }}
          </div>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Natasha: Core System Areas -->
    <ProjectSection
      v-if="project.coreAreas && project.coreAreas.length"
      title="Core System Areas"
      eyebrow="DECOMPOSED SUBSYSTEMS"
      description="The architecture partitions responsibility across modular subsystems to isolate non-deterministic reasoning from deterministic execution."
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="area in project.coreAreas"
          :key="area.title"
          class="p-6 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-colors"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-bold text-content-main">
              {{ area.title }}
            </h3>
            <span v-if="area.tag" class="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-secondary border border-border-subtle text-accent-primary">
              {{ area.tag }}
            </span>
          </div>
          <p class="text-sm text-content-secondary leading-relaxed">
            {{ area.description }}
          </p>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Natasha: Architecture Philosophy -->
    <ProjectSection
      v-if="project.architecturePhilosophy"
      title="Architecture Philosophy"
      eyebrow="DESIGN PRINCIPLES"
    >
      <div class="space-y-6 max-w-4xl">
        <blockquote class="p-6 sm:p-8 rounded-card bg-dark-card border-l-4 border-accent-primary border-t border-r border-b border-border-subtle text-content-main text-lg sm:text-xl font-medium leading-relaxed italic">
          “{{ project.architecturePhilosophy.quote }}”
        </blockquote>

        <div class="space-y-3 pt-2">
          <div
            v-for="(detail, idx) in project.architecturePhilosophy.details"
            :key="idx"
            class="flex items-start gap-3 p-4 rounded-card bg-dark-secondary/50 border border-border-subtle"
          >
            <ShieldCheck class="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
            <span class="text-sm text-content-secondary leading-relaxed">{{ detail }}</span>
          </div>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Echo: Capabilities -->
    <ProjectSection
      v-if="project.capabilities && project.capabilities.length"
      title="System Capabilities"
      eyebrow="FUNCTIONAL SCOPE"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="(cap, idx) in project.capabilities"
          :key="idx"
          class="flex items-start gap-3 p-4 rounded-card bg-dark-card border border-border-subtle"
        >
          <CheckCircle2 class="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
          <span class="text-sm text-content-main">{{ cap }}</span>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Echo: Architecture Areas -->
    <ProjectSection
      v-if="project.architectureAreas && project.architectureAreas.length"
      title="Architecture Pipeline"
      eyebrow="SUBSYSTEM INTEGRATION"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(area, idx) in project.architectureAreas"
          :key="idx"
          class="p-5 rounded-card bg-dark-card border border-border-subtle flex items-center gap-3.5"
        >
          <span class="font-mono text-xs text-accent-primary font-bold">0{{ idx + 1 }}</span>
          <span class="text-sm font-medium text-content-main">{{ area }}</span>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Echo: Conversational Voice Pipeline Flow (Decorative Architectural Overview) -->
    <ProjectSection
      v-if="project.slug === 'echo'"
      title="Conversational Pipeline Flow"
      eyebrow="SYSTEM TOPOLOGY"
      description="The end-to-end streaming architecture connecting multi-channel audio/text webhooks with semantic grounding and low-latency voice synthesis."
    >
      <div class="p-6 sm:p-8 rounded-card bg-dark-card border border-border-subtle space-y-6">
        <!-- Visual pipeline steps -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-xs font-mono text-content-muted mb-2">
              <span class="text-accent-secondary font-bold">01 INGESTION</span>
              <span class="w-1.5 h-1.5 rounded-full bg-accent-secondary"></span>
            </div>
            <div class="text-sm font-bold text-content-main mb-1">Telegram & WhatsApp</div>
            <div class="text-xs text-content-secondary">Audio voice notes and text webhooks received asynchronously.</div>
          </div>

          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-xs font-mono text-content-muted mb-2">
              <span class="text-accent-secondary font-bold">02 SPEECH TO TEXT</span>
              <span class="w-1.5 h-1.5 rounded-full bg-accent-secondary"></span>
            </div>
            <div class="text-sm font-bold text-content-main mb-1">STT Transcription</div>
            <div class="text-xs text-content-secondary">Audio chunk parsing and transcription into structured token stream.</div>
          </div>

          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-xs font-mono text-content-muted mb-2">
              <span class="text-accent-secondary font-bold">03 REASONING & RAG</span>
              <span class="w-1.5 h-1.5 rounded-full bg-accent-secondary"></span>
            </div>
            <div class="text-sm font-bold text-content-main mb-1">Dialogue & Knowledge Base</div>
            <div class="text-xs text-content-secondary">Domain retrieval vector search and contextual intent synthesis.</div>
          </div>

          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-xs font-mono text-content-muted mb-2">
              <span class="text-accent-secondary font-bold">04 SYNTHESIS</span>
              <span class="w-1.5 h-1.5 rounded-full bg-accent-secondary"></span>
            </div>
            <div class="text-sm font-bold text-content-main mb-1">TTS & Dispatch</div>
            <div class="text-xs text-content-secondary">Low-latency audio streaming generation and external API action dispatch.</div>
          </div>
        </div>

        <div class="pt-4 border-t border-border-subtle/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-content-muted">
          <span>PIPELINE: STREAMING / ASYNC EVENT DRIVEN</span>
          <span class="text-accent-secondary">TELEPHONY INTEGRATION IN ACTIVE DEVELOPMENT</span>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Debug Pilot: Diagnostic Workflow -->
    <ProjectSection
      v-if="project.slug === 'debug-pilot'"
      title="Diagnostic Flow Loop"
      eyebrow="AGENTIC LOOP"
      description="The structured four-stage evaluation cycle designed to analyze stack traces and synthesize deterministic remediation guidance."
    >
      <div class="p-6 sm:p-8 rounded-card bg-dark-card border border-border-subtle space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle">
            <div class="text-xs font-mono text-blue-400 font-bold mb-2">STAGE 1: PLAN</div>
            <div class="text-sm font-bold text-content-main mb-1">Assess Failure Modality</div>
            <div class="text-xs text-content-secondary">Parses stack trace headers (e.g. BeanCreationException) and plans diagnostic queries.</div>
          </div>

          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle">
            <div class="text-xs font-mono text-blue-400 font-bold mb-2">STAGE 2: EXECUTE</div>
            <div class="text-sm font-bold text-content-main mb-1">Retrieve & Inspect</div>
            <div class="text-xs text-content-secondary">Queries indexed failure knowledge base and inspects dependency injection graph topology.</div>
          </div>

          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle">
            <div class="text-xs font-mono text-blue-400 font-bold mb-2">STAGE 3: REFLECT</div>
            <div class="text-sm font-bold text-content-main mb-1">Critique Hypothesis</div>
            <div class="text-xs text-content-secondary">Verifies hypothesized cause against framework configuration rules and error constraints.</div>
          </div>

          <div class="p-4 rounded-lg bg-dark-secondary/60 border border-border-subtle">
            <div class="text-xs font-mono text-blue-400 font-bold mb-2">STAGE 4: DIAGNOSE</div>
            <div class="text-sm font-bold text-content-main mb-1">Synthesize & Patch</div>
            <div class="text-xs text-content-secondary">Generates contextual root-cause explanation and copy-pasteable remediation diff.</div>
          </div>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Natasha: WHAT BROKE ALONG THE WAY (Architecture Lessons) -->
    <ProjectSection
      v-if="project.lessons && project.lessons.length"
      title="What Broke Along the Way"
      eyebrow="ARCHITECTURE LESSONS"
      description="Real architectural insights and lessons discovered while building autonomous planning, context boundaries, and runtime execution."
    >
      <div class="space-y-4">
        <div
          v-for="lesson in project.lessons"
          :key="lesson.number"
          class="p-6 sm:p-7 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-colors"
        >
          <div class="flex items-center gap-3 mb-2 font-mono text-xs text-accent-primary font-bold">
            <span>LESSON {{ lesson.number }}</span>
            <span class="w-1 h-1 rounded-full bg-border-subtle"></span>
            <span class="text-content-main uppercase tracking-wide">{{ lesson.title }}</span>
          </div>
          <p class="text-base text-content-secondary leading-relaxed pt-1">
            {{ lesson.takeaway }}
          </p>
        </div>
      </div>
    </ProjectSection>

    <!-- Specific Section for Debug Pilot: Subsections (Problem, Approach, Retrieval, etc.) -->
    <template v-if="project.sections && project.sections.length">
      <ProjectSection
        v-for="sec in project.sections"
        :key="sec.title"
        :title="sec.title"
        :eyebrow="`DEEP DIVE · ${sec.title.toUpperCase()}`"
      >
        <div class="max-w-4xl text-base text-content-secondary leading-relaxed">
          <p>{{ sec.content }}</p>
        </div>
      </ProjectSection>
    </template>

    <!-- Specific Section for Natasha: Engineering Challenges -->
    <ProjectSection
      v-if="project.engineeringChallenges && project.engineeringChallenges.length"
      title="Engineering Challenges"
      eyebrow="TECHNICAL COMPLEXITY"
      description="Key hurdles encountered when coordinating multi-step autonomy and state integrity."
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="(challenge, idx) in project.engineeringChallenges"
          :key="idx"
          class="p-5 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-colors"
        >
          <div class="flex items-start gap-3">
            <span class="font-mono text-xs text-accent-secondary font-bold mt-0.5">#{{ idx + 1 }}</span>
            <span class="text-sm text-content-secondary leading-relaxed">{{ challenge }}</span>
          </div>
        </div>
      </div>
    </ProjectSection>

    <!-- Tech Stack Summary Section -->
    <ProjectSection title="Technology Stack" eyebrow="IMPLEMENTATION">
      <div class="p-6 rounded-card bg-dark-card border border-border-subtle">
        <div class="flex flex-wrap gap-2.5">
          <TechBadge
            v-for="tech in project.techStack"
            :key="tech"
            :text="tech"
          />
        </div>
      </div>
    </ProjectSection>

    <!-- Status Section -->
    <ProjectSection title="Current Status" eyebrow="LIFECYCLE">
      <div class="p-6 rounded-card bg-dark-card border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="text-sm font-bold text-content-main mb-1">
            Status: {{ project.status }}
          </div>
          <div class="text-xs text-content-muted">
            Continuously refined with updated runtime guarantees, evaluation harnesses, and benchmarks.
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono bg-dark-secondary hover:bg-dark-hover border border-border-subtle hover:border-border-hover text-content-main transition-colors"
          >
            <Github class="w-3.5 h-3.5 text-accent-primary" />
            <span>GitHub Repository ↗</span>
          </a>

          <div class="font-mono text-xs text-accent-primary px-3 py-1 rounded-full bg-accent-muted border border-accent-primary/20 w-fit">
            {{ project.status.toUpperCase() }}
          </div>
        </div>
      </div>
    </ProjectSection>

    <!-- Next Project Navigation -->
    <div v-if="nextProject" class="pt-12 mt-12 border-t border-border-subtle flex justify-end">
      <RouterLink
        :to="`/projects/${nextProject.slug}`"
        class="group flex items-center gap-4 p-6 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-all duration-200"
      >
        <div class="text-right">
          <div class="text-xs font-mono text-content-muted">NEXT SYSTEM</div>
          <div class="text-lg font-bold text-content-main group-hover:text-accent-primary transition-colors">
            {{ nextProject.name }}
          </div>
        </div>
        <div class="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center text-content-secondary group-hover:text-content-main group-hover:bg-dark-hover transition-colors">
          <ArrowRight class="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </RouterLink>
    </div>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>

  <!-- Fallback if slug not found -->
  <div v-else class="py-24 text-center">
    <h1 class="text-3xl font-bold text-content-main mb-4">Project Not Found</h1>
    <p class="text-content-secondary mb-8">The requested project case study could not be located.</p>
    <RouterLink to="/projects" class="text-accent-primary hover:underline font-mono text-sm">
      ← Back to all projects
    </RouterLink>
  </div>
</template>
