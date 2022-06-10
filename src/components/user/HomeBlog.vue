<template>
    <div class="content">
        <div class="blog">
            <template v-for="(item, index) in postStore.homePosts">
                <home-blog-item
                    :class="index % 2 == 0 ? `blogLeft` : 'blogRight'"
                    :title="item.name"
                    :articles="item.postArray"
                />
            </template>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ArticleType } from '@/types/post.type';
import { ref } from 'vue';
import HomeBlogItem from '@/components/user/HomeBlogItem.vue';
import { usePostStore } from '@/stores/post.store';
const postStore = usePostStore()
console.log(postStore.homePosts);

const articles = ref<Array<ArticleType>>([

])
const articles2 = ref([

])
</script>

<style scoped>
</style>