<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { X, ArrowRight } from 'lucide-vue-next'

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

let originalOverflow = ''

const lockScroll = () => {
  if (typeof document !== 'undefined') {
    originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
}

const unlockScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = originalOverflow || ''
  }
}

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      lockScroll()
    } else {
      unlockScroll()
    }
  },
  { immediate: true }
)

// Auto close on route change
watch(
  () => route.fullPath,
  () => {
    if (props.isOpen) {
      emit('close')
    }
  }
)

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

const handleResize = () => {
  if (window.innerWidth >= 768 && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('resize', handleResize)
  if (props.isOpen) {
    lockScroll()
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('resize', handleResize)
  unlockScroll()
})

const isActive = (path: string) => {
  return route.path === path || (path !== '/' && route.path.startsWith(path))
}
</script>

<template>
  <Teleport to="body">
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
        class="fixed inset-0 z-[100] w-full min-h-[100dvh] overflow-y-auto backdrop-blur-sm flex flex-col justify-between p-6 sm:p-8"
        style="background: rgba(8, 9, 11, 0.99);"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <!-- Top header bar in mobile menu -->
        <div class="flex items-center justify-between pb-6 border-b border-border-subtle">
          <RouterLink
            to="/"
            class="font-mono text-sm tracking-wider font-semibold text-content-main hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
            @click="emit('close')"
          >
            SARATH.
          </RouterLink>

          <button
            type="button"
            class="p-2.5 rounded-lg text-content-secondary hover:text-content-main bg-dark-card border border-border-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer"
            aria-label="Close navigation menu"
            @click="emit('close')"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Navigation links -->
        <nav class="flex flex-col py-6 my-auto" aria-label="Mobile Navigation Links">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center justify-between text-2xl sm:text-3xl font-bold tracking-tight py-4 border-b border-border-subtle group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
            :class="isActive(item.path) ? 'text-content-main' : 'text-content-secondary hover:text-content-main'"
            @click="emit('close')"
          >
            <span class="inline-flex items-center gap-3">
              <span
                v-if="isActive(item.path)"
                class="w-2 h-2 rounded-full bg-accent-primary shrink-0"
              ></span>
              <span :class="{ 'text-accent-primary': isActive(item.path) }">
                {{ item.label }}
              </span>
            </span>
            <ArrowRight
              class="w-5 h-5 transition-all"
              :class="
                isActive(item.path)
                  ? 'text-accent-primary translate-x-0.5'
                  : 'text-content-muted group-hover:text-accent-primary group-hover:translate-x-1'
              "
            />
          </RouterLink>
        </nav>

        <!-- Social row inside mobile menu: exactly GitHub, LinkedIn, Email -->
        <div class="pt-6 border-t border-border-subtle flex items-center gap-6 sm:gap-8">
          <a
            href="https://github.com/Sarath-Sivakumar"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sarath-sivakumar"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sarathputhenvila@gmail.com"
            class="text-sm font-medium text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
          >
            Email
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
