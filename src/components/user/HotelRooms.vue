<template>
    <link
        href="/css/icon.css"
        rel="stylesheet"
    >
    <!-- {{ props.roomTypes }} -->
    <p class="detail-list-title mt-80">房型資訊</p>
    <ul class="detail-room-info-list">
        <template v-for="room in props.rooms">
            <li class="detail-room-info-item">
                <div class="swiper-container detailRoomInfo-swiper">

                    <swiper
                        :loop="true"
                        :pagination="true"
                        :modules="[Pagination]"
                        class="swiper-wrapper detailRoomInfo-swiper-wrapper"
                    >
                        <template v-for="(roomImage, index) in room.images">
                            <swiper-slide class="swiper-slide detailRoomInfo-swiper-slide">
                                <img
                                    :alt="`${room.name}${room.bed_type}${index + 1}`"
                                    :src="roomImage"
                                    class="detailRoomInfo-slide-pic"
                                >
                            </swiper-slide>
                        </template>


                    </swiper>



                </div>
                <div class="detailRoomInfo-text">
                    <div class="detailRoomInfo-text-header">
                        <p class="detailRoomInfo-text-title">{{ room.name }}</p>
                        <p class="detailRoomInfo-price">NT$<span class="detailRoomInfo-price-number">
                                {{ toLS(toNumber(room.price)) }}
                            </span><span class="detailRoomInfo-price-unit">/晚</span></p>
                    </div>
                    <div class="detailRoomInfo-text-desc-list">
                        <span class="detailRoomInfo-text-desc-item">
                            <img
                                alt=""
                                src="/assets/icon/detailIcon01.svg"
                            />
                            <span>{{ room.room_size }} 坪</span>
                        </span>

                        <span class="detailRoomInfo-text-desc-item">
                            <img
                                alt=""
                                src="/assets/icon/detailIcon02.svg"
                            >
                            <span>{{ room.bed_type }}</span>
                        </span>
                        <span class="detailRoomInfo-text-desc-item">
                            <img
                                alt=""
                                src="/assets/icon/detailIcon03.svg"
                            />
                            <span>{{ room.window ?? '無窗' }}</span>
                        </span>
                    </div>
                    <div class="detailRoomInfo-text-footer">
                        <ul class="detailRoomInfo-text-serve">
                            <li
                                v-for="feature in room.features"
                                class="detailRoomInfo-text-serve-item"
                            >
                                <i :class="feature.class"></i>
                                {{ feature.name }}
                            </li>

                        </ul>
                        <div class="detailRoomInfo-text-btn">
                            <router-link :to="{ name: 'ContactUs' }">立即預訂</router-link>
                        </div>
                    </div>
                </div>
            </li>
        </template>
    </ul>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { ref } from "vue";
import { useFilter } from "@/composables/filters";
import { RoomType } from "@/types/hotel.type";


interface Props {
    rooms: Array<RoomType>;
}
const props = defineProps<Props>();
const { toNumber, toLS } = useFilter()

</script>

<style scoped>
</style>