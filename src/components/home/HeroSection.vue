<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import sarathPortrait from '@/assets/images/sarath.webp'
import { siteConfig } from '@/config/site'

const scrollToWork = () => {
  const element = document.getElementById('selected-work')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    class="hero relative min-h-[78vh] lg:min-h-[84vh] flex flex-col justify-center pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-border-subtle"
    aria-label="Introduction Hero"
  >
    <div class="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
      
      <!-- Text Column: Left 55-60% on Desktop -->
      <div class="md:col-span-7 lg:col-span-7 flex flex-col justify-center text-left relative z-10">
        
        <!-- Headline -->
        <h1 class="text-4xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05] mb-4 sm:mb-6">
          Hi, I'm Sarath.
        </h1>

        <!-- Primary Statement -->
        <p class="text-lg sm:text-2xl md:text-xl lg:text-3xl font-medium text-[var(--text-primary)] leading-snug max-w-xl mb-4 sm:mb-5">
          I've always been curious about how things work.
        </p>

        <!-- Body -->
        <p class="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mb-6 sm:mb-8">
          Programming became the way I turn that curiosity into things people can actually use.
        </p>

        <!-- Mobile Integrated Editorial Cutout (< 768px) -->
        <div class="md:hidden w-full my-4 mb-8 flex justify-center items-end select-none pointer-events-none">
          <div class="mobile-portrait-stage relative w-full max-w-[335px] sm:max-w-[380px] flex items-end justify-center">
            <!-- Organic Layered Contour Field (Atmospheric, diffused, calm background washes) -->
            <div class="heroContourLayer portrait-contour-field-mobile" aria-hidden="true">
              <svg
                viewBox="0 0 1400 1100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="contour-svg"
              >
                <defs>
                  <filter id="contour-soft-diffusion-mobile" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="34" />
                  </filter>
                </defs>
                <!-- Layer 1: Atmospheric Primary Wash (Gentle sweep behind torso/shoulders, no bottom mass) -->
                <path
                  d="M 1600,240 C 1280,260 980,360 760,460 C 580,550 500,640 530,720 C 560,780 700,820 920,790 C 1180,750 1420,660 1600,610 Z"
                  fill="var(--contour-layer-1)"
                  filter="url(#contour-soft-diffusion-mobile)"
                />
                <!-- Layer 3: Restrained Accent (Soft muted depth off lateral flank) -->
                <path
                  d="M 1600,420 C 1340,450 1120,500 980,560 C 860,610 820,680 890,730 C 980,770 1180,760 1600,720 Z"
                  fill="var(--contour-accent)"
                  filter="url(#contour-soft-diffusion-mobile)"
                />
                <!-- Layer 2: Upper Halo Sweep (Soft sweep behind upper shoulder/head) -->
                <path
                  d="M 1600,50 C 1300,80 1020,170 840,270 C 700,350 640,430 670,490 C 700,540 820,560 1000,530 C 1220,490 1440,420 1600,370 Z"
                  fill="var(--contour-layer-2)"
                  filter="url(#contour-soft-diffusion-mobile)"
                />
              </svg>
            </div>
            
            <!-- Mobile Cutout: head, shoulders, upper chest prominent with smooth bottom fade -->
            <div class="heroPortrait portrait-crop-mobile relative z-10 w-full flex items-start justify-center">
              <img
                :src="sarathPortrait"
                alt="Sarath Sivakumar"
                width="1086"
                height="1448"
                class="portrait-img-mobile"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>

        <!-- Actions: Exactly 1 primary filled button + 1 lightweight secondary text action -->
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 z-10">
          <!-- Primary Filled CTA -->
          <AppButton
            to="#selected-work"
            variant="primary"
            size="lg"
            class="sm:!px-8 sm:!py-3.5 !text-sm sm:!text-base font-semibold"
            @click="scrollToWork"
          >
            <span>Explore my work</span>
            <span class="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
          </AppButton>

          <!-- Secondary Lightweight Text Action -->
          <a
            :href="siteConfig.resume.url"
            :download="siteConfig.resume.downloadName"
            :aria-label="siteConfig.resume.ariaLabel"
            class="group inline-flex items-center gap-1.5 py-2 px-1 text-sm sm:text-base font-medium text-[var(--text-primary)]/80 hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded cursor-pointer whitespace-nowrap"
          >
            <span>Download Resume</span>
            <span class="text-[var(--text-primary)]/70 group-hover:text-[var(--text-primary)] transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>

      </div>

      <!-- Desktop Portrait Column: Right 40-45% on Desktop (768px+) -->
      <div class="hidden md:flex md:col-span-5 lg:col-span-5 h-full items-end justify-center lg:justify-end select-none pointer-events-none relative z-0 md:-mr-2 lg:-mr-4 xl:-mr-6">
        <div class="desktop-portrait-stage relative w-full max-w-[490px] lg:max-w-[560px] xl:max-w-[610px] flex items-end justify-center lg:justify-end">
          
          <!-- Organic Layered Contour Field (Atmospheric, diffused, calm background washes) -->
          <div class="heroContourLayer portrait-contour-field" aria-hidden="true">
            <svg
              viewBox="0 0 1600 1100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="contour-svg"
            >
              <defs>
                <filter id="contour-soft-diffusion" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="38" />
                </filter>
              </defs>
              <!-- Layer 1: Atmospheric Primary Wash (Gentle sweep behind torso/shoulders, no bottom mass) -->
              <path
                d="M 1850,260 C 1480,280 1180,380 940,480 C 740,570 660,660 690,740 C 720,800 880,830 1120,790 C 1380,750 1650,650 1850,600 Z"
                fill="var(--contour-layer-1)"
                filter="url(#contour-soft-diffusion)"
              />
              <!-- Layer 3: Restrained Accent (Soft muted depth off lateral flank) -->
              <path
                d="M 1850,430 C 1540,460 1280,510 1120,570 C 980,620 940,690 1020,740 C 1120,780 1340,770 1850,730 Z"
                fill="var(--contour-accent)"
                filter="url(#contour-soft-diffusion)"
              />
              <!-- Layer 2: Upper Halo Sweep (Soft sweep behind upper shoulder/head) -->
              <path
                d="M 1850,50 C 1500,80 1200,170 1000,280 C 840,360 780,440 810,500 C 840,550 970,570 1160,540 C 1400,500 1650,420 1850,370 Z"
                fill="var(--contour-layer-2)"
                filter="url(#contour-soft-diffusion)"
              />
            </svg>
          </div>

          <!-- Editorial Cutout: Head, shoulders, upper torso with zero side clipping -->
          <div class="heroPortrait portrait-crop-desktop relative z-10 w-full flex items-start justify-center">
            <img
              :src="sarathPortrait"
              alt="Sarath Sivakumar"
              width="1086"
              height="1448"
              class="portrait-img-desktop"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes portrait-enter {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==========================================================================
   CONTOUR LAYER (Background Organic Artwork)
   Separated from portrait clipping container.
   Expands freely beyond portrait bounds and hero with overflow: visible.
   ========================================================================== */
.heroContourLayer {
  position: absolute;
  pointer-events: none;
  overflow: visible;
  z-index: 0;
}

/* Organic Layered Contour Field: Desktop */
.portrait-contour-field {
  position: absolute;
  top: -18%;
  right: -55%;
  width: 210%;
  height: 155%;
  pointer-events: none;
  z-index: 0;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Organic Layered Contour Field: Mobile */
.portrait-contour-field-mobile {
  position: absolute;
  top: -14%;
  left: 50%;
  transform: translateX(-50%);
  width: 180%;
  height: 140%;
  pointer-events: none;
  z-index: 0;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contour-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* ==========================================================================
   DESKTOP PORTRAIT (768px+)
   Preserves head, face, beard, shoulders, upper chest sharp.
   Fades lower shirt cleanly into active background with zero horizontal cutoff.
   ========================================================================== */
.desktop-portrait-stage {
  animation: portrait-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow: visible;
}

.heroPortrait,
.portrait-crop-desktop {
  width: 100%;
  height: auto;
  overflow: visible;
}

.portrait-img-desktop {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: top center;
  user-select: none;
  pointer-events: none;
  mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 46%,
    rgba(0, 0, 0, 0.94) 54%,
    rgba(0, 0, 0, 0.78) 62%,
    rgba(0, 0, 0, 0.48) 70%,
    rgba(0, 0, 0, 0.22) 77%,
    rgba(0, 0, 0, 0.05) 83%,
    rgba(0, 0, 0, 0) 87%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 46%,
    rgba(0, 0, 0, 0.94) 54%,
    rgba(0, 0, 0, 0.78) 62%,
    rgba(0, 0, 0, 0.48) 70%,
    rgba(0, 0, 0, 0.22) 77%,
    rgba(0, 0, 0, 0.05) 83%,
    rgba(0, 0, 0, 0) 87%
  );
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
}

/* ==========================================================================
   MOBILE PORTRAIT (< 768px)
   Editorial cutout: head, shoulders, chest prominent.
   Lower edge dissolves smoothly into active background with no cutoff.
   ========================================================================== */
.mobile-portrait-stage {
  animation: portrait-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow: visible;
}

.portrait-crop-mobile {
  width: 100%;
  height: auto;
  overflow: visible;
}

.portrait-img-mobile {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: top center;
  user-select: none;
  pointer-events: none;
  mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 48%,
    rgba(0, 0, 0, 0.95) 58%,
    rgba(0, 0, 0, 0.75) 68%,
    rgba(0, 0, 0, 0.35) 80%,
    rgba(0, 0, 0, 0) 92%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 48%,
    rgba(0, 0, 0, 0.95) 58%,
    rgba(0, 0, 0, 0.75) 68%,
    rgba(0, 0, 0, 0.35) 80%,
    rgba(0, 0, 0, 0) 92%
  );
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
}
</style>
