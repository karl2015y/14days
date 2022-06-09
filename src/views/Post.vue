<template>
    <div class="wrap">
        <div class="content">

            <PostBoardSlider :post-array="postArray.filter((post) => (post.showOnBooard))" />
        </div>
        <div class="content">
            <div class="article">
                <post-type-tab
                    v-for="(item, index) in postClassArray"
                    :post-class-obj="item"
                    :post-type-array="postTypeArray"
                    :post-array="postArray.filter((post) => (post.ClassId == item.id))"
                    :class="(index + 1) % 2 == 1 ? 'article-left' : 'article-right'"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PostBoardSlider from '@/components/PostBoardSlider.vue';
import PostTypeTab from '@/components/PostTypeTab.vue'
import { ref } from 'vue';
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

const postArray = ref([
    {
        showOnBooard:true,
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
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 1,
        ClassId: 2,
        title: "2機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 2,
        ClassId: 1,
        title: "3機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "",
        epilogue: "結語",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 2,
        ClassId: 2,
        title: "4機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "",
        epilogue: "",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 3,
        ClassId: 1,
        title: "5機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 3,
        ClassId: 2,
        title: "6機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 4,
        ClassId: 1,
        title: "7機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 4,
        ClassId: 2,
        title: "8機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 1,
        ClassId: 1,
        title: "9機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:true,
        categoryId: 1,
        TypeId: 1,
        ClassId: 2,
        title: "10機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 2,
        ClassId: 1,
        title: "11機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 2,
        ClassId: 2,
        title: "12機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "",
        epilogue: "",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 3,
        ClassId: 1,
        title: "13機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 3,
        ClassId: 2,
        title: "14機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 4,
        ClassId: 1,
        title: "15機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 4,
        ClassId: 2,
        title: "16機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 1,
        ClassId: 1,
        title: "17機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 1,
        ClassId: 2,
        title: "18機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 2,
        ClassId: 1,
        title: "19機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 2,
        ClassId: 2,
        title: "20機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "",
        text: "",
        epilogue: "",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 3,
        ClassId: 1,
        title: "21機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 3,
        ClassId: 2,
        title: "22機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 4,
        ClassId: 1,
        title: "23機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }, {
        showOnBooard:false,
        categoryId: 1,
        TypeId: 4,
        ClassId: 2,
        title: "24機場搭防疫計程車我們付費，文章標題第二列",
        createTime: "2022/06/08",
        viewer: 300,
        mainImage: "https://i.ibb.co/fYBVPpF/image-7.png",
        foreword: "前言",
        text: "內文",
        epilogue: "結語",
    }
])
</script>

<style scoped>
</style>