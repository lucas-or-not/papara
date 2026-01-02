<template>
  <div class="sticky top-0 z-[100] flex items-center justify-between px-4 py-4 bg-bg-primary">
    <div class="flex items-center gap-2">
      <button 
        class="relative w-10 h-10 rounded-lg bg-[#2A2A2A] flex items-center justify-center text-text-primary active:opacity-60 transition-opacity"
        @click="$emit('menu-click')"
      >
        <Bars3Icon class="w-5 h-5" />
        <Badge :count="7" class="absolute -top-1 -right-1" />
      </button>
      
      <button 
        class="w-10 h-10 rounded-lg border border-border-color bg-transparent flex items-center justify-center text-text-primary active:opacity-60 transition-opacity"
        @click="$emit('chat-click')"
      >
        <ChatBubbleLeftRightIcon class="w-5 h-5" />
      </button>
    </div>
    
    <div class="flex-1 flex items-end justify-end pr-2 self-end">
      <span class="text-xs text-text-secondary font-normal">Papara No: {{ accountNumber }}</span>
    </div>
    
    <div class="flex items-center">
      <button 
        class="w-10 h-10 rounded-lg border border-border-color bg-transparent flex items-center justify-center text-text-primary active:opacity-60 transition-opacity"
        @click="$emit('profile-click')"
      >
        <UserIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { Bars3Icon, ChatBubbleLeftRightIcon, UserIcon } from '@heroicons/vue/24/outline'
import Badge from '../shared/Badge.vue'

defineProps({
  accountNumber: {
    type: String,
    default: '55545678901'
  }
})

defineEmits(['menu-click', 'chat-click', 'profile-click'])
</script>
