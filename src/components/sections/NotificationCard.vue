<template>
  <div 
    class="mx-4 mb-4 rounded-xl border border-border-color bg-transparent p-4 cursor-pointer active:opacity-80 transition-opacity relative"
    @click="$emit('click')"
  >
    <div class="flex items-start gap-3">
      <div class="flex-shrink-0">
        <div class="w-10 h-10 bg-notification-orange rounded-full flex items-center justify-center">
          <ChartBarIcon class="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div class="flex-1 min-w-0">
        <p class="text-xs text-text-tertiary mb-1">Bugün 06:00</p>
        
        <p class="text-sm font-semibold text-white mb-1 leading-tight">
          Aylık hesap özetin oluşturuldu.
        </p>
        
        <p class="text-xs text-text-secondary leading-relaxed line-clamp-2">
          Eylül ayında neler yaptığını görmek için tıkla
        </p>
      </div>
      
      <Badge :count="5" class="absolute -top-2 right-[7px] flex-shrink-0 z-10" />
    </div>
  </div>
</template>

<script setup>
import { ChartBarIcon } from '@heroicons/vue/24/outline'
import Badge from '../shared/Badge.vue'

defineEmits(['click'])
</script>
