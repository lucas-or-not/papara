<template>
  <div class="px-4 mb-6">
    <button 
      class="mb-4 text-left w-full"
      @click="$emit('header-click')"
    >
      <h3 class="text-xs uppercase text-text-secondary tracking-wide">HESAP HAREKETLERİ →</h3>
    </button>
    
    <div class="flex flex-col gap-4">
      <button
        v-for="transaction in transactions" 
        :key="transaction.id"
        class="flex items-center gap-4 w-full text-left active:opacity-60 transition-opacity"
        @click="$emit('transaction-click', transaction.id)"
      >
        <div class="flex-shrink-0">
          <div 
            class="w-12 h-12 rounded-full flex items-center justify-center"
            :style="{ background: transaction.logoColor }"
          >
            <component :is="transaction.logoComponent" />
          </div>
        </div>
        
        <div class="flex-1 flex flex-col gap-0.5 min-w-0">
          <div class="text-base font-medium text-white">{{ transaction.name }}</div>
          <div class="text-sm text-text-secondary">{{ transaction.type }}</div>
        </div>
        
        <div class="flex-shrink-0 flex flex-col items-end gap-0.5">
          <div 
            class="text-lg font-bold"
            :class="transaction.isIncoming ? 'text-green-500' : 'text-red-500'"
          >
            ₺{{ formatAmount(transaction.amount) }}
          </div>
          <div class="text-xs text-text-tertiary">{{ transaction.date }}</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { BuildingOfficeIcon } from '@heroicons/vue/24/outline'

const OZLogo = () => h('div', {
  class: 'text-white font-bold text-base'
}, 'OZ')

const GarantiBBVALogo = () => h(BuildingOfficeIcon, {
  class: 'w-7 h-7 text-white'
})

const transactions = [
  {
    id: 1,
    name: 'Hidayet Salt',
    type: 'FAST Para Transferi',
    amount: 20000.00,
    date: '14 Eylül 2025 20:14',
    logoColor: '#667eea',
    logoComponent: OZLogo,
    isIncoming: false
  },
  {
    id: 2,
    name: 'Garanti BBVA',
    type: 'FAST Para Transferi',
    amount: 20000.00,
    date: '14 Eylül 2025 20:12',
    logoColor: '#43e97b',
    logoComponent: GarantiBBVALogo,
    isIncoming: true
  }
]

const formatAmount = (amount) => {
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

defineEmits(['transaction-click', 'header-click'])
</script>
