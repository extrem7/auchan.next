<script setup lang="ts">
import Clock from './clock.svg'
import Info from './info.svg'
</script>

<template>
  <div
    class="mt-6 mb-2 w-[1096px] border-2 border-zinc-100 bg-white"
  >
    <div class="my-4 flex">
      <Clock class="mt-3 ml-5 mr-4 h-6 w-7 text-red-600" />
      <div>
        <div class="text-base font-medium">
          <slot name="time" />
        </div>
        <a class=" text-sm text-red-600">
          <slot name="delivery" />
        </a>
      </div>
      <Info class="ml-3 w-5 text-gray-600" />
    </div>
  </div>
</template>
