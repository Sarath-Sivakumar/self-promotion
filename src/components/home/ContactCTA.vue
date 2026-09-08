<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'
</script>

<template>
  <section class="py-20 md:py-28" aria-label="Call to Action">
    <div class="p-8 sm:p-12 md:p-16 rounded-card bg-dark-card border border-border-subtle relative overflow-hidden">
      <!-- Background subtle gradient accent -->
      <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-2xl relative z-10">
        <div class="font-mono text-xs uppercase tracking-wider text-accent-primary mb-3 font-medium">
          INBOX OPEN
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-content-main mb-4 leading-tight">
          Come say hi.
        </h2>

        <p class="text-base sm:text-lg text-content-secondary leading-relaxed mb-8">
          Building something weird? Fighting an agent that refuses to behave? Or just want to talk about AI systems, backend architecture, or something completely different? My inbox is open.
        </p>

        <div class="flex flex-wrap items-center gap-4 mb-8">
          <AppButton to="/contact" variant="primary" size="lg">
            Say hello
          </AppButton>
        </div>

        <div class="pt-6 border-t border-border-subtle/60">
          <SocialLinks variant="pills" />
        </div>
      </div>
    </div>
  </section>
</template>
