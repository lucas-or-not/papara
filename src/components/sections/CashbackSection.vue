<template>
  <div class="px-4 mb-6">
    <button 
      class="mb-4 text-left"
      @click="$emit('header-click')"
    >
      <h3 class="text-xs uppercase text-text-secondary tracking-wide">CASHBACK →</h3>
    </button>
    
    <div class="rounded-2xl bg-[#1C1C1E] border border-border-color px-4 pt-4">
      <div class="flex items-start gap-3 mb-3">
        <div class="w-10 h-10 rounded-lg bg-[#000000] flex items-center justify-center flex-shrink-0">
          <LockClosedIcon class="w-5 h-5 text-white" />
        </div>
        
        <div class="flex-1 flex flex-col gap-0.5">
          <p class="text-sm font-medium text-white">₺500 harcama hedefini tamamla.</p>
          <p class="text-xs text-text-secondary">Cashback kazanmaya başla.</p>
        </div>
        
        <button 
          class="w-6 h-6 rounded-full flex items-center justify-center text-text-tertiary flex-shrink-0 active:opacity-60 transition-opacity"
          @click="$emit('help-click')"
        >
          <QuestionMarkCircleIcon class="w-3 h-3" />
        </button>
      </div>
      
      <div class="h-px bg-border-color mb-3"></div>
      
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-1">
          <span class="text-sm font-bold text-white">₺{{ formatAmount(remainingAmount) }} kaldı</span>
          <InformationCircleIcon class="w-3.5 h-3.5 text-text-tertiary" />
        </div>
        <span class="text-xs text-text-secondary">%{{ progressPercentage }} Tamamlandı</span>
      </div>
      
      <div class="w-full h-1.5 bg-bg-secondary rounded-full mb-3 overflow-hidden">
        <div 
          class="h-full bg-yellow-400 transition-all duration-300"
          :style="{ width: `${progressPercentage}%` }"
        ></div>
      </div>
      
      <div class="bg-[#000000] border-t border-border-color -mx-4 px-4 py-3 mt-3 rounded-b-2xl">
        <div class="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory -webkit-overflow-scrolling-touch">
        <div
          v-for="campaign in campaigns"
          :key="campaign.id"
          class="min-w-[280px] relative flex-shrink-0 snap-start cursor-pointer active:opacity-80 transition-opacity"
          @click="$emit('campaign-click', campaign.id)"
        >
            <div class="absolute top-0 right-0 w-10 h-10 rounded-lg rounded-tl-none rounded-br-none bg-[#2A2A2A] backdrop-blur-sm flex items-center justify-center z-10">
              <LockClosedIcon class="w-4 h-4 text-white" />
            </div>
          <div class="rounded-xl bg-[#000000] border-4 border-border-color overflow-hidden p-4">
            <div class="flex gap-4">
              <div class="flex-1 flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <StarIcon class="w-3 h-3 text-[#FFD700]" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-white">{{ campaign.month }}</span>
                    <span class="text-xs text-text-tertiary">{{ campaign.year }}</span>
                  </div>
                </div>
                
                <div class="bg-yellow-400 px-3 py-1.5 rounded-lg inline-block w-fit">
                  <span class="text-xl font-bold text-black">₺{{ campaign.amount }}</span>
                </div>
                
                <div class="text-sm font-medium text-white">
                  anında nakit kazan
                </div>
                
                <div class="flex items-center mt-2">
                  <div 
                    v-for="(brand, index) in campaign.brands" 
                    :key="brand.name"
                    class="w-8 h-8 rounded-full bg-bg-primary border-2 border-[#000000] flex items-center justify-center text-xs text-white font-semibold"
                    :class="index > 0 ? '-ml-2' : ''"
                    :title="brand.name"
                  >
                    {{ brand.initial }}
                  </div>
                </div>
              </div>
              
              <div class="w-32 h-32 flex-shrink-0 relative">
                <img 
                  :src="cashbackImage" 
                  alt="Cashback promotion"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { LockClosedIcon, QuestionMarkCircleIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/solid'
import cashbackImage from '@/assets/images/cashback-promo.png'

const props = defineProps({
  targetAmount: {
    type: Number,
    default: 500
  },
  spentAmount: {
    type: Number,
    default: 0
  }
})

const remainingAmount = computed(() => props.targetAmount - props.spentAmount)
const progressPercentage = computed(() => {
  return Math.min(Math.round((props.spentAmount / props.targetAmount) * 100), 100)
})

const formatAmount = (amount) => {
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

const campaigns = [
  {
    id: 1,
    month: 'Ekim',
    year: '2025',
    amount: 960,
    description: 'anında nakit kazan',
    brands: [
      { name: 'OpenAI', initial: 'O' },
      { name: 'TEMU', initial: 'T' },
      { name: 'Uber', initial: 'U' }
    ]
  },
  {
    id: 2,
    month: 'Kasım',
    year: '2025',
    amount: 1200,
    description: 'anında nakit kazan',
    brands: [
      { name: 'SHEIN', initial: 'S' },
      { name: 'TEMU', initial: 'T' },
      { name: 'Uber', initial: 'U' }
    ]
  }
]

defineEmits(['header-click', 'help-click', 'campaign-click'])
</script>
