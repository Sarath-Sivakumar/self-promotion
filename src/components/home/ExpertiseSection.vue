<script setup lang="ts">
import { expertiseAreas } from '@/data/skills'
import SectionHeading from '@/components/common/SectionHeading.vue'
</script>

<template>
  <section class="py-16 md:py-24 border-b border-border-subtle" aria-label="What I Spend My Time On">
    <SectionHeading
      eyebrow="DOMAINS OF FOCUS"
      title="What I Spend My Time On"
      description="Core engineering problems bridging intelligent model reasoning with deterministic backend infrastructure."
    />

    <!-- Editorial Numbered List with Thin Dividers (No Card Grid) -->
    <div class="border-t border-border-subtle divide-y divide-border-subtle">
      <div
        v-for="(item, index) in expertiseAreas"
        :key="item.id"
        class="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors duration-200 hover:bg-white/[0.01] -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg"
      >
        <!-- Column 1: Number (2 cols on desktop) -->
        <div class="md:col-span-2 font-mono text-xs sm:text-sm font-semibold tracking-wider text-accent-primary">
          0{{ index + 1 }}
        </div>

        <!-- Column 2: Discipline Title (4 cols on desktop) -->
        <div class="md:col-span-4">
          <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-content-main group-hover:text-white transition-colors">
            {{ item.title }}
          </h3>
        </div>

        <!-- Column 3: Description (6 cols on desktop) -->
        <div class="md:col-span-6">
          <p class="text-sm sm:text-base text-content-secondary leading-relaxed max-w-xl">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

