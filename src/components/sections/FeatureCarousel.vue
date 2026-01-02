<template>
  <div class="py-4 px-4 mb-4">
    <div class="flex gap-4 overflow-x-auto overflow-y-visible px-4 scrollbar-hide snap-x snap-mandatory -webkit-overflow-scrolling-touch">
      <button 
        v-for="feature in features" 
        :key="feature.id"
        class="flex flex-col items-center gap-2 min-w-[80px] bg-transparent border-none cursor-pointer relative flex-shrink-0 snap-start active:scale-95 transition-transform"
        @click="$emit('feature-click', feature.id)"
      >
        <div class="relative pt-1">
          <div class="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
            <component :is="feature.iconComponent" />
          </div>
          <div 
            v-if="feature.pinned" 
            class="absolute top-0 right-0 w-5 h-5 bg-white border border-border-color rounded-full flex items-center justify-center z-10"
          >
            <ThumbtackIcon class="w-3 h-3 text-black" />
          </div>
        </div>
        <span class="text-xs text-center max-w-[80px] leading-tight font-normal text-text-secondary">{{ feature.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { 
  CreditCardIcon,
  ChartPieIcon, 
  BanknotesIcon 
} from '@heroicons/vue/24/outline'

const ThumbtackIcon = () => h('svg', {
  width: '12',
  height: '12',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  style: 'transform: rotate(45deg); transform-origin: center;'
}, [
  h('path', { 
    d: 'M12 2v6',
    fill: 'none'
  }),
  h('path', { 
    d: 'M9 2h6',
    fill: 'none'
  }),
  h('circle', { 
    cx: '12', 
    cy: '2', 
    r: '2.5',
    fill: 'currentColor'
  }),
  h('path', { 
    d: 'M12 8l-2 10h4l-2-10z',
    fill: 'currentColor'
  })
])

const createColoredIcon = (IconComponent, color) => () => h(IconComponent, {
  class: 'w-9 h-9',
  style: `color: ${color}`
})

const features = [
  {
    id: 'sticker',
    label: 'Papara Sticker Card',
    pinned: true,
    iconComponent: createColoredIcon(CreditCardIcon, '#FF6B9D')
  },
  {
    id: 'superman',
    label: 'Papara Superman Card',
    pinned: true,
    iconComponent: createColoredIcon(BanknotesIcon, '#4ECDC4')
  },
  {
    id: 'esans',
    label: 'e-Şans 150 TL Hediye',
    pinned: false,
    iconComponent: createColoredIcon(ChartPieIcon, '#FFE66D')
  },
  {
    id: 'investment',
    label: 'Yatırım Hesabı',
    pinned: false,
    iconComponent: createColoredIcon(CreditCardIcon, '#95E1D3')
  },
  {
    id: 'gold',
    label: 'Altın Hediye',
    pinned: false,
    iconComponent: createColoredIcon(BanknotesIcon, '#F38181')
  }
]

defineEmits(['feature-click'])
</script>
