<template>

</template>

<script setup lang="ts">
import { db } from '@/common/firebase';
import { usePostStore } from '@/stores/post.store';
import { ArticleType, PostCategoryType, PostClassType, PostSettingType, postTypeType } from '@/types/post.type';
import { useFirestore } from '@vueuse/firebase/useFirestore'
import { find, findIndex } from 'lodash';
import { ref, watchEffect } from 'vue';

const postStore = usePostStore()

const postSettingDB = db().collection('Posts');
const postsData = ref<Array<PostSettingType | ArticleType>>((useFirestore(postSettingDB)) as any)


watchEffect(() => {
    if (postsData.value) {
        const postsSettingIndex = findIndex(postsData.value, ['id', "Setting"])
        const postsSettingData = <PostSettingType>postsData.value[postsSettingIndex]
        postStore.postCategoryArray = postsSettingData.postCategoryArray
        postStore.postClassArray = postsSettingData.postClassArray
        postStore.postTypeArray = postsSettingData.postTypeArray
        postsData.value.splice(postsSettingIndex, 1)
        // console.log(postsData.value.map((item) => ({ id: item.id, ...item })));
        // console.log(postsData.value);
        postsData.value = (postsData.value as Array<any>).map((item) => ({ firestoreId: item.id, ...item }))

        postStore.postArray = <Array<ArticleType>>postsData.value

    }
})


</script>

<style scoped>
</style>