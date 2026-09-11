<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  to?: string
  href?: string
  download?: string
  ariaLabel?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  target?: string
  rel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[var(--primary-button-bg)] text-[var(--primary-button-text)] hover:opacity-90 font-semibold border border-transparent shadow-xs'
    case 'secondary':
      return 'bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-[var(--border-hover)]'
    case 'outline':
      return 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-[var(--border-hover)]'
    case 'ghost':
      return 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] border border-transparent'
    default:
      return 'bg-[var(--primary-button-bg)] text-[var(--primary-button-text)] hover:opacity-90 font-semibold border border-transparent'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3.5 py-1.5 text-xs font-mono rounded-btn gap-1.5'
    case 'lg':
      return 'px-7 py-3.5 text-base rounded-btn gap-2.5'
    case 'md':
    default:
      return 'px-5 py-2.5 text-sm rounded-btn gap-2'
  }
})

const isExternal = computed(() => {
  return !!props.href
})

const computedTarget = computed(() => {
  if (props.target !== undefined) return props.target || undefined
  if (props.href?.startsWith('mailto:') || props.href?.startsWith('tel:')) return undefined
  return '_blank'
})

const computedRel = computed(() => {
  if (props.rel !== undefined) return props.rel || undefined
  if (props.href?.startsWith('mailto:') || props.href?.startsWith('tel:')) return undefined
  return 'noopener noreferrer'
})

const isRouterLink = computed(() => {
  return !!props.to && !isExternal.value
})
</script>

<template>
  <RouterLink
    v-if="isRouterLink"
    :to="to!"
    :class="[
      'inline-flex items-center justify-center font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 cursor-pointer select-none active:translate-y-px',
      variantClasses,
      sizeClasses,
      disabled ? 'opacity-50 pointer-events-none' : ''
    ]"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="isExternal"
    :href="href"
    :download="download || undefined"
    :target="computedTarget"
    :rel="computedRel"
    :aria-label="ariaLabel || undefined"
    :class="[
      'inline-flex items-center justify-center font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 cursor-pointer select-none active:translate-y-px',
      variantClasses,
      sizeClasses,
      disabled ? 'opacity-50 pointer-events-none' : ''
    ]"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 cursor-pointer select-none active:translate-y-px',
      variantClasses,
      sizeClasses,
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
  >
    <slot />
  </button>
</template>
