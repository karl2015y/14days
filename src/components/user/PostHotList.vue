<template>
    <div class="articleText-right">
        <div class="article-class article-class-line">熱門文章</div>
        <ul class="articleText-right-list">
            <li
                v-for="(post, index) in postStore.top10Post"
                class="articleText-right-item"
            >
                <a
                    href=""
                    class="articleText-right-item-link"
                >
                    <span class="articleText-right-item-num">{{ index + 1 }}.</span>
                    <span class="articleText-right-item-text">{{ post.title }}({{ post.viewer }})</span>
                </a>
            </li>

        </ul>
    </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/post.store';

const postStore = usePostStore()

</script>

<style scoped>
</style>