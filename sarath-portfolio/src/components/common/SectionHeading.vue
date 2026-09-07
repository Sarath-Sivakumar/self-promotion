<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'left'
})
</script>

<template>
  <div :class="['mb-10 md:mb-14', align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl']">
    <div
      v-if="eyebrow"
      class="font-mono text-xs md:text-sm uppercase tracking-wider text-accent-primary mb-2.5 font-medium"
    >
      {{ eyebrow }}
    </div>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-content-main mb-4 leading-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="text-base md:text-lg text-content-secondary leading-relaxed">
      {{ description }}
    </p>
    <slot name="extra" />
  </div>
</template>
