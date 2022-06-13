<template>
    <div v-if="props.articles.length>0">
        <div class="blogBigTitle">{{ props.title }}</div>
        <ul class="blogList">
            <template v-for="item in props.articles">
               <li
               v-if="item"
                class="bloItem"
                
            >
                <img
                    :alt="item.title"
                    :src="item.image"
                    class="blogImg"
                >
                <p class="blogDate">【{{ item.createTime }}更新】</p>
                <p class="blogTitle">{{ item.title }}</p>

                <template v-if="item.foreword">
                    <p
                        class="blogText"
                        v-html="item.foreword"
                    />
                </template>
                <template v-else-if="item.text">
                    <p
                        class="blogText"
                        v-html="item.text"
                    />
                </template>
                <template v-else-if="item.epilogue">
                    <p
                        class="blogText"
                        v-html="item.epilogue"
                    />
                </template>

                <router-link
                    :to="{ name: 'PostText', params: { id: `${item.firestoreId}` } }"
                    class="blogMore"
                >
                    <p class="blogMoreText">Read more...</p>
                    <img
                        alt=""
                        src="https://i.ibb.co/0Q99hyB/Group-103.png"
                    >
                </router-link>

            </li>

            </template>
         
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ArticleType } from '@/types/post.type';

// props
interface Props {
    title: string;
    articles: Array<ArticleType>;
}
const props = defineProps<Props>();


</script>

<style scoped>
</style>