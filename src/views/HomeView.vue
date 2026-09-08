<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'
import ExpertiseSection from '@/components/home/ExpertiseSection.vue'
import SupportMoment from '@/components/home/SupportMoment.vue'
import ExperiencePreview from '@/components/home/ExperiencePreview.vue'
import WritingPreview from '@/components/home/WritingPreview.vue'
import LinkedInSection from '@/components/home/LinkedInSection.vue'
import CurrentFocus from '@/components/home/CurrentFocus.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
</script>

<template>
  <div class="space-y-4">
    <!-- 1. Hero: Sarath introduction + portrait -->
    <HeroSection />

    <!-- 2. Things I'm Building (Natasha, Echo, Debug Pilot) -->
    <FeaturedProjects />

    <!-- Editorial Bridge: Projects -> Engineering Focus -->
    <div class="pt-12 pb-4 md:pt-16 md:pb-6 max-w-2xl">
      <p class="text-lg sm:text-xl text-content-secondary font-medium leading-relaxed text-editorial">
        Building these systems keeps pulling me back to the same few engineering problems.
      </p>
    </div>

    <!-- 3. What I Spend My Time On / Expertise -->
    <ExpertiseSection />

    <!-- Editorial Bridge: Focus -> Support -->
    <div class="pt-12 pb-4 md:pt-16 md:pb-6 max-w-2xl">
      <p class="text-lg sm:text-xl text-content-secondary font-medium leading-relaxed text-editorial">
        And occasionally, something I learn while doing this turns out to be useful to someone else.
      </p>
    </div>

    <!-- 4. Buy Me a Coffee / Fuel the Next Rabbit Hole -->
    <SupportMoment />

    <!-- 5. Where I Do This Professionally / Experience -->
    <ExperiencePreview />

    <!-- Editorial Bridge: Experience -> Writing -->
    <div class="pt-12 pb-4 md:pt-16 md:pb-6 max-w-2xl">
      <p class="text-lg sm:text-xl text-content-secondary font-medium leading-relaxed text-editorial">
        Most of those problems eventually turn into notes.
      </p>
    </div>

    <!-- 6. Things I'm Figuring Out / Writing -->
    <WritingPreview />

    <!-- 7. Elsewhere on the Internet / LinkedIn -->
    <LinkedInSection />

    <!-- 8. Currently / Current Focus -->
    <CurrentFocus />

    <!-- 8. Come Say Hi / Contact CTA -->
    <ContactCTA />
  </div>
</template>
