<script setup lang="ts">

</script>

<template>
  <button
    class=" flex w-[220px] rounded bg-red-500 py-[10px]
   hover:bg-red-700 "
  >
    <div class=" mx-auto flex  justify-between">
      <slot name="icon" />
      <div class=" text-base text-white">
        <slot />
      </div>
    </div>
  </button>
</template>
