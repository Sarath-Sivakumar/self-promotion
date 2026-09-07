<script setup lang="ts">
interface Props {
  title: string
  eyebrow?: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <section class="py-10 md:py-14 border-b border-border-subtle last:border-b-0">
    <div class="mb-6 md:mb-8">
      <div v-if="eyebrow" class="font-mono text-xs uppercase tracking-wider text-accent-primary mb-2 font-medium">
        {{ eyebrow }}
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-content-main mb-2">
        {{ title }}
      </h2>
      <p v-if="description" class="text-base text-content-secondary max-w-3xl leading-relaxed">
        {{ description }}
      </p>
    </div>
    
    <div class="text-content-secondary leading-relaxed">
      <slot />
    </div>
  </section>
</template>
