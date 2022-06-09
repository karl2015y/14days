<template>
    <div id="fb-root"></div>
    <div class="wrap">
        <div class="content articleText-Wrap">
            <ul class="breadcrumbs">
                <li class="breadcrumbs-item"><a href="">首頁</a></li>
                <li class="breadcrumbs-item"><a href="">{{ computedPostDatum.categoryText ?? '' }}</a></li>
                <li class="breadcrumbs-item"><a href="">{{ computedPostDatum.classText ?? '' }} </a></li>
                <li class="breadcrumbs-item"><a href="">{{ computedPostDatum.typeText ?? '' }} </a></li>
            </ul>
            <div class="articleText-left">
                <p class="articleText-title">{{ computedPostDatum.title }}</p>
                <p class="articleText-date">{{ computedPostDatum.createTime }}</p>
                <div
                    class="fb-like"
                    data-action="like"
                    data-href="https://www.facebook.com/14holidays/"
                    data-layout="button"
                    data-share="true"
                    data-size="small"
                    data-width
                ></div>
                <!-- 圖 -->
                <div class="articleText-pic">
                    <img
                        :alt="computedPostDatum.mainImage"
                        :src="computedPostDatum.mainImage"
                    >
                </div>
                <!-- 文章 -->
                <template v-if="computedPostDatum.foreword + computedPostDatum.text + computedPostDatum.epilogue">
                    <div
                        class="articleText-fs"
                        @click="addFS += 0.1"
                    >
                        <img
                            alt=""
                            src="https://ppt.cc/fbOrLx@.png"
                        ><span>放大閱讀字體</span>
                    </div>
                    <div
                        v-if="computedPostDatum.foreword"
                        class="articleText-subTitle"
                        :style="{ fontSize: addFS + 'em' }"
                    >
                        <span>{{ computedPostDatum.foreword }}</span>
                    </div>
                    <div class="articleText-Text">
                        <span
                            v-if="computedPostDatum.text"
                            :style="{ fontSize: addFS + 'em' }"
                        >
                            {{ computedPostDatum.text }}
                        </span>
                        <br><br>
                        <template v-if="computedPostDatum.epilogue">
                            <div class="articleText-Text-line-wrap"><img
                                    alt=""
                                    src="https://ppt.cc/fhuHTx@.png"
                                >
                                <span class="articleText-Text-line"></span>
                            </div>
                            <span class="articleText-Text-line-text">
                                {{ computedPostDatum.epilogue }}
                            </span>
                            <div class="articleText-Text-line-wrap">
                                <span class="articleText-Text-line"></span>
                                <img
                                    alt=""
                                    src="https://ppt.cc/fSSY7x@.png"
                                />
                            </div>

                        </template>
                    </div>
                </template>

                <div>
                    <!-- 文章關鍵字 -->
                    <template v-if="postKeywordArray.length > 0">
                        <div class="articleText-tabs">
                            <span>文章關鍵字：</span>
                            <a
                                v-for="item in postKeywordArray"
                                :href="item.link"
                            >{{ item.label }}</a>

                        </div>
                    </template>


                    <!-- 相關文章 -->
                    <template v-if="similarPostArray.length > 0">
                        <div
                            class="articleText-about"
                            style="margin-top: 20px;"
                        >
                            <img
                                alt=""
                                src="https://ppt.cc/fpWKcx@.png"
                            />
                            <span>相關文章：
                                <template v-for="(item, index) in similarPostArray">
                                    <a :href="item.link">{{ item.label }}</a>
                                    <span
                                        v-if="index + 1 < similarPostArray.length"
                                        style="display: inline;"
                                    >、</span>
                                </template>

                            </span>
                        </div>
                    </template>



                    <!-- 延伸閱讀 -->
                    <template v-if="morePostAarray.length > 0">
                        <div class="article-class article-class-line">延伸閱讀</div>
                        <ul class="articleText-more">
                            <li
                                v-for="item in morePostAarray"
                                class="articleText-item"
                            >

                                <router-link :to="`${item.id}`">
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                        <div class="articleText-footer">
                            <div
                                v-for="item in morePostAarray"
                                class="activity"
                            >
                                <img
                                    :alt="item.title"
                                    :src="item.mainImage"
                                />
                            </div>
                        </div>
                    </template>

                </div>
            </div>
            <post-hot-list class="articleText-right"/>
          

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useScriptTag } from '@vueuse/core'
import PostHotList from "@/components/user/PostHotList.vue"
useScriptTag("https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v14.0")
const addFS = ref(1.1)

const postCategoryArray = ref([
    {
        id: 1,
        name: "防疫全攻略"
    }, {
        id: 2,
        name: "最新消息"
    },
])
const postClassArray = ref([
    {
        id: 1,
        name: "最心文章"
    }, {
        id: 2,
        name: "熱門議題"
    },
])
const postTypeArray = ref([
    {
        id: 1,
        name: '優惠資訊'
    }, {
        id: 2,
        name: '防疫資訊'
    }, {
        id: 3,
        name: '營養健康'
    }, {
        id: 4,
        name: '旅遊資訊'
    },
])

const postDatum = ref({
    showOnBooard: true,
    categoryId: 1,
    TypeId: 1,
    ClassId: 1,
    title: "1機場搭防疫計程車我們付費，文章標題第二列",
    createTime: "2022/06/08",
    viewer: 300,
    mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
    foreword: "前言",
    text: "內文",
    epilogue: "結語",
})

const computedPostDatum = computed(() => {
    const categoryText = postCategoryArray.value.find((item => (item.id == postDatum.value.categoryId)))?.name
    const typeText = postTypeArray.value.find((item => (item.id == postDatum.value.TypeId)))?.name
    const classText = postClassArray.value.find((item => (item.id == postDatum.value.ClassId)))?.name
    return { categoryText, typeText, classText, ...(postDatum.value) }
})


const postKeywordArray = ref([
    {
        label: "居家隔離",
        link: '1'
    },
    {
        label: "自主健康管理",
        link: '2'
    },
    {
        label: "防疫旅館",
        link: '3'
    },
    {
        label: "計程車",
        link: '4'
    }
])

const similarPostArray = ref([
    {
        label: "居家隔離",
        link: '1'
    },
    {
        label: "居家檢疫",
        link: '2'
    },
    {
        label: "自主健康管理防疫旅館懶人包",
        link: '3'
    },
])

const morePostAarray = ref([{
    id: 1,
    title: "1機場搭防疫計程車我們付費，文章標題第二列",
    mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
}, {
    id: 2,
    title: "2機場搭防疫計程車我們付費，文章標題第二列",
    mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
},])

</script>

<style scoped>
</style>