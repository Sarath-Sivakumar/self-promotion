<script setup lang="ts">
import SocialLinks from '@/components/common/SocialLinks.vue'
</script>

<template>
  <footer class="w-full border-t border-border-subtle bg-dark-bg/60 py-12 mt-20">
    <div class="max-w-container mx-auto px-5 sm:px-6 md:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Left: Copyright and Title -->
        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono text-content-muted text-center sm:text-left">
          <span class="text-content-secondary">© 2026 Sarath Sivakumar</span>
          <span class="hidden sm:inline-block w-1 h-1 rounded-full bg-border-subtle"></span>
          <span>AI Systems Engineer</span>
        </div>

        <!-- Center / Right: Social Links -->
        <div>
          <SocialLinks variant="icons" />
        </div>

        <!-- Right / Bottom: Subtle technical credit -->
        <div class="text-xs font-mono text-content-muted">
          <span>Built with Vue.</span>
        </div>
      </div>
    </div>
  </footer>
</template>
