<template>
    <div class="hot">
        <p class="title">熱門城市選擇</p>
        <ul class="hot_list">
            <template v-for="city in hotCities">
                <li class="hot_item">
                    <a :href="`#${city.label}`"><img
                            :alt="`${city.name}城市縮圖`"
                            :src="city.image"
                        >
                        <p class="hot_item_title">{{ city.name }}</p>
                    </a>
                </li>
            </template>


            <li class="hot_item"><a href=""><img
                        alt=""
                        src="https://i.ibb.co/C2Jqjnn/Ellipse-24.png"
                    >
                    <p class="hot_item_title">line諮詢</p>
                </a></li>
        </ul>
    </div>
    <div class="content">
        <!------------------------- product ------------------------->
        <template v-for="city in hotCities">
            <p
                :id="city.label"
                class="products_title"
            >{{ city.name }}防疫旅館精選</p>
            <ul class="product_list">
                <HomeHotCityRoomsLoading v-if="loading" />

                <template v-else-if="city.rooms.length > 0">

                    <li
                        class="product_item_wrap wow fadeInLeft"
                        :key="i.hotel_id"
                        v-for="i in (city.showMoreThanFourRooms ? city.rooms : city.rooms.slice(0, 4))"
                    >
                        <div class="product_item">
                            <router-link
                                :to="{ name: 'hotelDetails', params: { id: i.hotel_id } }"
                                class="product_pic"
                            >
                                <img
                                    :alt="i.name"
                                    :src="i.image"
                                >
                                <div class="product_description">
                                    <p>房費包含 : 每日三餐、居家檢疫期間之房內備品、服務稅及稅額。</p>
                                    <div class="product_description_bg"></div>
                                </div>

                            </router-link>

                            <div class="product_text_box">
                                <span class="product_title">{{ city.name }}防疫旅館精選</span>
                                <span class="product_title_move">
                                    <img
                                        alt=""
                                        src="https://ppt.cc/fNjbJx@.png"
                                    >
                                    <span>{{ i.county }}{{ i.area }}</span>
                                </span>
                                <router-link
                                    :to="{ name: 'hotelDetails', params: { id: i.hotel_id } }"
                                    class="product_subtitle"
                                >
                                    {{ i.name }}
                                </router-link>

                                <div class="product_tabs">
                                    <span
                                        v-for="tag in i.facility_tags"
                                        class="product_tab"
                                    >{{ tag.name }}</span>
                                </div>
                                <div class="product_footer">
                                    <span
                                        v-if="i.lowest_price"
                                        class="product_price"
                                    >NT$ {{ toLS(i.lowest_price) }} 起</span>
                                    <span v-else></span>
                                    <router-link
                                        :to="{ name: 'hotelDetails', params: { id: i.hotel_id } }"
                                        class="product_btn_move"
                                    >
                                        立即訂房
                                    </router-link>



                                    <div class="product_btn_wrap">

                                        <router-link
                                            :to="{ name: 'hotelDetails', params: { id: i.hotel_id } }"
                                            class="product_btn grddn_btn mr-5"
                                        >查看房型</router-link>

                                        <router-link
                                            :to="{ name: 'ContactUs' }"
                                            class="product_btn block_btn"
                                        >聯絡我們</router-link>

                                    </div>
                                </div>
                                <a
                                    href=""
                                    class="product_move_arrow"
                                >
                                    <img
                                        alt=""
                                        src="https://i.ibb.co/VgXQHZR/Group-121.png"
                                    />
                                </a>
                            </div>
                        </div>
                    </li>

                </template>

                <div
                    v-else
                    class="about text-grey"
                >
                    暫無資料
                </div>





            </ul>

            <div
                v-if="city.rooms.length > 4"
                @click="city.showMoreThanFourRooms = !city.showMoreThanFourRooms"
            >
                <a
                    class="linkWrap"
                    :href="city.showMoreThanFourRooms ? undefined : '#' + city.label"
                >
                    {{ city.showMoreThanFourRooms == true ? '收合' : '更多' }}{{ city.name }}防疫旅館
                    <img
                        alt=""
                        src="https://i.ibb.co/1nQFk2z/arrow-right-circle.png"
                    >
                </a>

            </div>
        </template>



    </div>

</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watchEffect } from 'vue';
import axios from 'axios'
import HomeHotCityRoomsLoading from './HomeHotCityRoomsLoading.vue';
import { useFilter } from '@/composables/filters';
import { hotelDataType, hotelFilterType, CityType } from '@/types/hotel.type';


import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase/useFirestore';

const HotelSettingDB = db().collection('Hotels').doc('Setting');
const HotelSetting = ref<{ hotCities: {}[], hotelFilterArray: {}[] }>((useFirestore(HotelSettingDB)) as any)


const { toLS, formatDate, addDays } = useFilter()


const hotCities = ref<Array<CityType>>()
const hotelFilterArray = ref<Array<hotelFilterType>>()
watchEffect(() => {
    if (HotelSetting.value) {
        hotCities.value = HotelSetting.value.hotCities.map(item => ({ rooms: <Array<hotelDataType>>[], showMoreThanFourRooms: false, ...item }) as any)
        hotelFilterArray.value = HotelSetting.value.hotelFilterArray.map((item: any) => ({ hotelId: item.hotelId, name: item.name, sortingOrder: Number(item.sortingOrder) }) as any)
    }
})

const loading = ref(true)

const apiUrl = computed(() => {
    let baseUrl = `https://ota-api.tourbobo.com/ota/hotels?per_page=${hotelFilterArray.value?.length}&adults=1&children=0&check_in=${formatDate(addDays(30))}&check_out=${formatDate(addDays(38))}`
    if (hotelFilterArray.value) {
        hotelFilterArray.value.forEach(item => {
            baseUrl += `&hotel_id[]=${item.hotelId}`
        })
        return baseUrl
    }
})

const getData = async () => {
    loading.value = true
    if (!apiUrl.value) return;
    const response = await axios.get(apiUrl.value)

    let _data = response.data.data

    _data = _data.map((item: hotelDataType) => {
        const kf = hotelFilterArray.value?.find(hf => hf.hotelId == item.hotel_id)
        item.sortingOrder = kf?.sortingOrder ?? 99
        // 改名
        item.name = kf?.name ? kf?.name : item.name
        return item
    })
    hotCities.value?.forEach((city => {
        // 按照地區排放
        city.rooms = _data.filter((item: hotelDataType) => (item.county.replaceAll('台', '臺').indexOf(city.name) > -1))
        // 排序
        city.rooms = city.rooms.sort((a, b) => (a.sortingOrder - b.sortingOrder))
    }))
    loading.value = false
}

watchEffect(() => {
    if (HotelSetting.value) {
        getData()
    }
})

onMounted(() => {

    new window.WOW().init();
})



</script>

<style scoped>
</style>