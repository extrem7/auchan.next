<script setup lang="ts">
import Heart from './heart.svg'
const props = defineProps<{
  icon: string
  price: string
  text: string
  liters: string
  isActive: boolean
}>()
</script>

<template>
  <div class="max-h-[335px] max-w-[220px] border-2 border-zinc-100 bg-white">
    <Heart
      class="ml-auto mr-1 mt-1 h-5 w-5 text-gray-400"
      :class="{ 'text-red-500 fill-red-500': isActive }"
    />
    <img :src="icon" class="mx-auto mt-6 mb-10 h-32 w-36">
    <div class="mt-10 ml-2 text-base font-medium">
      {{ price }}
    </div>
    <div class="mt-2 ml-2 text-sm">
      {{ text }}
    </div>
    <div class="mt-4 ml-2 text-sm text-gray-400">
      {{ liters }}
    </div>
  </div>
</template>
