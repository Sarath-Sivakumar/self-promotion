<script setup lang="ts">
import { computed } from 'vue'
import { socials } from '@/data/socials'
import { Linkedin, Mail, Github, Cpu, ExternalLink } from 'lucide-vue-next'

interface Props {
  variant?: 'icons' | 'list' | 'pills' | 'inline'
}

withDefaults(defineProps<Props>(), {
  variant: 'icons'
})

const activeSocials = computed(() => {
  return socials.filter(s => s.enabled && s.url.trim() !== '')
})

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Linkedin':
      return Linkedin
    case 'Mail':
      return Mail
    case 'Github':
      return Github
    case 'Cpu':
      return Cpu
    default:
      return ExternalLink
  }
}
</script>

<template>
  <!-- Icon bar variant -->
  <div v-if="variant === 'icons'" class="flex items-center gap-2 sm:gap-2.5">
    <a
      v-for="social in activeSocials"
      :key="social.name"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="social.label || social.name"
      class="p-2 sm:p-2.5 rounded-lg text-content-secondary hover:text-content-main hover:bg-dark-secondary border border-transparent hover:border-border-subtle transition-all duration-200"
    >
      <component :is="getIcon(social.icon)" class="w-4 h-4 sm:w-5 sm:h-5" />
    </a>
  </div>

  <!-- Inline text with icons variant -->
  <div v-else-if="variant === 'inline'" class="flex flex-wrap items-center gap-4 sm:gap-6">
    <a
      v-for="social in activeSocials"
      :key="social.name"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-content-secondary hover:text-accent-primary transition-colors group"
    >
      <component :is="getIcon(social.icon)" class="w-4 h-4 text-content-muted group-hover:text-accent-primary transition-colors" />
      <span>{{ social.name }}</span>
    </a>
  </div>

  <!-- Detailed list variant -->
  <div v-else-if="variant === 'list'" class="space-y-3">
    <a
      v-for="social in activeSocials"
      :key="social.name"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-between p-4 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover hover:bg-dark-hover transition-all duration-200 group"
    >
      <div class="flex items-center gap-3.5">
        <div class="p-2 rounded-lg bg-dark-secondary text-accent-primary group-hover:text-white transition-colors">
          <component :is="getIcon(social.icon)" class="w-5 h-5" />
        </div>
        <div>
          <div class="text-sm font-medium text-content-main">{{ social.name }}</div>
          <div class="text-xs text-content-muted">{{ social.label || social.url.replace(/^mailto:/, '') }}</div>
        </div>
      </div>
      <ExternalLink class="w-4 h-4 text-content-muted group-hover:text-content-main transition-colors" />
    </a>
  </div>

  <!-- Pills variant -->
  <div v-else class="flex flex-wrap items-center gap-2.5">
    <a
      v-for="social in activeSocials"
      :key="social.name"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-dark-card border border-border-subtle hover:border-border-hover text-content-secondary hover:text-content-main transition-all duration-200"
    >
      <component :is="getIcon(social.icon)" class="w-3.5 h-3.5 text-accent-primary" />
      <span>{{ social.name }}</span>
    </a>
  </div>
</template>
