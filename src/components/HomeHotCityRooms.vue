<template>
    <div class="hot">
        <p class="title">熱門城市選擇</p>
        <ul class="hot_list">
            <li
                v-for="city in hotCities"
                class="hot_item"
            >
                <a :href="`#${city.label}`"><img
                        :alt="`${city.name}城市縮圖`"
                        :src="city.image"
                    >
                    <p class="hot_item_title">{{ city.name }}</p>
                </a>
            </li>

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

                <li
                    class="product_item_wrap wow fadeInLeft"
                    :key="i.hotel_id"
                    v-for="i, index in (city.showMoreThanFourRooms ? city.rooms : city.rooms.slice(0, 4))"
                >
                    <div class="product_item">
                        <a
                            href="./detail.html"
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
                        </a>
                        <div class="product_text_box">
                            <span class="product_title">{{ city.name }}防疫旅館精選</span>
                            <span class="product_title_move">
                                <img
                                    alt=""
                                    src="https://ppt.cc/fNjbJx@.png"
                                >
                                <span>{{ i.county }}{{ i.area }}</span>
                            </span>
                            <a
                                href=""
                                class="product_subtitle"
                            >
                                {{ i.name }}
                            </a>
                            <div class="product_tabs">
                                <span class="product_tab">可開窗</span>
                                <span class="product_tab">乾濕分離</span>
                            </div>
                            <div class="product_footer">
                                <span class="product_price">NT$ {{ i.lowest_price }} 起</span>
                                <a
                                    href=""
                                    class="product_btn_move"
                                >立即訂房</a>
                                <div class="product_btn_wrap">
                                    <a
                                        href="./detail.html"
                                        class="product_btn grddn_btn mr-5"
                                    >查看房型</a>
                                    <a
                                        href="./contactus.html"
                                        class="product_btn block_btn"
                                    >聯絡我們</a>
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
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios'

const hotCities = ref([
    {
        label: 'taipei',
        name: '臺北',
        image: '/assets/index/hot5.jpg',
        rooms: <Array<cityRoomType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'newtaipei',
        name: '新北',
        image: '/assets/index/hot1.jpg',
        rooms: <Array<cityRoomType>>[],
        showMoreThanFourRooms: false,
    },
    //  {
    //     label: '',
    //     name: '桃園',
    //     image: 'https://i.ibb.co/1bmRHdY/Ellipse-19.png',
    //     rooms: <Array<cityRoomType>>[],
    //     showMoreThanFourRooms:false,
    // },  
    //   {
    //     label: '',
    //     name: '新竹',
    //     image: 'https://i.ibb.co/9vz5p78/Ellipse-20.png',
    //     rooms: <Array<cityRoomType>>[],
    //     showMoreThanFourRooms:false,
    // },
    {
        label: 'taicheng',
        name: '臺中',
        image: 'https://i.ibb.co/C2RyQSs/Ellipse-21.png',
        rooms: <Array<cityRoomType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'tainan',
        name: '臺南',
        image: 'https://i.ibb.co/NjdRYYM/Ellipse-22.png',
        rooms: <Array<cityRoomType>>[],
        showMoreThanFourRooms: false,
    },
    {
        label: 'kaohsiung',
        name: '高雄',
        image: 'https://i.ibb.co/Jk5qMys/Ellipse-23.png',
        rooms: <Array<cityRoomType>>[],
        showMoreThanFourRooms: false,
    },
])


type cityRoomType = {
    hotel_id: string,
    name: string,
    image: string,
    county: string,
    area: string,
    lowest_price: number,

}

const getData = async () => {
    const response = await axios
        .get('https://ota-api.tourbobo.com/official/hotels?hotel_id[]=383&hotel_id[]=156&hotel_id[]=229&hotel_id[]=122&hotel_id[]=263&hotel_id[]=228&hotel_id[]=234&hotel_id[]=108&hotel_id[]=346&hotel_id[]=267&hotel_id[]=86&hotel_id[]=162&hotel_id[]=126&hotel_id[]=348&hotel_id[]=302&hotel_id[]=320&hotel_id[]=138&hotel_id[]=139&hotel_id[]=171&hotel_id[]=140&hotel_id[]=236&hotel_id[]=163&hotel_id[]=281&hotel_id[]=158&hotel_id[]=204&hotel_id[]=11&hotel_id[]=93&hotel_id[]=57&hotel_id[]=99&hotel_id[]=72&hotel_id[]=306&hotel_id[]=158&hotel_id[]=203&hotel_id[]=258&hotel_id[]=284&hotel_id[]=134&hotel_id[]=146&hotel_id[]=144&hotel_id[]=253&hotel_id[]=130&hotel_id[]=161')

    let _data = response.data
    hotCities.value.forEach((city => {
        city.rooms = _data.filter((item: cityRoomType) => (item.county.indexOf(city.name) > -1))
    }))


}
onMounted(() => {
    getData()
    new window.WOW().init();
})

</script>

<style scoped>
</style>