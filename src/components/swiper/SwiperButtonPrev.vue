<template>
    <div
        @click="swiper.slidePrev()"
        class="index-banner-swiper-button-prev swiper-button-prev"
    >
        <div class="carousel-control-prev-icon"></div>
    </div>
</template>

<script setup lang="ts">
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper();
</script>

