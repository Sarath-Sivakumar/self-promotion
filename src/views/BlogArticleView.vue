<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { articles } from '@/data/articles'
import { BUY_ME_A_COFFEE_URL } from '@/data/socials'
import TechBadge from '@/components/project/TechBadge.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
import { ArrowLeft, Clock, Coffee } from 'lucide-vue-next'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const article = computed(() => articles.find(a => a.slug === slug.value))
</script>

<template>
  <div v-if="article" class="py-6 sm:py-10">
    <!-- Back to blog -->
    <div class="mb-8">
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 text-xs font-mono text-content-secondary hover:text-content-main transition-colors group"
      >
        <ArrowLeft class="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
        <span>BACK TO WRITING</span>
      </RouterLink>
    </div>

    <!-- Article Header -->
    <header class="pb-8 border-b border-border-subtle mb-10 max-w-3xl">
      <div class="flex flex-wrap items-center gap-3 font-mono text-xs mb-4">
        <span class="px-2.5 py-0.5 rounded-full bg-accent-muted text-accent-primary border border-accent-primary/20 font-medium">
          Draft · Coming soon
        </span>
        <span class="text-content-muted">
          {{ article.date }}
        </span>
        <span v-if="article.readTime" class="flex items-center gap-1 text-content-muted">
          <Clock class="w-3 h-3" />
          <span>{{ article.readTime }}</span>
        </span>
      </div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-content-main mb-4 leading-tight">
        {{ article.title }}
      </h1>

      <p class="text-lg text-content-secondary leading-relaxed mb-6">
        {{ article.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <TechBadge
          v-for="tag in article.tags"
          :key="tag"
          :text="tag"
          size="sm"
        />
      </div>
    </header>

    <!-- Article Content -->
    <article class="max-w-3xl text-content-secondary leading-relaxed space-y-6 text-base sm:text-lg">
      <div class="p-4 rounded-card bg-dark-card border border-border-subtle font-mono text-xs text-accent-primary mb-8">
        NOTE: This article is currently in draft status. The full long-form essay will be published shortly.
      </div>

      <div class="prose-custom space-y-6">
        <div
          v-for="(paragraph, index) in (article.content || '').split('\n\n')"
          :key="index"
          class="space-y-4"
        >
          <h2 v-if="paragraph.startsWith('## ')" class="text-2xl font-bold text-content-main pt-4">
            {{ paragraph.replace('## ', '') }}
          </h2>
          <h3 v-else-if="paragraph.startsWith('### ')" class="text-xl font-bold text-content-main pt-2">
            {{ paragraph.replace('### ', '') }}
          </h3>
          <p v-else-if="!paragraph.startsWith('- ')" class="leading-relaxed">
            {{ paragraph }}
          </p>
          <ul v-else class="list-disc list-inside space-y-1 pl-2 text-content-secondary">
            <li v-for="(item, i) in paragraph.split('\n')" :key="i">
              {{ item.replace(/^- /, '') }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Optional subtle support line -->
      <div class="pt-8 mt-10 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-content-muted">
        <span>Found this useful?</span>
        <a
          :href="BUY_ME_A_COFFEE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-content-secondary hover:text-[#FFDD00] transition-colors group w-fit"
          aria-label="Fuel the next experiment with a coffee"
        >
          <Coffee class="w-3.5 h-3.5 text-[#FFDD00] group-hover:scale-110 transition-transform" />
          <span>Fuel the next experiment ↗</span>
        </a>
      </div>
    </article>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>

  <!-- Fallback -->
  <div v-else class="py-24 text-center">
    <h1 class="text-3xl font-bold text-content-main mb-4">Article Not Found</h1>
    <p class="text-content-secondary mb-8">The requested article could not be found.</p>
    <RouterLink to="/blog" class="text-accent-primary hover:underline font-mono text-sm">
      ← Back to all articles
    </RouterLink>
  </div>
</template>
