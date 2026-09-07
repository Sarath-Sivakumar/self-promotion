<script setup lang="ts">
import { experiences } from '@/data/experience'
import SectionHeading from '@/components/common/SectionHeading.vue'
import AppButton from '@/components/common/AppButton.vue'
</script>

<template>
  <section class="py-16 md:py-24 border-b border-border-subtle" aria-label="Career Experience">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <SectionHeading
        eyebrow="CAREER"
        title="Experience"
        description="Engineering enterprise microservices and intelligent retrieval pipelines at scale."
      />

      <div class="hidden md:block pb-14">
        <AppButton to="/about" variant="outline" size="sm">
          More about me →
        </AppButton>
      </div>
    </div>

    <!-- Experience Timeline / List -->
    <div class="space-y-6">
      <div
        v-for="exp in experiences"
        :key="exp.id"
        class="p-6 sm:p-8 rounded-card bg-dark-card border border-border-subtle hover:border-border-hover transition-all duration-200"
      >
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
          <div>
            <h3 class="text-xl font-bold tracking-tight text-content-main">
              {{ exp.role }}
            </h3>
            <div class="text-sm font-medium text-accent-primary">
              {{ exp.company }}
            </div>
          </div>

          <div class="flex items-center gap-2 font-mono text-xs text-content-muted">
            <span v-if="exp.isCurrent" class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{{ exp.period }}</span>
            <span>·</span>
            <span>{{ exp.location }}</span>
          </div>
        </div>

        <p class="text-sm sm:text-base text-content-secondary leading-relaxed max-w-3xl">
          {{ exp.summary }}
        </p>
      </div>
    </div>

    <div class="mt-8 text-center md:hidden">
      <AppButton to="/about" variant="outline" size="md">
        More about me →
      </AppButton>
    </div>
  </section>
</template>
