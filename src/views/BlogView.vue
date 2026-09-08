<script setup lang="ts">
import { articles } from '@/data/articles'
import ArticleCard from '@/components/blog/ArticleCard.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
</script>

<template>
  <div class="py-6 sm:py-10">
    <!-- Header -->
    <header class="pb-12 border-b border-border-subtle mb-12">
      <div class="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium mb-3">
        ESSAYS & TECHNICAL NOTES
      </div>
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-main mb-6">
        Things I'm Figuring Out
      </h1>
      <p class="text-xl sm:text-2xl text-content-secondary max-w-3xl leading-relaxed">
        I write about the systems I build, the ideas I'm exploring, and the things I usually understand properly only after breaking them once.
      </p>
    </header>

    <!-- Articles Grid -->
    <div class="space-y-6 max-w-4xl">
      <ArticleCard
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div>

    <!-- Empty State / Coming soon note -->
    <div class="mt-12 p-6 rounded-card bg-dark-card border border-border-subtle text-center max-w-4xl">
      <p class="text-sm font-mono text-content-muted">
        More writing coming soon. Currently drafting in-depth architecture breakdowns.
      </p>
    </div>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>
</template>
