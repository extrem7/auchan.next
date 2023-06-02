<script setup lang="ts">
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import { links } from './links'
import 'vue3-carousel/dist/carousel.css'
</script>

<template>
  <Carousel :autoplay="3000">
    <Slide v-for="link in links" :key="link">
      <img class="h-[340px] w-[1096px]" :src="link.image">
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.carousel__pagination-button {
  border-radius: 50%;
  width: 5px;
  height: 5px;
  padding: 0;
  margin: 0 5px;
  border: 1px solid #bf051b;
}
.carousel__pagination-button::after {
  display: none;
}
.carousel__pagination-button--active{
  background-color: #bf051b;
}
.carousel__pagination{
  background-color: rgba(255,255,255,.44);
  height: 20px;
  bottom: 8px;
  left: 50%;
  position: absolute;
  padding: 0 8px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 24px;

}
</style>

