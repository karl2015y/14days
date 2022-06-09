<template>
    <div class="wrap">

        <div class="content">
            <div class="detail-wrap">
                <template v-if="hotelData">

                    <p class="detail-title">{{ hotelData.name }}</p>
                    <div class="detail-tab"> <i class="bi bi-geo-alt-fill"></i>
                        <span class="detail-tab-text">{{ hotelData.county }}防疫旅館</span>
                    </div>
                    <div class="detail-pic">
                        <div
                            class="slider-wrap"
                            :style="isMove ? '' : 'flex-wrap: nowrap;gap: 10px;'"
                        >
                            <swiper
                                @slideChange="mainSwiperChange"
                                :effect="'fade'"
                                ref="mainSwiperRef"
                                :thumbs="{ swiper: thumbsSwiper }"
                                :modules="[Thumbs, EffectFade]"
                                class="slider-for w-full"
                                :spaceBetween="100"
                                :speed="500"
                                :loop="true"
                                :style="hotelData['images'].length > 1 ? '' : 'width: 100%;'"
                            >
                                <template v-for="img in isMove ? hotelData.small_images : hotelData.images">
                                    <swiper-slide class="slider-for-pic">
                                        <img :src="img" />
                                    </swiper-slide>
                                </template>

                            </swiper>

                            <swiper
                                v-if="hotelData['images'].length > 1"
                                :style="{
                                    height: isMove ? 'auto' : `${mainSwiperSize.height.value ?? 550}px`
                                }"
                                @swiper="setThumbsSwiper"
                                :slidesPerView="3"
                                :watchSlidesProgress="true"
                                :modules="[Thumbs, Mousewheel]"
                                :direction="isMove ? 'horizontal' : 'vertical'"
                                :mousewheel="!isMove"
                                class="slider-nav"
                                :loop="true"
                            >
                                <template v-for="img in isMove ? hotelData['small_images'] : hotelData['images']">
                                    <swiper-slide class="slider-nav-pic">
                                        <div>
                                            <img :src="img" />
                                            <div
                                                v-show="focusImage != img"
                                                class="black-mask"
                                            >

                                            </div>
                                        </div>
                                    </swiper-slide>
                                </template>


                            </swiper>
                        </div>
                    </div>






                    <div class="detail-main">
                        <p class="detail-list-title">飯店簡介</p>
                        <div
                            class="detail-desc"
                            v-html="hotelData.intro"
                        ></div>

                        <hotel-rooms
                            v-if="hotelData.room_types.length > 0"
                            :rooms="hotelData.room_types"
                        />
                        <p class="detail-list-title">預訂須知＆退訂政策</p>
                        <div class="detail-desc">
                            <p class="detail-desc-title">預訂須知</p>
                            <div v-html="hotelData.booking_notice"></div>
                        </div>
                        <div class="detail-desc mt-50">
                            <p class="detail-desc-title">退訂政策</p>
                            <div v-html="hotelData.cancel_notice"></div>
                        </div>
                    </div>
                </template>
                <hotel-loading v-else />


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HotelRooms from '@/components/user/HotelRooms.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import "swiper/css/effect-fade";

import { FreeMode, Thumbs, EffectFade, Mousewheel } from 'swiper';

import { computed, onMounted, ref } from 'vue';
import { useElementSize } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'
import axios from 'axios';
import { useRoute } from 'vue-router';

import HotelLoading from '@/components/user/HotelLoading.vue';
import { useFilter } from '@/composables/filters';
import { hotelDataType } from '@/types/hotel.type';

const { formatDate, addDays } = useFilter()



const route = useRoute()

const thumbsSwiper = ref();
const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
}
const mainSwiperRef = ref(null)
const mainSwiperSize = useElementSize(mainSwiperRef)


const focusImage = ref("")
const mainSwiperChange = () => {
    setTimeout(() => {
        console.log();
        const mainSwiperDom = (focusImage.value = (mainSwiperRef.value as any).$el) as HTMLElement
        focusImage.value = (mainSwiperDom.querySelector('.swiper-slide-active img') as HTMLImageElement).src
    }, 100);

}

const windowSize = useWindowSize()
const isMove = computed(() => windowSize.width.value <= 576)

const hotleId = route.params.id

const hotelData = ref<hotelDataType | null>(null)

const getData = async () => {
    const response = await axios
        .get(`https://ota-api.tourbobo.com/ota/hotels/${hotleId}?check_in=${formatDate(addDays(30))}&check_out=${formatDate(addDays(38))}&adults=1&children=0`)

    let _data = response.data
    hotelData.value = _data
}
onMounted(() => {
    getData()
})

</script>

<style scoped>
.slider-nav-pic>div {
    position: relative;
}

.slider-nav-pic .black-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffffbd;
}

/* .swiper-slide-thumb-active .black-mask {
    position: relative;
}

.swiper-slide-active .black-mask {
    position: relative;
} */
</style>