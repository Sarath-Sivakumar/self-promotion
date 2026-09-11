<script setup lang="ts">
import StoreBadges from '@/components/project/StoreBadges.vue'
import type { ProjectStoreLink } from '@/data/projects'
import { ShoppingBag, Sparkles, Check } from 'lucide-vue-next'

interface Props {
  stores?: ProjectStoreLink[]
}

defineProps<Props>()
</script>

<template>
  <div class="w-full flex flex-col items-center py-6">
    <!-- Restrained Generic Device Frame (Compliant with Client Asset & Copyright Guidelines) -->
    <div
      class="relative w-[300px] sm:w-[340px] rounded-[42px] p-3.5 bg-gradient-to-b from-[#2A2D35] via-[#1A1C23] to-[#0E1015] border-[3px] border-[#383B45] shadow-2xl"
      aria-label="Growva generic mobile app interface preview"
    >
      <!-- Dynamic Island / Speaker Pill -->
      <div class="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2">
        <span class="w-2 h-2 rounded-full bg-[#1A1D24] block"></span>
      </div>

      <!-- Phone Screen Canvas -->
      <div class="relative w-full h-[580px] rounded-[32px] bg-[#0A0D12] text-content-main overflow-hidden flex flex-col justify-between border border-white/5 pt-8 pb-6 px-5 select-none">
        
        <!-- Screen Content Header -->
        <div class="space-y-4">
          <!-- Top App Bar -->
          <div class="flex items-center justify-between pt-2 pb-2 border-b border-white/10">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShoppingBag class="w-4 h-4" />
              </div>
              <span class="font-bold text-lg tracking-tight text-white">Growva</span>
            </div>
            <span class="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
              Mobile App
            </span>
          </div>

          <!-- Hero Value Proposition Banner -->
          <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-dark-card to-dark-card border border-emerald-500/20">
            <div class="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold mb-1">
              <Sparkles class="w-3 h-3" />
              <span>FRESH PRODUCE & GROCERIES</span>
            </div>
            <h4 class="text-base font-bold text-white mb-1">
              Fresh groceries, delivered across Kerala.
            </h4>
            <p class="text-xs text-content-secondary leading-relaxed">
              A cross-platform grocery shopping experience for fresh produce and everyday essentials, available to customers across Kerala.
            </p>
          </div>

          <!-- Clean Service Scope (Restrained Visuals - Kerala / iOS & Android) -->
          <div class="space-y-3 pt-2">
            <div class="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-2">
              <span class="text-xs font-semibold text-content-main">Cross-Platform Experience</span>
              <p class="text-xs text-content-secondary leading-relaxed">
                Designed and built for iOS and Android customers across Kerala.
              </p>
            </div>
          </div>
        </div>

        <!-- Restrained Bottom Checkout Wireframe -->
        <div class="pt-3 border-t border-white/10 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono text-content-muted">
            <span>PLATFORMS</span>
            <span class="text-emerald-400 font-semibold">iOS & Android</span>
          </div>
          <div class="w-full py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs text-center flex items-center justify-center gap-1.5">
            <Check class="w-3.5 h-3.5" />
            <span>Available on App Store & Google Play</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Official Store Badges Row Under Device Frame -->
    <div v-if="stores && stores.length" class="mt-6">
      <StoreBadges :stores="stores" app-name="Growva" />
    </div>
  </div>
</template>
