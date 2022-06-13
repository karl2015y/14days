<template>
    <div class="p-7 flex justify-between items-center">
        <div class="font-bold text-xl "> 編輯文章</div>
        <q-btn
            @click="clickSave()"
            text-color="black"
            label="儲存"
        />
    </div>
    <div class="p-5 bg-grey-1 shadow-md">

        <q-select
            v-model="categoryItem"
            :options="postStore.postCategoryArray"
            label="文章種類"
            option-label="name"
        />
        <q-select
            v-model="classItem"
            :options="postStore.postClassArray"
            label="文章分類"
            option-label="name"
        />
        <q-select
            v-model="typeItem"
            :options="postStore.postTypeArray"
            label="文章類別"
            option-label="name"
        />
        <div class="flex justify-between mt-4 mb-3">
            <div class="flex">
                <q-toggle
                    label="在看板上顯示"
                    v-model="formData.showOnBoard"
                />
                <q-toggle
                    label="在首頁顯示"
                    v-model="formData.showOnHome"
                />
            </div>

        </div>
        <EQSelect
            v-model="formData.postKeywordArray"
            name="文章關鍵字"
            key1-name="label"
            key1-label="關鍵字"
            key2-name="link"
            key2-label="關鍵字連結"
        />
        <EQSelect
            v-model="formData.similarPostArray"
            name="相似文章"
            key1-name="label"
            key1-label="文章標題"
            key2-name="link"
            key2-label="文章連結"
        />
        <EQSelect
            v-model="formData.morePostAarray"
            name="延伸閱讀"
            key1-name="firestoreId"
            key1-label="文章編號"
        />
        <!-- <home-blog-item
            class="max-h-[500px] overflow-y-auto"
            title="預覽"
            :articles="getPostView(formData.morePostAarray)"
        /> -->

    </div>
    <div class="p-5 shadow-md">
        <div class="font-bold text-lg mt-4 text-gray-600">文章標題</div>

        <q-input
            v-model="formData.title"
            outlined
        />

        <e-image-uploader
            v-model="formData.image"
            name="文章主圖片"
        />

        <e-q-editor
            v-model="formData.foreword"
            name="前言編輯器"
        />
        <e-q-editor
            v-model="formData.text"
            name="內文編輯器"
        />
        <e-q-editor
            v-model="formData.epilogue"
            name="結語編輯器"
        />
    </div>
</template>

<script setup lang="ts">
import { useFilter } from '@/composables/filters';
import { usePostStore } from '@/stores/post.store';
import { ArticleType, PostCategoryType, PostClassType, postTypeType } from '@/types/post.type';
import { ref, watchEffect } from 'vue';
import EImageUploader from '@/components/admin/elements/EImageUploader.vue'
import EQEditor from '@/components/admin/elements/EQEditor.vue';
import EQSelect from '@/components/admin/elements/EQSelect.vue';
import { db } from '@/common/firebase';
import { useNotify } from '@/composables/notify';

import HomeBlogItem from '@/components/user/HomeBlogItem.vue';
import { useRoute } from 'vue-router';
import { assign } from 'lodash';
const route = useRoute()
const postDB = db().collection('Posts');
const Notify = useNotify()
const { formatDate } = useFilter()
const postStore = usePostStore()
const formDefault = {
    firestoreId: '',
    postId: 0,
    categoryId: 0,
    classId: 0,
    typeId: 0,
    showOnBoard: false,
    showOnHome: false,
    title: "",
    image: "",
    viewer: 0,
    foreword: "",
    text: "",
    epilogue: "",
    createTime: "",
    postKeywordArray: [],
    similarPostArray: [],
    morePostAarray: [],
}
const formData = ref(formDefault)
console.log();

const categoryItem = ref<PostCategoryType>()
const classItem = ref<PostClassType>()
const typeItem = ref<postTypeType>()
watchEffect(() => {
    formData.value.postId = postStore.postArray.length + 1
    formData.value.categoryId = categoryItem.value?.id ?? 0
    formData.value.classId = classItem.value?.id ?? 0
    formData.value.typeId = typeItem.value?.id ?? 0
    formData.value.createTime = new Date().toLocaleString().split(' ')[0]
})
const resetForm = (form?: ArticleType) => {
    if (form) {
        // formData.value = assign(formData.value, form)
        formData.value = JSON.parse(JSON.stringify(assign(formData.value, form)))
    } else {
        formData.value = JSON.parse(JSON.stringify(formDefault))
    }
}
watchEffect(() => {
    const post = postStore.postById(String(route.params.id))
    categoryItem.value = postStore.postCategoryArray?.find(pc => (pc.id == post?.categoryId))
    classItem.value = postStore.postClassArray?.find(pc => (pc.id == post?.classId))
    typeItem.value = postStore.postTypeArray?.find(pc => (pc.id == post?.typeId))
    resetForm(post)
})
const clickSave = () => {

    postDB.doc(formData.value.firestoreId).set(formData.value).then(() => {
        Notify.handleSuccess("成功")
    }).catch(error => {
        Notify.handleError("錯誤")
        console.log(error);
    })
}


const getPostView = (val: any) => {
    return val.map((item: any) => {
        const post = postStore.postById(item['firestoreId'])
        console.log(post);

        if (post) return post;
    })
}


</script>

<style scoped>
</style>