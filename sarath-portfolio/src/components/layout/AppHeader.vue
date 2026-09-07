<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu } from 'lucide-vue-next'
import MobileMenu from './MobileMenu.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Work', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Lab', path: '/lab' },
  { label: 'Now', path: '/now' },
  { label: 'Contact', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
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
    :class="[
      'sticky top-0 z-40 w-full h-[72px] transition-all duration-200 flex items-center border-b',
      isScrolled
        ? 'bg-dark-bg/85 backdrop-blur-md border-border-subtle shadow-sm'
        : 'bg-transparent border-transparent'
    ]"
  >
    <div class="w-full max-w-container mx-auto px-5 sm:px-6 md:px-8 flex items-center justify-between">
      <!-- Brand Logo / Name -->
      <RouterLink
        to="/"
        class="group flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-content-main hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
      >
        <span>SARATH SIVAKUMAR</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8" aria-label="Main Navigation">
        <ul class="flex items-center gap-6 text-sm font-medium">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="relative py-1 text-content-secondary hover:text-content-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
              :class="{
                '!text-content-main font-semibold': route.path === item.path || (item.path !== '/' && route.path.startsWith(item.path))
              }"
            >
              {{ item.label }}
              <span
                v-if="route.path === item.path || (item.path !== '/' && route.path.startsWith(item.path))"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-primary rounded-full"
              ></span>
            </RouterLink>
          </li>
        </ul>

        <!-- Optional Social icons header slot -->
        <div class="pl-4 border-l border-border-subtle hidden lg:block">
          <SocialLinks variant="icons" />
        </div>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button
        type="button"
        class="md:hidden p-2 rounded-lg text-content-secondary hover:text-content-main bg-dark-card border border-border-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary"
        aria-label="Open navigation menu"
        @click="isMobileMenuOpen = true"
      >
        <Menu class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <MobileMenu
      :is-open="isMobileMenuOpen"
      :nav-items="navItems"
      @close="isMobileMenuOpen = false"
    />
  </header>
</template>
