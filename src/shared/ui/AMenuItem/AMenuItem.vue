<script setup lang="ts">

</script>

<template>
  <button class="rounded bg-red-700 py-[10px] px-6 hover:bg-red-500">
    <div class="mx-auto flex justify-between text-white">
      <slot name="icon" />
      <div class="text-sm">
        <slot />
      </div>
    </div>
  </button>
</template>
