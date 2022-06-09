<template>
    <div
        @click="swiper.slideNext()"
        class="index-banner-swiper-button-next swiper-button-next"
    >
        <slot>
            <div class="carousel-control-next-icon"></div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper();
</script>

