<template>
  <span 
    class="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-full text-xs font-semibold leading-none"
    :class="variant === 'red' ? 'bg-badge-red text-white' : 'bg-notification-orange text-white'"
  >
    {{ count }}
  </span>
</template>

<script setup>
defineProps({
  count: {
    type: [Number, String],
    required: true
  },
  variant: {
    type: String,
    default: 'red'
  }
})
</script>
