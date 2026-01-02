<template>
  <nav 
    class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-mobile flex justify-around items-center bg-bg-secondary py-3 z-[100]"
    :style="{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }"
  >
    <button 
      v-for="item in navItems" 
      :key="item.id"
      class="flex flex-col items-center gap-1.5 bg-transparent border-none cursor-pointer flex-1 transition-colors"
      :class="activeItem === item.id ? 'text-white' : 'text-text-secondary'"
      @click="handleNavClick(item.id)"
    >
      <div class="flex items-center justify-center">
        <component :is="item.iconComponent" class="w-6 h-6" />
      </div>
      <span class="text-xs text-center">{{ item.label }}</span>
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { 
  HomeIcon, 
  QrCodeIcon, 
  PaperAirplaneIcon, 
  DocumentTextIcon, 
  CreditCardIcon 
} from '@heroicons/vue/24/outline'

const activeItem = ref('home')

const navItems = [
  {
    id: 'home',
    label: 'Ana Sayfa',
    iconComponent: HomeIcon
  },
  {
    id: 'qr',
    label: 'QR İşlemleri',
    iconComponent: QrCodeIcon
  },
  {
    id: 'transfer',
    label: 'Para Transferi',
    iconComponent: PaperAirplaneIcon
  },
  {
    id: 'payments',
    label: 'Ödemeler',
    iconComponent: DocumentTextIcon
  },
  {
    id: 'card',
    label: 'Papara Card',
    iconComponent: CreditCardIcon
  }
]

const handleNavClick = (id) => {
  activeItem.value = id
  emit('nav-click', id)
}

const emit = defineEmits(['nav-click'])
</script>
