<template>
    <div id="fb-root"></div>
    <div class="wrap">
        <div v-if="computedPostDatum" class="content articleText-Wrap">
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
                        :alt="computedPostDatum.text"
                        :src="computedPostDatum.image"
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
            <post-hot-list class="articleText-right" />


        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useScriptTag } from '@vueuse/core'
import PostHotList from "@/components/user/PostHotList.vue"
import { usePostStore } from '@/stores/post.store';
import { useRoute } from 'vue-router';
import { ArticleType } from '@/types/post.type';
useScriptTag("https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v14.0")
const addFS = ref(1.1)

const postStore = usePostStore()

const route = useRoute()

const postDatum = computed<ArticleType | undefined>(() => (postStore.postById(Number(route.params.id) ?? 0)))
console.log(postStore.postById(Number(route.params.id) ?? 0));

const computedPostDatum = computed(() => {
    if (postDatum.value) {
        const categoryText = postStore.postCategoryArray.find((item => (item.id == postDatum.value?.categoryId)))?.name
        const typeText = postStore.postTypeArray.find((item => (item.id == postDatum.value?.typeId)))?.name
        const classText = postStore.postClassArray.find((item => (item.id == postDatum.value?.classId)))?.name
        return { categoryText, typeText, classText, ...(postDatum.value) }
    }

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