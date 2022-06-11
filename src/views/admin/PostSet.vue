<template>
    <div>
        <div class="q-pa-md">

            <post-set-category
                name="種類"
                :post-category-array="postStore.postCategoryArray"
                @save="save"
            />
            <br>

            <PostSetClassOrType
                name="分類"
                :post-class-type-array="postStore.postClassArray"
                @save="save"
            />
            <br>
            <PostSetClassOrType
                name="類別"
                :post-class-type-array="postStore.postTypeArray"
                @save="save"
            />


        </div>
    </div>
</template>

<script setup lang="ts">

import PostSetCategory from "@/components/admin/PostSetCategory.vue"

import PostSetClassOrType from "@/components/admin/PostSetClassOrType.vue"
import { db } from '@/common/firebase';
import { PostCategoryType, PostClassType, postTypeType } from '@/types/post.type';
import { useFirestore } from '@vueuse/firebase/useFirestore'
import { ref } from 'vue';
import { useDialog } from '@/composables/dialog';
import { useNotify } from '@/composables/notify';
import { usePostStore } from "@/stores/post.store";
const postStore = usePostStore()
const postSettingDB = db().collection('Posts').doc('Setting');
// const postsSettingData = ref<{
//     postCategoryArray: Array<PostCategoryType>,
//     postClassArray: Array<PostClassType>,
//     postTypeArray: Array<postTypeType>,
// }>((useFirestore(postSettingDB)) as any)

const loading = ref(false)
const Dialog = useDialog()
const Notify = useNotify()
const save = () => {
    loading.value = true
    postSettingDB.set({
        postCategoryArray: postStore.postCategoryArray,
        postClassArray: postStore.postClassArray,
        postTypeArray: postStore.postTypeArray,
    }).then(() => {
        Notify.handleSuccess("成功")
    }).catch(error => {
        Notify.handleError("錯誤")
        console.log(error);
    })

}

</script>

<style scoped>
</style>