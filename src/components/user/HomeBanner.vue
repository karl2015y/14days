<template>
    <!------------------------- banner ------------------------->
    <div class="banner">
        <swiper :speed="600" :loop="true" class=" index-banner-swiper">
            <swiper-button-prev />
            <swiper-button-next />

            <swiper-slide>
                <img
                    
                    src="https://i.ibb.co/7pbMHyw/Rectangle-143.png"
                    class="index-banner-swiper-slide-pic"
                >
                <div class="index-banner-swiper-slide-btn"><a
                        href=""
                        class="green-btn"
                    >聯絡我們</a></div>
            </swiper-slide>
            <swiper-slide><img
                    
                    src="/assets/header/banner.png"
                    class="index-banner-swiper-slide-pic"
                ></swiper-slide>

        </swiper>
    </div>





    <!-------------------------move banner ------------------------->
    <div class="move-banner">
   <swiper :speed="800" :loop="true" class="move-index-banner-swiper">
            <swiper-button-prev />
            <swiper-button-next />

            <swiper-slide>
                <img
                    
                        src="https://i.ibb.co/b3Lcb3V/14-banner-01-scaled-1.png"
                        class="index-banner-swiper-slide-pic"
                    >
                    <div class="index-banner-swiper-slide-btn"><a
                            href=""
                            class="green-btn"
                        >聯絡我們</a></div>
            </swiper-slide>
          
        </swiper>






    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperButtonPrev from '@/components/user/swiper/SwiperButtonPrev.vue'
import SwiperButtonNext from '@/components/user/swiper/SwiperButtonNext.vue'
import { ref } from 'vue';
import 'swiper/css';

</script>

<style scoped>
</style>