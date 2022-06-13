<template>
    <div class="q-pa-md">
        <div class="my-3 flex gap-5">
            <q-btn-toggle
                v-model="categoryKeyword"
                toggle-color="primary"
                :options="
                [
                    { label: '全部種類', value: 'all' },
                    ...postStore.postCategoryArray.map(pc => ({ label: pc.name, value: pc.id }))
                ]"
            />
            <q-btn-toggle
                v-model="classKeyword"
                toggle-color="primary"
                :options="
                [
                    { label: '全部分類', value: 'all' },
                    ...postStore.postClassArray.map(pc => ({ label: pc.name, value: pc.id }))
                ]"
            />
            <q-btn-toggle
                v-model="typeKeyword"
                toggle-color="primary"
                :options="
                [
                    { label: '全部類別', value: 'all' },
                    ...postStore.postTypeArray.map(pc => ({ label: pc.name, value: pc.id }))
                ]"
            />
            <router-link :to="{ name: 'PostCreate' }">
                <q-btn
                    color="primary"
                    label="新增"
                />


            </router-link>

        </div>
        <q-table
            :rows="postArray"
            :columns="columns"
            row-key="name"
            hide-bottom
            selection="multiple"
            :rows-per-page-options="[0]"
        >
            <template v-slot:header-selection="scope">


            </template>
            <template v-slot:body-selection="scope">

                <router-link :to="{ name: 'PostEdit', params: { id: scope.row.firestoreId } }">
                    <q-btn
                        class="ml-1"
                        round
                        color="primary"
                        icon="edit"
                        size="sm"
                    >
                        <q-tooltip>編輯</q-tooltip>
                    </q-btn>

                </router-link>

                <q-btn
                    @click="clickRemovePost(scope.row.firestoreId)"
                    class="ml-1"
                    round
                    color="negative"
                    icon="delete_outline"
                    size="sm"
                >
                    <q-tooltip>刪除</q-tooltip>
                </q-btn>

            </template>

        </q-table>
    </div>
</template>

<script setup lang="ts">
import { db } from '@/common/firebase';
import { useDialog } from '@/composables/dialog';
import { useNotify } from '@/composables/notify';
import { usePostStore } from '@/stores/post.store';
import { ArticleType } from '@/types/post.type';
import { ref, watchEffect } from 'vue';
const Dialog = useDialog()
const Notify = useNotify()
const postStore = usePostStore();

const columns = ref([
    { name: 'createTime', label: '建立時間', field: 'createTime' },
    { name: 'firestoreId', label: '文章編號', field: 'firestoreId' },
    { name: 'title', label: '文章標題', field: 'title' },
    {
        name: 'category', label: '文章種類', field: 'categoryId',
        format: (val: number) => postStore.postCategoryArray.find(pc => (pc.id == val))?.name,
    },
    {
        name: 'class', label: '文章分類', field: 'classId',
        format: (val: number) => postStore.postClassArray.find(pc => (pc.id == val))?.name
    },
    {
        name: 'type', label: '文章類別', field: 'typeId',
        format: (val: number) => postStore.postTypeArray.find(pc => (pc.id == val))?.name,
    },
    {
        name: 'showOnHome', label: '在首頁顯示', field: 'showOnHome',
        format: (val: boolean) => `${val ? '是' : '否'}`,
    },
    {
        name: 'showOnBoard', label: '在看板顯示', field: 'showOnBoard',
        format: (val: boolean) => `${val ? '是' : '否'}`,
    },
    { name: 'viewer', label: '點擊次數', field: 'viewer' },

])

const categoryKeyword = ref('all')
const classKeyword = ref('all')
const typeKeyword = ref('all')
const postArray = ref<Array<ArticleType>>()
watchEffect(() => {
    postArray.value = JSON.parse(JSON.stringify(postStore.postArray))
    if (categoryKeyword.value != 'all') {
        postArray.value = postArray.value?.filter(item => (item.categoryId == Number(categoryKeyword.value)))
    }
    if (classKeyword.value != 'all') {
        postArray.value = postArray.value?.filter(item => (item.classId == Number(classKeyword.value)))
    }
    if (typeKeyword.value != 'all') {
        postArray.value = postArray.value?.filter(item => (item.typeId == Number(typeKeyword.value)))
    }
})



const clickRemovePost = (id: string) => {
    Dialog.create({
        title: '刪除確認',
        message: '是否要刪除?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        db().collection('Posts').doc(id).delete().then(() => {
            Notify.handleSuccess("刪除成功")

        })

    })
}


</script>

<style scoped>
</style>