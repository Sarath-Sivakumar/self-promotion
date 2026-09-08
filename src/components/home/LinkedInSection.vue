<script setup lang="ts">
import { computed } from 'vue'
import { linkedinPosts } from '@/data/linkedinPosts'
import LinkedInPostPreview from './LinkedInPostPreview.vue'
import AppButton from '@/components/common/AppButton.vue'
import { Linkedin } from 'lucide-vue-next'

const hasPosts = computed(() => linkedinPosts.length > 0)

const featuredPost = computed(() => {
  if (!hasPosts.value) return null
  return linkedinPosts.find((p) => p.featured) || linkedinPosts[0]
})

const secondaryPosts = computed(() => {
  if (!featuredPost.value) return []
  return linkedinPosts.filter((p) => p.id !== featuredPost.value?.id).slice(0, 2)
})
</script>

<template>
  <section class="py-16 md:py-24 border-b border-border-subtle" aria-label="LinkedIn Updates">
    <!-- State C: Intro + Follow CTA only (no posts configured) -->
    <div v-if="!hasPosts" class="max-w-2xl">
      <div class="font-mono text-xs md:text-sm uppercase tracking-wider text-accent-primary mb-3 font-medium">
        ELSEWHERE ON THE INTERNET
      </div>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-content-main mb-4 leading-tight">
        Sometimes I think out loud.
      </h2>
      <p class="text-base md:text-lg text-content-secondary leading-relaxed mb-8">
        Not every thought becomes an article. Some ideas start as project updates, small notes, or engineering rabbit holes on LinkedIn before they become something longer here.
      </p>
      <div>
        <AppButton
          href="https://linkedin.com/in/sarath-sivakumar"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
        >
          <Linkedin class="w-4 h-4 text-[#0A66C2]" />
          <span>Follow along on LinkedIn ↗</span>
        </AppButton>
      </div>
    </div>

    <!-- State A & B: Featured post available (+ optional secondary posts) -->
    <div v-else>
      <!-- Section Intro Header -->
      <div class="max-w-3xl mb-10 md:mb-12">
        <div class="font-mono text-xs md:text-sm uppercase tracking-wider text-accent-primary mb-3 font-medium">
          ELSEWHERE ON THE INTERNET
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-content-main mb-4 leading-tight">
          Sometimes I think out loud.
        </h2>
        <p class="text-base md:text-lg text-content-secondary leading-relaxed">
          Not every thought becomes an article. Some ideas start as project updates, small notes, or engineering rabbit holes on LinkedIn before they become something longer here.
        </p>
      </div>

      <!-- Featured Post Area (Dominant visual) -->
      <div v-if="featuredPost" class="w-full mb-8 md:mb-10">
        <LinkedInPostPreview :post="featuredPost" :featured="true" />
      </div>

      <!-- Secondary Posts Area (State B: only rendered when secondary posts exist) -->
      <div v-if="secondaryPosts.length > 0" class="mb-8 md:mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <LinkedInPostPreview
            v-for="post in secondaryPosts"
            :key="post.id"
            :post="post"
            :featured="false"
          />
        </div>
      </div>

      <!-- Section CTA: Follow along on LinkedIn ↗ -->
      <div class="mt-8 md:mt-10">
        <AppButton
          href="https://linkedin.com/in/sarath-sivakumar"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
        >
          <Linkedin class="w-4 h-4 text-[#0A66C2]" />
          <span>Follow along on LinkedIn ↗</span>
        </AppButton>
      </div>
    </div>
  </section>
</template>
