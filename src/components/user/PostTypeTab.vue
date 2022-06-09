<template>
    <div>
        <p class="article-class">{{ props.postClassObj.name }}</p>
        <ul class="article-type-title-wrap">
            <li
                v-for="item in props.postTypeArray"
                class="article-type-title "
                :class="{ 'articleActive': focusPostType == item.name }"
                @click="focusPostType = item.name"
            >
                <div class="article-type-title-box">
                    <p>{{ item.name }}</p>
                </div>
            </li>

        </ul>
        <ul class="article-class-content">
            <li
                v-for="item in postArray?.slice(0, 2)"
                class="article-class-content-item"
            >
                <div class="article-class-content-item-box">
                    <div class="article-class-content-item-pic"><img
                            :alt="item.title"
                            :src="item.mainImage"
                        >
                    </div>
                    <div class="article-class-content-item-txt">
                        <p class="article-class-content-item-tab">【{{ focusPostType }}】 </p>
                        <p class="article-class-content-item-tit">{{ item.title }} </p>
                        <p class="article-class-content-item-subtxt">
                            <template v-if="item.foreword">{{ item.foreword }}</template>
                            <template v-else-if="item.text">{{ item.text }}</template>
                            <template v-else-if="item.epilogue">{{ item.epilogue }}</template>
                            <template v-else></template>
                        </p>
                        <p class="article-class-content-item-footer"> <span
                                class="article-class-content-item-footer-date"
                            >{{ item.createTime }}</span><a
                                href=""
                                class="article-class-content-item-footer-move"
                            > <span>閱讀更多 </span><img
                                    alt=""
                                    src="https://ppt.cc/fQWIzx@.png"
                                ></a></p>
                    </div>
                </div>
            </li>

            <li
                class="moreBtn"
                @click="showMore = !showMore"
            >
                <span>{{ showMore ? '收起' : '更多' }}文章</span>
                <img
                    alt=""
                    src="https://ppt.cc/fQWIzx@.png"
                />
            </li>
            <!-- more -->
            <template v-if="showMore">
                <li
                    class="article-class-content-item mt-35"
                    v-for="item in postArray?.slice(2)"
                >
                    <div class="article-class-content-item-box">
                        <div class="article-class-content-item-pic"><img
                                :alt="item.title"
                                :src="item.mainImage"
                            >
                        </div>
                        <div class="article-class-content-item-txt">
                            <p class="article-class-content-item-tab">【{{ focusPostType }}】 </p>
                            <p class="article-class-content-item-tit">{{ item.title }}</p>
                            <p class="article-class-content-item-subtxt">
                                <template v-if="item.foreword">{{ item.foreword }}</template>
                                <template v-else-if="item.text">{{ item.text }}</template>
                                <template v-else-if="item.epilogue">{{ item.epilogue }}</template>
                                <template v-else></template>
                            </p>
                            <p class="article-class-content-item-footer"> <span
                                    class="article-class-content-item-footer-date"
                                >{{ item.createTime }}</span><a
                                    href=""
                                    class="article-class-content-item-footer-move"
                                > <span>閱讀更多 </span><img
                                        alt=""
                                        src="https://ppt.cc/fQWIzx@.png"
                                    ></a></p>
                        </div>
                    </div>
                </li>
            </template>

        </ul>

    </div>
</template>

<script setup lang="ts">import { computed, ref } from 'vue';

// props
interface Props {
    postClassObj: {
        id: number,
        name: string,
    };
    postTypeArray: Array<{
        id: number,
        name: string,
    }>
    postArray?: Array<{
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

// data
const showMore = ref(false)
const focusPostType = ref<string>(props.postTypeArray[0].name)
const focusPostTypeId = computed(() => (props.postTypeArray.find((item) => item.name == focusPostType.value)?.id))
const postArray = computed(() => (props.postArray?.filter((item) => (item.TypeId == focusPostTypeId.value))))
</script>

<style scoped>
</style>