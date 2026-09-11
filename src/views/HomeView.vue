<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import OriginChapter from '@/components/home/OriginChapter.vue'
import ProgrammingChapter from '@/components/home/ProgrammingChapter.vue'
import SelectedWork from '@/components/home/SelectedWork.vue'
import FeaturedCaseStudy from '@/components/home/FeaturedCaseStudy.vue'
import FieldNotes from '@/components/home/FieldNotes.vue'
import ProfessionalExperience from '@/components/home/ProfessionalExperience.vue'
import ContactSection from '@/components/home/ContactSection.vue'
</script>

<template>
  <div class="homepage-flow space-y-16 sm:space-y-24 md:space-y-32 lg:space-y-36">
    <!-- 01 HERO -->
    <HeroSection />

    <!-- 02 WHERE IT STARTED -->
    <OriginChapter />

    <!-- 03 PROGRAMMING BECAME THE MEDIUM -->
    <ProgrammingChapter />

    <!-- 04 SELECTED WORK -->
    <SelectedWork />

    <!-- 05 ONE FEATURED CASE STUDY -->
    <FeaturedCaseStudy />

    <!-- 06 TWO FIELD NOTES -->
    <FieldNotes />

    <!-- 07 PROFESSIONAL EXPERIENCE -->
    <ProfessionalExperience />

    <!-- 08 CONTACT -->
    <ContactSection />
  </div>
</template>
