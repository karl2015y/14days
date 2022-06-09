<template>
    <div class="content">
        <div class="blog">
            <home-blog-item
                class="blogLeft"
                title="最新消息"
                :articles="articles"
            />
            <home-blog-item
                class="blogRight"
                title="防疫全攻略"
                :articles="articles2"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeBlogItem from './article/HomeBlogItem.vue';

const articles = ref([
    {
        image: 'https://i.ibb.co/fYBVPpF/image-7.png',
        time: "2022/05/03",
        title: "11入境居家檢疫天數縮短為7＋7",
        text: "考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。",
        link: "/"
    }, {
        image: 'https://i.ibb.co/fYBVPpF/image-7.png',
        time: "2022/05/03",
        title: "22入境居家檢疫天數縮短為7＋7",
        text: "考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。",
        link: "/"
    },
])
const articles2 = ref([
    {
        image: 'https://i.ibb.co/fYBVPpF/image-7.png',
        time: "2022/05/03",
        title: "33入境居家檢疫天數縮短為7＋7",
        text: "考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。",
        link: "/"
    }, {
        image: 'https://i.ibb.co/fYBVPpF/image-7.png',
        time: "2022/05/03",
        title: "44入境居家檢疫天數縮短為7＋7",
        text: "考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。考量Omicron變異株之潛伏期較短且為兼顧維持國內防疫量能、社會經濟。",
        link: "/"
    },
])
</script>

<style scoped>
</style>