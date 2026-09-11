<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu } from 'lucide-vue-next'
import MobileMenu from './MobileMenu.vue'
import ThemeToggle from '@/components/common/ThemeToggle.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/projects' },
  { label: 'Notes', path: '/blog' },
  { label: 'Contact', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="site-header"
    :class="{ 'is-scrolled': isScrolled }"
  >
    <div class="w-full max-w-container mx-auto px-5 sm:px-6 md:px-8 flex items-center justify-between">
      <!-- Brand Logo / Wordmark -->
      <RouterLink
        to="/"
        class="font-sans text-xs sm:text-sm tracking-[0.14em] font-semibold text-content-main hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded shrink-0 uppercase"
      >
        SARATH SIVAKUMAR
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
        <ul class="flex items-center gap-6 lg:gap-7 text-sm">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="relative py-1 text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
              :class="{
                '!text-content-main font-semibold': (item.path === '/' && route.path === '/') || (item.path !== '/' && route.path.startsWith(item.path))
              }"
            >
              {{ item.label }}
              <span
                v-if="(item.path === '/' && route.path === '/') || (item.path !== '/' && route.path.startsWith(item.path))"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-primary rounded-full"
              ></span>
            </RouterLink>
          </li>
        </ul>

        <!-- Bare Theme Icon Only -->
        <div class="flex items-center pl-3 border-l border-border-subtle">
          <ThemeToggle />
        </div>
      </nav>

      <!-- Mobile Right Controls (THEME ICON then HAMBURGER) -->
      <div class="md:hidden flex items-center gap-1 shrink-0">
        <ThemeToggle />
        <button
          type="button"
          class="w-10 h-10 inline-flex items-center justify-center rounded-lg text-content-secondary hover:text-content-main bg-transparent border-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary cursor-pointer"
          aria-label="Open navigation menu"
          @click="isMobileMenuOpen = true"
        >
          <Menu class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <MobileMenu
      :is-open="isMobileMenuOpen"
      :nav-items="navItems"
      @close="isMobileMenuOpen = false"
    />
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 60px; /* Mobile target: 56–64px */
  display: flex;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    backdrop-filter 180ms ease,
    -webkit-backdrop-filter 180ms ease;
}

@media (min-width: 768px) {
  .site-header {
    height: 68px; /* Desktop target: 64–72px */
  }
}

/* Scrolled state: Fallback when backdrop-filter is unsupported */
.site-header.is-scrolled {
  background-color: var(--header-fallback-bg);
  border-bottom: 1px solid var(--header-glass-border);
}

/* Scrolled state: Enhanced frosted glass with backdrop-filter */
@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
  .site-header.is-scrolled {
    background-color: var(--header-glass-bg);
    backdrop-filter: var(--header-glass-blur);
    -webkit-backdrop-filter: var(--header-glass-blur);
    border-bottom: 1px solid var(--header-glass-border);
  }
}
</style>
