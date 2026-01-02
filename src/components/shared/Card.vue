<template>
  <div 
    class="bg-bg-card rounded-xl p-4 mb-4"
    :class="{ 'cursor-pointer transition-colors active:bg-[#252525]': clickable }"
    @click="clickable && $emit('click')"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  clickable: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>
