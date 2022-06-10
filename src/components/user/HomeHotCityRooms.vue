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
import { computed, onMounted, reactive, ref } from 'vue';
import axios from 'axios'
import HomeHotCityRoomsLoading from './HomeHotCityRoomsLoading.vue';
import { useFilter } from '@/composables/filters';
import { hotelDataType, hotelFilterType } from '@/types/hotel.type';

const { toLS, formatDate, addDays } = useFilter()

const hotCities = ref([
    {
        label: 'taipei',
        name: '臺北',
        image: '/assets/index/hot5.jpg',
        rooms: <Array<hotelDataType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'newtaipei',
        name: '新北',
        image: '/assets/index/hot1.jpg',
        rooms: <Array<hotelDataType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'taoyuan',
        name: '桃園',
        image: 'https://i.ibb.co/1bmRHdY/Ellipse-19.png',
        rooms: <Array<hotelDataType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'hsinchu',
        name: '新竹',
        image: 'https://i.ibb.co/9vz5p78/Ellipse-20.png',
        rooms: <Array<hotelDataType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'taicheng',
        name: '臺中',
        image: 'https://i.ibb.co/C2RyQSs/Ellipse-21.png',
        rooms: <Array<hotelDataType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'tainan',
        name: '臺南',
        image: 'https://i.ibb.co/NjdRYYM/Ellipse-22.png',
        rooms: <Array<hotelDataType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'kaohsiung',
        name: '高雄',
        image: 'https://i.ibb.co/Jk5qMys/Ellipse-23.png',
        rooms: <Array<hotelDataType>>[],
        showMoreThanFourRooms: false,
    },
])


const hotelFilterArray = ref<Array<hotelFilterType>>([
    {
        "hotelId": "383",
        "name": "",
        "sortingOrder": 1
    },
    {
        "hotelId": "156",
        "name": "",
        "sortingOrder": 2
    },
    {
        "hotelId": "229",
        "name": "",
        "sortingOrder": 3
    },
    {
        "hotelId": "122",
        "name": "",
        "sortingOrder": 4
    },
    {
        "hotelId": "263",
        "name": "",
        "sortingOrder": 5
    },
    {
        "hotelId": "228",
        "name": "",
        "sortingOrder": 6
    },
    {
        "hotelId": "234",
        "name": "",
        "sortingOrder": 7
    },
    {
        "hotelId": "108",
        "name": "",
        "sortingOrder": 8
    },
    {
        "hotelId": "346",
        "name": "",
        "sortingOrder": 9
    },
    {
        "hotelId": "267",
        "name": "",
        "sortingOrder": 10
    },
    {
        "hotelId": "86",
        "name": "",
        "sortingOrder": 11
    },
    {
        "hotelId": "162",
        "name": "",
        "sortingOrder": 12
    },
    {
        "hotelId": "126",
        "name": "",
        "sortingOrder": 13
    },
    {
        "hotelId": "348",
        "name": "台北防疫旅館【Ｗ館】",
        "sortingOrder": 14
    },
    {
        "hotelId": "320",
        "name": "台北防疫旅館【J館】",
        "sortingOrder": 15
    },
    {
        "hotelId": "138",
        "name": "台北防疫旅館【RII館】",
        "sortingOrder": 16
    },
    {
        "hotelId": "139",
        "name": "台北防疫旅館【RIII館】",
        "sortingOrder": 17
    },
    {
        "hotelId": "140",
        "name": "台北防疫旅館【RV館】",
        "sortingOrder": 18
    },
    {
        "hotelId": "236",
        "name": "新北防疫旅館【Y館】",
        "sortingOrder": 19
    },
    {
        "hotelId": "431",
        "name": "",
        "sortingOrder": 20
    },
    {
        "hotelId": "494",
        "name": "",
        "sortingOrder": 21
    },
    {
        "hotelId": "432",
        "name": "",
        "sortingOrder": 22
    },
    {
        "hotelId": "427",
        "name": "",
        "sortingOrder": 23
    },
    {
        "hotelId": "281",
        "name": "",
        "sortingOrder": 24
    },
    {
        "hotelId": "158",
        "name": "",
        "sortingOrder": 25
    },
    {
        "hotelId": "204",
        "name": "",
        "sortingOrder": 26
    },
    {
        "hotelId": "11",
        "name": "",
        "sortingOrder": 27
    },
    {
        "hotelId": "93",
        "name": "",
        "sortingOrder": 28
    },
    {
        "hotelId": "57",
        "name": "",
        "sortingOrder": 29
    },
    {
        "hotelId": "99",
        "name": "",
        "sortingOrder": 30
    },
    {
        "hotelId": "72",
        "name": "",
        "sortingOrder": 31
    },
    {
        "hotelId": "306",
        "name": "",
        "sortingOrder": 32
    },
    {
        "hotelId": "147",
        "name": "",
        "sortingOrder": 33
    },
    {
        "hotelId": "163",
        "name": "",
        "sortingOrder": 34
    },
    {
        "hotelId": "203",
        "name": "",
        "sortingOrder": 35
    },
    {
        "hotelId": "258",
        "name": "",
        "sortingOrder": 36
    },
    {
        "hotelId": "284",
        "name": "",
        "sortingOrder": 37
    },
    {
        "hotelId": "134",
        "name": "",
        "sortingOrder": 38
    },
    {
        "hotelId": "146",
        "name": "",
        "sortingOrder": 39
    },
    {
        "hotelId": "144",
        "name": "高雄前金區【K館】",
        "sortingOrder": 40
    },
    {
        "hotelId": "253",
        "name": "高雄前金區【L館】",
        "sortingOrder": 41
    },
    {
        "hotelId": "264",
        "name": "高雄苓雅區【X館】",
        "sortingOrder": 42
    }
])
const loading = ref(true)

const apiUrl = computed(() => {
    let baseUrl = `https://ota-api.tourbobo.com/ota/hotels?adults=1&children=0&check_in=${formatDate(addDays(30))}&check_out=${formatDate(addDays(38))}`
    hotelFilterArray.value.forEach(item => {
        baseUrl += `&hotel_id[]=${item.hotelId}`
    })
    return baseUrl
})

const getData = async () => {
    loading.value = true
    console.log(apiUrl.value);

    const response = await axios.get(apiUrl.value)

    let _data = response.data.data

    _data = _data.map((item: hotelDataType) => {
        const kf = hotelFilterArray.value.find(hf => hf.hotelId == item.hotel_id)
        item.sortingOrder = kf?.sortingOrder ?? 99
        // 改名
        item.name = kf?.name ? kf?.name : item.name
        return item
    })
    hotCities.value.forEach((city => {
        // 按照地區排放
        city.rooms = _data.filter((item: hotelDataType) => (item.county.replaceAll('台', '臺').indexOf(city.name) > -1))
        // 排序
        city.rooms = city.rooms.sort((a, b) => (a.sortingOrder - b.sortingOrder))
    }))
    loading.value = false
}
onMounted(() => {
    getData()
    new window.WOW().init();
})



</script>

<style scoped>
</style>