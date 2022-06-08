<template>
    <div
        @click="swiper.slideNext()"
        class="index-banner-swiper-button-next swiper-button-next"
    >
        <div class="carousel-control-next-icon"></div>
    </div>
</template>

<script setup lang="ts">
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper();
</script>

