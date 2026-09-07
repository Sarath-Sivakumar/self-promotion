<script setup lang="ts">
import type { Article } from '@/data/articles'
import TechBadge from '@/components/project/TechBadge.vue'

defineProps<{
  article: Article
}>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-3 font-mono text-xs text-content-muted">
    <span
      v-if="article.status === 'draft'"
      class="px-2.5 py-0.5 rounded-full bg-accent-muted text-accent-primary border border-accent-primary/20 font-medium"
    >
      Draft · Coming soon
    </span>
    <span v-else class="text-content-secondary">
      {{ article.date }}
    </span>

    <span v-if="article.readTime" class="flex items-center gap-1.5">
      <span class="w-1 h-1 rounded-full bg-border-subtle"></span>
      <span>{{ article.readTime }}</span>
    </span>

    <div class="flex flex-wrap gap-1.5 ml-auto">
      <TechBadge
        v-for="tag in article.tags"
        :key="tag"
        :text="tag"
        size="sm"
      />
    </div>
  </div>
</template>
