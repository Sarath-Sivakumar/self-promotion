<script setup lang="ts">
import { expertiseAreas } from '@/data/skills'
import SectionHeading from '@/components/common/SectionHeading.vue'
import {
  Bot,
  Brain,
  Server,
  Globe,
  Cpu,
  Network
} from 'lucide-vue-next'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Bot':
      return Bot
    case 'Brain':
      return Brain
    case 'Server':
      return Server
    case 'Globe':
      return Globe
    case 'Cpu':
      return Cpu
    case 'Network':
      return Network
    default:
      return Server
  }
}
</script>

<template>
  <section class="py-16 md:py-24 border-b border-border-subtle" aria-label="Expertise and Focus Areas">
    <SectionHeading
      eyebrow="DOMAINS OF WORK"
      title="What I Work On"
      description="Core disciplines bridging intelligent model reasoning with deterministic backend infrastructure."
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in expertiseAreas"
        :key="item.id"
        class="p-6 sm:p-7 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
      >
        <div>
          <div class="w-10 h-10 rounded-lg bg-dark-secondary border border-border-subtle flex items-center justify-center text-accent-primary mb-5">
            <component :is="getIcon(item.icon)" class="w-5 h-5" />
          </div>

          <h3 class="text-xl font-bold tracking-tight text-content-main mb-3">
            {{ item.title }}
          </h3>

          <p class="text-sm text-content-secondary leading-relaxed mb-6">
            {{ item.description }}
          </p>
        </div>

        <div v-if="item.tags" class="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle/50">
          <span
            v-for="tag in item.tags"
            :key="tag"
            class="text-[11px] font-mono text-content-muted"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
