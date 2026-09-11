<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectStoreLink } from '@/data/projects'
import { ArrowUpRight } from 'lucide-vue-next'

interface Props {
  stores: ProjectStoreLink[]
  appName?: string
}

defineProps<Props>()

const failedBadges = ref<Record<string, boolean>>({})

const onBadgeError = (platform: string) => {
  failedBadges.value[platform] = true
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3 sm:gap-4" role="list" aria-label="App store and platform links">
    <div
      v-for="store in stores"
      :key="store.platform"
      role="listitem"
      class="inline-flex items-center"
    >
      <!-- Mode 1: Active Store Link with Official Badge Asset -->
      <a
        v-if="store.url && store.badge && !failedBadges[store.platform]"
        :href="store.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="store.ariaLabel || store.label"
        class="inline-flex items-center justify-center h-[38px] rounded-lg transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
      >
        <img
          :src="store.badge"
          :alt="store.label"
          :class="[
            'w-auto object-contain block select-none pointer-events-none',
            store.platform === 'app-store' ? 'h-[34px]' : 'h-[38px]'
          ]"
          loading="lazy"
          decoding="async"
          @error="onBadgeError(store.platform)"
        />
      </a>

      <!-- Mode 2: Active Store Link with Text Fallback (When badge is unavailable or failed) -->
      <a
        v-else-if="store.url"
        :href="store.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="store.ariaLabel || store.label"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium font-sans text-content-main bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
      >
        <span>{{ store.label }}</span>
        <ArrowUpRight class="w-4 h-4 text-accent-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <!-- Mode 3: Platform Coming Soon / Non-Clickable (e.g. QuickRun before official release) -->
      <span
        v-else
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-sans text-content-secondary bg-[var(--surface)] border border-[var(--border-subtle)] select-none"
      >
        <span class="font-semibold text-content-main">{{ store.label }}</span>
        <span v-if="store.statusText" class="text-content-muted">· {{ store.statusText }}</span>
      </span>
    </div>
  </div>
</template>
