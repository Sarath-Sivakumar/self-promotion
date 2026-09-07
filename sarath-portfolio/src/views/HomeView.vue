<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'
import ExpertiseSection from '@/components/home/ExpertiseSection.vue'
import ExperiencePreview from '@/components/home/ExperiencePreview.vue'
import WritingPreview from '@/components/home/WritingPreview.vue'
import CurrentFocus from '@/components/home/CurrentFocus.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
</script>

<template>
  <div class="space-y-4">
    <!-- 1. Hero -->
    <HeroSection />

    <!-- 2. Featured Projects (Natasha, Echo, Debug Pilot) -->
    <FeaturedProjects />

    <!-- 3. Expertise / What I Work On -->
    <ExpertiseSection />

    <!-- 4. Experience Preview -->
    <ExperiencePreview />

    <!-- 5. Writing Preview -->
    <WritingPreview />

    <!-- 6. Current Focus -->
    <CurrentFocus />

    <!-- 7. Contact CTA -->
    <ContactCTA />
  </div>
</template>
