<template>
    <div class="">

        <div class="flex justify-between items-center">
            <div class="text-xl font-bold">
                文章{{props.name}}
            </div>
            <q-btn
                @click="clickCreateCategory()"
                text-color="black"
                label="新增"
            />
        </div>
        <div class=" mt-1 p-3">


            <div
                v-for="(categoryItem, index) in props.postCategoryArray"
                class="mt-3 flex justify-between shadow p-3"
            >
                <div>
                    <div>{{ categoryItem.id }}.</div>
                    <div class="flex gap-2">
                        <div>{{ categoryItem.key }}</div>
                        <div>{{ categoryItem.name }}</div>
                    </div>

                </div>
                <div class="flex gap-1">
                    <q-btn
                        @click="clickEditCategory(index)"
                        text-color="black"
                        label="編輯"
                    />
                    <q-btn
                        @click="deleteCategory(index)"
                        color="negative"
                        text-color="white"
                        label="刪除"
                    />
                </div>
            </div>
        </div>
        <q-dialog v-model="showCategoryForm">
            <q-card style="width: 300px;">
                <q-card-section class="flex items-center">
                    <div class="text-h6">{{ editingCategoryIndex > -1 ? "編輯" : "新增" }}文章{{props.name}}</div>
                    <q-space />
                    <q-btn
                        icon="close"
                        flat
                        round
                        dense
                        v-close-popup
                    />
                </q-card-section>

                <q-card-section>
                    <div class="px-3 mb-3">

                        <q-input
                            v-model="categoryForm.name"
                            label="類別名稱 EX：部落格、最新消息"
                        />
                        <q-input
                            v-model="categoryForm.key"
                            label="類別鍵值 EX：Blog、Article、New..."
                        />
                    </div>
                    <div class="flex justify-end">
                        <q-btn
                            v-if="editingCategoryIndex > -1"
                            @click="updateCategory()"
                            :loading="loading"
                            text-color="black"
                            label="更新"
                        />
                        <q-btn
                            v-else
                            @click="createCategory()"
                            :loading="loading"
                            text-color="black"
                            label="送出"
                        />


                    </div>

                </q-card-section>

            </q-card>
        </q-dialog>

    </div>
</template>

<script setup lang="ts">
import { useDialog } from '@/composables/dialog';
import { useNotify } from '@/composables/notify';
import { PostCategoryType, PostClassType, postTypeType } from '@/types/post.type';
import { computed, reactive, ref } from 'vue';
const Dialog = useDialog()
const Notify = useNotify()



interface Props {
    name: string,
    postCategoryArray: Array<PostCategoryType>;
}
const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'save'): void;
}>();

const loading = ref(false)



const categoryFormDefault = {
    id: 0,
    key: "",
    name: "",
}
const categoryForm = ref(categoryFormDefault)
const resetCategoryForm = (form?: PostCategoryType) => {
    editingCategoryIndex.value = -1
    if (form) {
        categoryForm.value = JSON.parse(JSON.stringify(form))
    } else {
        categoryForm.value = JSON.parse(JSON.stringify(categoryFormDefault))
    }
}
const showCategoryForm = ref(false)
const clickCreateCategory = () => {
    resetCategoryForm()
    showCategoryForm.value = true
}

const createCategory = () => {
    categoryForm.value.id = props.postCategoryArray.length + 1
    props.postCategoryArray.push(categoryForm.value)
    saveCategory()
}
const editingCategoryIndex = ref<number>(-1)
const clickEditCategory = (index: number) => {
    resetCategoryForm(props.postCategoryArray[index])
    editingCategoryIndex.value = index
    showCategoryForm.value = true
}
const updateCategory = () => {
    if (editingCategoryIndex.value > -1) {
        props.postCategoryArray[editingCategoryIndex.value] = JSON.parse(JSON.stringify(categoryForm.value))
        saveCategory()
    }
}

const deleteCategory = (index: number) => {

    Dialog.create({
        title: '刪除確認',
        message: '是否要刪除?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        props.postCategoryArray.splice(index)
        saveCategory()

    })
}

const saveCategory = () => {
    emit('save')
    showCategoryForm.value = false

}
</script>

<style scoped>
</style>