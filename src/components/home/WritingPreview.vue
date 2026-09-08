<script setup lang="ts">
import { articles } from '@/data/articles'
import SectionHeading from '@/components/common/SectionHeading.vue'
import ArticleCard from '@/components/blog/ArticleCard.vue'
import AppButton from '@/components/common/AppButton.vue'
</script>

<template>
  <section class="py-16 md:py-24 border-b border-border-subtle" aria-label="Writing Preview">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <SectionHeading
        eyebrow="WRITING"
        title="Things I'm Figuring Out"
        description="I write about the systems I build, the ideas I'm exploring, and the things I usually understand properly only after breaking them once."
      />

      <div class="hidden md:block pb-14">
        <AppButton to="/blog" variant="outline" size="sm">
          View all writing →
        </AppButton>
      </div>
    </div>

    <!-- 3 Article previews -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ArticleCard
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div>

    <div class="mt-8 text-center md:hidden">
      <AppButton to="/blog" variant="outline" size="md">
        View all writing →
      </AppButton>
    </div>
  </section>
</template>
