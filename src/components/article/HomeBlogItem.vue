<template>
    <div>
        <div class="blogBigTitle">{{ props.title }}</div>
        <ul class="blogList">
            <li
                class="bloItem"
                v-for="item in props.articles"
            >
                <img
                    :alt="item.title"
                    :src="item.image"
                    class="blogImg"
                >
                <p class="blogDate">【{{ item.time }}}更新】</p>
                <p class="blogTitle">{{ item.title }}</p>
                <p
                    class="blogText"
                    v-text="item.text"
                />

                <a
                    :href="item.link"
                    class="blogMore"
                >
                    <p class="blogMoreText">Read more...</p>
                    <img
                        alt=""
                        src="https://i.ibb.co/0Q99hyB/Group-103.png"
                    >
                </a>
            </li>

        </ul>
    </div>
</template>

<script setup lang="ts">
// props
interface Props {
    title: string;
    articles: Array<ArticleType>;
}
const props = defineProps<Props>();

// type
type ArticleType = {
    image: string,
    time: string,
    title: string,
    text: string,
    link: string
}
</script>

<style scoped>
</style>