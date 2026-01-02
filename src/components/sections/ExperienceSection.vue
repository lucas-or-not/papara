<template>
  <div class="px-4 mb-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xs uppercase text-text-secondary tracking-wide">DAHA İYİ BİR PAPARA DENEYİMİ →</h3>
      <span class="text-xs text-[#FFD700]">{{ currentStep }} / {{ totalSteps }}</span>
    </div>
    
    <div class="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory -webkit-overflow-scrolling-touch">
      <button 
        v-for="action in actions" 
        :key="action.id"
        class="flex items-center gap-3 px-4 py-4 bg-transparent border border-border-color rounded-xl cursor-pointer active:border-text-secondary transition-colors flex-shrink-0 min-w-[200px]"
        @click="$emit('action-click', action.id)"
      >
        <div class="w-12 h-12 rounded-full bg-[#F5F5DC] flex items-center justify-center flex-shrink-0">
          <component :is="action.iconComponent" />
        </div>
        
        <div class="flex-1 text-left">
          <p class="text-sm font-bold text-white leading-tight whitespace-pre-line">
            {{ action.label }}
          </p>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { ArrowUpIcon, CreditCardIcon, UserIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  currentStep: {
    type: Number,
    default: 2
  },
  totalSteps: {
    type: Number,
    default: 5
  }
})

const DepositIcon = () => h(ArrowUpIcon, { class: 'w-6 h-6', style: 'color: #2C2C2C' })
const CardRequestIcon = () => h(CreditCardIcon, { class: 'w-6 h-6', style: 'color: #2C2C2C' })
const ProfileIcon = () => h(UserIcon, { class: 'w-6 h-6', style: 'color: #2C2C2C' })

const actions = [
  {
    id: 'deposit',
    label: 'Hesabına\nPara Yatır',
    iconComponent: DepositIcon
  },
  {
    id: 'request-card',
    label: 'Papara Card\nİste',
    iconComponent: CardRequestIcon
  },
  {
    id: 'profile',
    label: 'Profil\nAyarları',
    iconComponent: ProfileIcon
  }
]

defineEmits(['action-click'])
</script>
