<script setup lang="ts">
interface Props {
  text: string
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  size: 'md'
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center font-mono rounded-full border border-border-subtle bg-dark-secondary/60 text-content-secondary transition-colors duration-150',
      size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs tracking-wide'
    ]"
  >
    {{ text }}
  </span>
</template>
