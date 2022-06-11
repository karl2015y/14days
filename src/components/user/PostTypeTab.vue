<template>
    <div>
        <p class="article-class">{{ props.postClassObj.name }}</p>
        <ul class="article-type-title-wrap">
            <template v-for="item in props.postTypeArray">
                <li
                    class="article-type-title "
                    :class="{ 'articleActive': focusPostType == item.name }"
                    @click="focusPostType = item.name"
                >
                    <div class="article-type-title-box">
                        <p>{{ item.name }}</p>
                    </div>
                </li>
            </template>


        </ul>
        <ul class="article-class-content">
            <li
                v-for="item in postArray?.slice(0, 2)"
                class="article-class-content-item"
            >
                <div class="article-class-content-item-box">
                    <div class="article-class-content-item-pic"><img
                            :alt="item.title"
                            :src="item.image"
                        >
                    </div>
                    <div class="article-class-content-item-txt">
                        <p class="article-class-content-item-tab">【{{ focusPostType }}】 </p>
                        <p class="article-class-content-item-tit">{{ item.title }} </p>

                        <template v-if="item.foreword">
                            <p
                                class="article-class-content-item-subtxt"
                                v-html="item.foreword"
                            />
                        </template>
                        <template v-else-if="item.text">
                            <p
                                class="article-class-content-item-subtxt"
                                v-html="item.text"
                            />
                        </template>
                        <template v-else-if="item.epilogue">
                            <p
                                class="article-class-content-item-subtxt"
                                v-html="item.epilogue"
                            />
                        </template>
                        <template v-else></template>

                        <p class="article-class-content-item-footer"> <span
                                class="article-class-content-item-footer-date"
                            >{{ item.createTime }}</span>

                            <router-link
                                :to="{ name: 'PostText', params: { id: `${item.postId}` } }"
                                class="article-class-content-item-footer-move"
                            >
                                <span>閱讀更多 </span>
                                <img
                                    alt=""
                                    src="https://ppt.cc/fQWIzx@.png"
                                >
                            </router-link>


                        </p>
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
                                :src="item.image"
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

<script setup lang="ts">import { ArticleType, PostClassType, postTypeType } from '@/types/post.type';
import { computed, ref } from 'vue';

// props
interface Props {
    postClassObj: PostClassType;
    postTypeArray: Array<postTypeType>
    postArray?: Array<ArticleType>
}
const props = defineProps<Props>()

// data
const showMore = ref(false)
const focusPostType = ref<string>(props.postTypeArray[0].name)
const focusPostTypeId = computed(() => (props.postTypeArray.find((item) => item.name == focusPostType.value)?.id))
const postArray = computed(() => (props.postArray?.filter((item) => (item.typeId == focusPostTypeId.value))))
</script>

<style scoped>
</style>