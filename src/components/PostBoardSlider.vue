<template>
    <swiper
        :modules="[EffectFade]"
        effect="fade"
        :speed="500"
        class=" article-slider-for"
    >
        <swiper-button-prev />
        <swiper-button-next />
        <swiper-index-ctrl
            v-model="sliderIndex"
            v-show="false"
        />
        <template v-for="post in props.postArray">


            <swiper-slide>
                <div class="articleSwiper-swiper-slide-wrap">
                    <div class="article-slider-for-item">
                        <div class="articleSwiper-swiper-slide-pic"><img
                                alt=""
                                src="https://i.ibb.co/FDS0gHB/Rectangle-1.png"
                            >
                        </div>
                        <div class="articleSwiper-swiper-slide-text">
                            <p class="articleSwiper-title">{{ post.title }}</p>
                            <p class="articleSwiper-text">
                                <template v-if="post.foreword">{{ post.foreword }}</template>
                                <template v-else-if="post.text">{{ post.text }}</template>
                                <template v-else-if="post.epilogue">{{ post.epilogue }}</template>
                                <template v-else></template>
                            </p><a
                                href=""
                                class="articleSwiper-btn"
                            >閱讀更多</a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </template>


    </swiper>

    <swiper
        :slides-per-view="5"
        :spaceBetween="10"
        :speed="600"
        class="article-slider-nav"
    >
        <swiper-index-ctrl
            v-model="sliderIndex"
            v-show="false"
        />

        <template v-for="(post, index) in  props.postArray">
            <swiper-slide>

                <div
                    class="articleSwiper-swiper-slide-wrap clickble"
                    @click="sliderIndex = index"
                >
                    <div
                        :style="index == sliderIndex ? 'border-top: 5px solid #00a59b;' : ''"
                        class="article-slider-nav-item"
                    >
                        <p>{{ post.title }}</p>
                    </div>
                </div>

            </swiper-slide>

        </template>

    </swiper>

</template>

<script setup lang="ts">
import { EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperButtonPrev from '@/components/swiper/SwiperButtonPrev.vue'
import SwiperButtonNext from '@/components/swiper/SwiperButtonNext.vue'
import SwiperIndexCtrl from './swiper/SwiperIndexCtrl.vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/effect-fade';

const sliderIndex = ref(0)

interface Props {
    postArray: Array<{
        showOnBooard: boolean,
        categoryId: number,
        TypeId: number,
        ClassId: number,
        title: string,
        createTime: string,
        viewer: number,
        mainImage: string,
        foreword: string,
        text: string,
        epilogue: string,
    }>
}
const props = defineProps<Props>()

</script>

<style scoped>
</style>