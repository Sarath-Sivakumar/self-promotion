<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Article } from '@/data/articles'
import TechBadge from '@/components/project/TechBadge.vue'
import { ArrowUpRight } from 'lucide-vue-next'

const props = defineProps<{
  article: Article
}>()

const isDraft = computed(() => props.article.status === 'draft')
</script>

<template>
  <article
    class="group flex flex-col justify-between p-6 sm:p-7 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-all duration-300 shadow-card"
  >
    <div>
      <!-- Top Meta Row: Simplified & Uncrowded -->
      <div class="flex items-center gap-2 mb-3 text-xs font-mono text-content-muted">
        <span v-if="isDraft" class="text-accent-primary font-semibold tracking-wider">
          COMING SOON
        </span>
        <span v-else class="text-content-secondary">
          {{ article.date }}
        </span>
        <span v-if="article.readTime" class="text-content-muted/60">·</span>
        <span v-if="article.readTime" class="text-content-muted">
          {{ article.readTime.toUpperCase() }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-content-main mb-3 leading-snug">
        <RouterLink
          v-if="!isDraft"
          :to="`/blog/${article.slug}`"
          class="hover:text-accent-primary transition-colors focus:outline-none"
        >
          {{ article.title }}
        </RouterLink>
        <span v-else>
          {{ article.title }}
        </span>
      </h3>

      <!-- Description: Plain-English Context -->
      <p class="text-sm sm:text-base text-content-secondary leading-relaxed mb-5">
        {{ article.description }}
      </p>

      <!-- Tags beneath description -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <TechBadge
          v-for="tag in article.tags"
          :key="tag"
          :text="tag"
          size="sm"
        />
      </div>
    </div>

    <!-- Footer Row: Passive status for draft, CTA for published -->
    <div class="pt-4 border-t border-border-subtle/50 flex items-center justify-between">
      <div
        v-if="isDraft"
        class="inline-flex items-center gap-2 text-xs font-mono text-content-muted font-medium"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-accent-primary/70 animate-pulse"></span>
        <span>CURRENTLY WRITING</span>
      </div>

      <RouterLink
        v-else
        :to="`/blog/${article.slug}`"
        class="inline-flex items-center gap-1.5 text-xs font-mono text-content-secondary hover:text-content-main group-hover:text-accent-primary transition-colors"
      >
        <span>READ ARTICLE</span>
        <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </RouterLink>
    </div>
  </article>
</template>
