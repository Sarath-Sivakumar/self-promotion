<script setup lang="ts">
import SocialLinks from '@/components/common/SocialLinks.vue'
import { Coffee, FileText } from 'lucide-vue-next'
import { BUY_ME_A_COFFEE_URL } from '@/data/socials'
import { siteConfig } from '@/config/site'
</script>

<template>
  <footer class="w-full border-t border-border-subtle bg-[var(--page-bg)] py-12 mt-20">
    <div class="max-w-container mx-auto px-5 sm:px-6 md:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Left: Copyright and Title -->
        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-sans text-content-muted text-center sm:text-left">
          <span class="text-content-secondary font-medium">© 2026 Sarath Sivakumar</span>
          <span class="hidden sm:inline-block w-1 h-1 rounded-full bg-border-subtle"></span>
          <span>AI Systems Engineer · Chennai, India</span>
        </div>

        <!-- Center / Right: Resume, Social Links & subtle coffee link -->
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-sans">
          <a
            :href="siteConfig.resume.url"
            :download="siteConfig.resume.downloadName"
            :aria-label="siteConfig.resume.ariaLabel"
            class="inline-flex items-center gap-1.5 text-content-secondary hover:text-accent-primary transition-colors group px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary font-medium"
          >
            <FileText class="w-3.5 h-3.5 text-accent-primary group-hover:scale-110 transition-transform" />
            <span>Download Resume ↓</span>
          </a>
          <span class="w-1 h-1 rounded-full bg-border-subtle hidden sm:inline-block"></span>
          <SocialLinks variant="icons" />
          <span class="w-1 h-1 rounded-full bg-border-subtle hidden sm:inline-block"></span>
          <a
            :href="BUY_ME_A_COFFEE_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-content-secondary hover:text-content-main transition-colors group px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary font-medium"
            aria-label="Buy me a coffee on BuyMeACoffee.com (opens in new tab)"
          >
            <Coffee class="w-3.5 h-3.5 text-accent-primary group-hover:scale-110 transition-transform" />
            <span>Coffee</span>
          </a>
        </div>

        <!-- Right / Bottom: Subtle technical credit -->
        <div class="text-xs font-sans text-content-muted">
          <span>Engineering Field Journal</span>
        </div>
      </div>
    </div>
  </footer>
</template>
