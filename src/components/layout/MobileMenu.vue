<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { X, ArrowRight } from 'lucide-vue-next'
import SocialLinks from '@/components/common/SocialLinks.vue'

interface NavItem {
  label: string
  path: string
}

interface Props {
  isOpen: boolean
  navItems: NavItem[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const route = useRoute()

// Auto close on route change
watch(
  () => route.fullPath,
  () => {
    emit('close')
  }
)

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-dark-bg/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <!-- Top header bar in mobile menu -->
      <div class="flex items-center justify-between pb-6 border-b border-border-subtle">
        <RouterLink
          to="/"
          class="font-mono text-sm tracking-wider font-semibold text-content-main"
          @click="emit('close')"
        >
          SARATH.
        </RouterLink>

        <button
          type="button"
          class="p-2.5 rounded-lg text-content-secondary hover:text-content-main bg-dark-card border border-border-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary"
          aria-label="Close navigation menu"
          @click="emit('close')"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Navigation links -->
      <nav class="flex flex-col gap-4 py-8">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center justify-between text-2xl font-bold tracking-tight text-content-secondary hover:text-content-main transition-colors py-2 border-b border-border-subtle/40 group"
          :class="{ '!text-accent-primary': route.path === item.path || (item.path !== '/' && route.path.startsWith(item.path)) }"
          @click="emit('close')"
        >
          <span>{{ item.label }}</span>
          <ArrowRight class="w-5 h-5 text-content-muted group-hover:text-accent-primary group-hover:translate-x-1 transition-all" />
        </RouterLink>
      </nav>

      <!-- Footer area in mobile menu -->
      <div class="pt-6 border-t border-border-subtle space-y-4">
        <div class="font-mono text-xs text-content-muted">
          AI SYSTEMS ENGINEER · CHENNAI
        </div>
        <SocialLinks variant="pills" />
      </div>
    </div>
  </Transition>
</template>
