<template>
  <div class="mb-6">
    <div 
      class="relative overflow-hidden"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div 
        class="flex transition-transform duration-300 ease-out"
        :style="{ transform: `translateX(-${activeCardIndex * 100}%)` }"
      >
        <div 
          v-for="(card, index) in cards" 
          :key="index"
          class="min-w-full px-4"
        >
          <div class="rounded-2xl bg-bg-card border border-border-color p-4 shadow-lg">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-6 h-6 rounded-full bg-[#E30A17] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <CurrencyDollarIcon class="w-5 h-5 text-white" />
              </div>
              <h2 class="text-base font-medium text-text-secondary">Türk Lirası Hesabı</h2>
            </div>
            
            <div class="h-px bg-border-color mb-3"></div>
            
            <div class="flex items-center justify-start mb-3">
              <div class="flex items-center gap-2">
                <span class="text-3xl font-bold text-white">₺{{ formatBalance(card.balance) }}</span>
                <button 
                  class="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary active:opacity-60 transition-opacity"
                  @click.stop="$emit('balance-toggle')"
                >
                  <InformationCircleIcon class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            
            <div class="mb-4">
              <p class="text-sm text-text-tertiary">IBAN'in: {{ maskIban(card.iban) }}</p>
            </div>
            
            <div class="flex gap-3">
              <button 
                class="flex-1 flex items-center justify-between px-4 py-3 bg-bg-secondary border border-border-color rounded-lg text-white text-sm font-medium active:opacity-80 transition-opacity"
                @click="$emit('deposit-click')"
              >
                <span>Yatır / Çek</span>
                <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <CreditCardIcon class="w-4 h-4 text-[#2C2C2C]" />
                </div>
              </button>
              
              <button 
                class="flex-1 flex items-center justify-between px-4 py-3 bg-bg-secondary border border-border-color rounded-lg text-white text-sm font-medium active:opacity-80 transition-opacity"
                @click="$emit('send-click')"
              >
                <span>Gönder</span>
                <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <PaperAirplaneIcon class="w-4 h-4 text-[#2C2C2C]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(dot, index) in dots"
        :key="index"
        class="w-2 h-2 rounded-full transition-all"
        :class="index === activeCardIndex ? 'bg-white' : 'bg-text-tertiary'"
        @click="activeCardIndex = index"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { InformationCircleIcon, CreditCardIcon, PaperAirplaneIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  balance: {
    type: Number,
    default: 0
  },
  iban: {
    type: String,
    default: 'TR05 0001 0009 9901 4447 7850 13'
  }
})

const activeCardIndex = ref(0)
const dots = ref([1, 2, 3, 4, 5])

const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const swipeDistance = touchStartX.value - touchEndX.value
  const minSwipeDistance = 50

  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0 && activeCardIndex.value < cards.value.length - 1) {
      activeCardIndex.value++
    } else if (swipeDistance < 0 && activeCardIndex.value > 0) {
      activeCardIndex.value--
    }
  }
}

const cards = ref([
  {
    balance: props.balance,
    iban: props.iban
  },
  {
    balance: 0,
    iban: 'TR05 0001 0009 9901 4447 7850 14'
  },
  {
    balance: 0,
    iban: 'TR05 0001 0009 9901 4447 7850 15'
  },
  {
    balance: 0,
    iban: 'TR05 0001 0009 9901 4447 7850 16'
  },
  {
    balance: 0,
    iban: 'TR05 0001 0009 9901 4447 7850 17'
  }
])

const formatBalance = (amount) => {
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

const maskIban = (iban) => {
  if (iban.startsWith('TR05')) {
    return 'TR05 **** **** ****'
  }
  const parts = iban.split(' ')
  if (parts.length > 0) {
    return `${parts[0]} **** **** ****`
  }
  return iban
}

defineEmits(['deposit-click', 'send-click', 'balance-toggle'])
</script>
