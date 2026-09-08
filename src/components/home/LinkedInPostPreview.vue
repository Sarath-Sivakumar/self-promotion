<script setup lang="ts">
import { computed } from 'vue'
import { Linkedin, ArrowUpRight, Play } from 'lucide-vue-next'
import type { LinkedInPost } from '@/data/linkedinPosts'

const props = withDefaults(
  defineProps<{
    post: LinkedInPost
    featured?: boolean
  }>(),
  {
    featured: false
  }
)

const isFeatured = computed(() => props.featured || props.post.featured || false)
const isPublished = computed(() => props.post.status === 'published' && Boolean(props.post.postUrl))
const isVideo = computed(() => props.post.type === 'video')
const actionVerb = computed(() => (isVideo.value ? 'Watch' : 'Read'))
const ctaLabel = computed(() => (isVideo.value ? 'Watch on LinkedIn' : 'Read on LinkedIn'))

const cardAriaLabel = computed(() => {
  if (!isPublished.value) return undefined
  return `${actionVerb.value} '${props.post.title}' on LinkedIn`
})

const imageAlt = computed(() => {
  if (props.post.id.includes('debugpilot')) {
    return 'DebugPilot LinkedIn video thumbnail showing Spring Boot debugging UI'
  }
  return `${props.post.title} thumbnail`
})
</script>

<template>
  <!-- Featured Post Layout: Dominant visual with wide cinematic thumbnail, portfolio typography & colors -->
  <component
    :is="isPublished ? 'a' : 'article'"
    v-if="isFeatured"
    :href="isPublished ? post.postUrl : undefined"
    :target="isPublished ? '_blank' : undefined"
    :rel="isPublished ? 'noopener noreferrer' : undefined"
    :aria-label="cardAriaLabel"
    :class="[
      'group block w-full rounded-card border transition-all duration-300 overflow-hidden bg-dark-card shadow-card',
      isPublished
        ? 'hover:border-[#0A66C2]/45 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg cursor-pointer'
        : 'border-border-subtle'
    ]"
  >
    <!-- 1. Thumbnail / Poster Image with subtle dark gradient overlay & visual play icon -->
    <div
      v-if="post.thumbnail"
      class="relative w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9] max-h-[460px] overflow-hidden bg-dark-secondary select-none"
    >
      <img
        :src="post.thumbnail"
        :alt="imageAlt"
        class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        loading="lazy"
      />

      <!-- Subtle dark gradient overlay at bottom for seamless blending into card background -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#12141A] via-[#12141A]/30 to-transparent opacity-90 pointer-events-none"
        aria-hidden="true"
      />

      <!-- Centered Play Icon Overlay (Visual only, indicates playable content on LinkedIn) -->
      <div
        v-if="isVideo"
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#08090B]/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:shadow-[0_0_30px_rgba(10,102,194,0.55)]"
        >
          <Play class="w-6 h-6 fill-white text-white translate-x-0.5" />
        </div>
      </div>
    </div>

    <!-- 2. Card Content Area -->
    <div class="p-6 sm:p-8 md:p-10 flex flex-col justify-between flex-1">
      <div>
        <!-- Top Meta Row: Brand + Topic & Optional Video Badge -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2">
            <Linkedin class="w-4 h-4 text-[#0A66C2] flex-shrink-0" aria-hidden="true" />
            <span class="font-mono text-xs font-semibold tracking-wider uppercase text-content-secondary">
              LINKEDIN
            </span>
            <template v-if="post.topic">
              <span class="text-content-muted font-mono text-xs" aria-hidden="true">·</span>
              <span class="font-mono text-xs font-semibold tracking-wider uppercase text-accent-primary">
                {{ post.topic }}
              </span>
            </template>
          </div>

          <div class="flex items-center gap-2.5">
            <span
              v-if="isVideo"
              class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono uppercase font-semibold tracking-wider bg-[#0A66C2]/15 text-[#58a6ff] border border-[#0A66C2]/30"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#58a6ff] animate-pulse" aria-hidden="true"></span>
              VIDEO POST
            </span>
            <span v-if="post.date" class="font-mono text-xs text-content-muted">
              {{ post.date }}
            </span>
          </div>
        </div>

        <!-- Main Title / Headline -->
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-content-main mb-4 leading-snug group-hover:text-white transition-colors">
          {{ post.title }}
        </h3>

        <!-- Excerpt / Thought Body -->
        <p class="text-sm sm:text-base md:text-lg text-content-secondary leading-relaxed font-normal mb-6 max-w-3xl">
          {{ post.excerpt }}
        </p>
      </div>

      <!-- Thin Divider & CTA Row -->
      <div class="pt-5 border-t border-border-subtle/50 flex items-center justify-between">
        <!-- Status label for unpublished drafts -->
        <span
          v-if="!isPublished"
          class="font-mono text-xs font-semibold tracking-wider uppercase text-content-muted select-none"
        >
          THOUGHT
        </span>

        <!-- Interactive CTA for published posts -->
        <div
          v-else
          class="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0A66C2] group-hover:text-[#58a6ff] group-hover:underline transition-colors"
        >
          <span>{{ ctaLabel }}</span>
          <ArrowUpRight
            class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </component>

  <!-- Secondary Post Layout: Compact preview card -->
  <component
    :is="isPublished ? 'a' : 'article'"
    v-else
    :href="isPublished ? post.postUrl : undefined"
    :target="isPublished ? '_blank' : undefined"
    :rel="isPublished ? 'noopener noreferrer' : undefined"
    :aria-label="cardAriaLabel"
    :class="[
      'group p-6 sm:p-7 rounded-card bg-dark-card border border-border-subtle flex flex-col justify-between transition-all duration-300 shadow-card h-full',
      isPublished
        ? 'hover:border-[#0A66C2]/40 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg'
        : 'hover:border-border-hover'
    ]"
  >
    <div>
      <!-- Top meta: Topic label + optional date/badge -->
      <div class="flex items-center justify-between gap-3 mb-3">
        <div class="flex items-center gap-2">
          <Linkedin class="w-3.5 h-3.5 text-[#0A66C2] flex-shrink-0" aria-hidden="true" />
          <span class="font-mono text-xs uppercase tracking-wider text-accent-primary font-semibold">
            {{ post.topic || 'LINKEDIN' }}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <span
            v-if="isVideo"
            class="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold tracking-wider bg-[#0A66C2]/15 text-[#58a6ff] border border-[#0A66C2]/30"
          >
            VIDEO
          </span>
          <span v-if="post.date" class="font-mono text-xs text-content-muted">
            {{ post.date }}
          </span>
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-lg sm:text-xl font-bold tracking-tight text-content-main mb-3 leading-snug group-hover:text-white transition-colors">
        {{ post.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-sm sm:text-base text-content-secondary leading-relaxed mb-6 font-normal">
        {{ post.excerpt }}
      </p>
    </div>

    <!-- Thin Divider & Status / CTA Row -->
    <div class="pt-4 border-t border-border-subtle/50 flex items-center justify-between mt-auto">
      <!-- Passive label for unpublished drafts -->
      <span
        v-if="!isPublished"
        class="font-mono text-xs font-semibold tracking-wider uppercase text-content-muted select-none"
      >
        THOUGHT
      </span>

      <!-- Interactive CTA for published posts -->
      <div
        v-else
        class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-[#0A66C2] group-hover:text-[#58a6ff] group-hover:underline transition-colors"
      >
        <span>{{ ctaLabel }}</span>
        <ArrowUpRight
          class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
    </div>
  </component>
</template>
