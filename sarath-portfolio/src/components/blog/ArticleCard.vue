<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Article } from '@/data/articles'
import TechBadge from '@/components/project/TechBadge.vue'
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  article: Article
}>()
</script>

<template>
  <article
    class="group relative flex flex-col justify-between p-6 sm:p-7 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover hover:-translate-y-0.5 transition-all duration-300 shadow-card"
  >
    <div>
      <!-- Meta row -->
      <div class="flex items-center justify-between gap-2 mb-4">
        <div class="flex items-center gap-2">
          <span
            v-if="article.status === 'draft'"
            class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-dark-secondary text-accent-primary border border-accent-primary/20"
          >
            Coming soon
          </span>
          <span v-else class="text-xs font-mono text-content-muted">
            {{ article.date }}
          </span>
          <span v-if="article.readTime" class="text-xs font-mono text-content-muted">
            · {{ article.readTime }}
          </span>
        </div>

        <div class="flex flex-wrap gap-1.5">
          <TechBadge
            v-for="tag in article.tags"
            :key="tag"
            :text="tag"
            size="sm"
          />
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-content-main group-hover:text-accent-primary transition-colors mb-2">
        <RouterLink :to="`/blog/${article.slug}`" class="focus:outline-none">
          {{ article.title }}
        </RouterLink>
      </h3>

      <!-- Description -->
      <p class="text-sm sm:text-base text-content-secondary leading-relaxed mb-6">
        {{ article.description }}
      </p>
    </div>

    <!-- Read Link -->
    <div class="pt-4 border-t border-border-subtle/50 flex items-center justify-between">
      <RouterLink
        :to="`/blog/${article.slug}`"
        class="inline-flex items-center gap-1.5 text-xs font-mono text-content-secondary group-hover:text-content-main transition-colors"
      >
        <span>READ ARTICLE</span>
        <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </RouterLink>
    </div>
  </article>
</template>
