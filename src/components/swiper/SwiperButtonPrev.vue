<template>
    <div
        @click="swiper.slidePrev()"
        class="index-banner-swiper-button-prev swiper-button-prev"
    >
        <slot>
            <div class="carousel-control-prev-icon"></div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper();
</script>

