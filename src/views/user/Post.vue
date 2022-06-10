<template>
    <div class="wrap">
        <div class="content">

            <PostBoardSlider :post-array="onBoardPosts" />
        </div>
        <div class="content">
            <div class="article">
                <template v-for="(item, index) in postStore.postClassArray">
                    <post-type-tab
                        :post-class-obj="item"
                        :post-type-array="postStore.postTypeArray"
                        :post-array="postByClass(item.id)"
                        :class="(index + 1) % 2 == 1 ? 'article-left' : 'article-right'"
                    />
                </template>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PostBoardSlider from '@/components/user/PostBoardSlider.vue';
import PostTypeTab from '@/components/user/PostTypeTab.vue'
import { usePostStore } from '@/stores/post.store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const postStore = usePostStore()
const postCategoryId = computed(() => (
    postStore.postCategoryArray.find(pc => (pc.key === route.name))?.id) ?? 0
)

const postArray = computed(() => postStore.postsByCategory(postCategoryId.value))
const onBoardPosts = computed(() => postArray.value.filter((post) => (post.showOnBoard)))
const postByClass = (classId: number) => (postArray.value.filter((post) => (post.classId == classId)))
</script>

<style scoped>
</style>