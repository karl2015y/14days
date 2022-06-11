<template>
    <div class="">

        <div class="flex justify-between items-center">
            <div class="text-xl font-bold">
                文章{{ props.name }}

            </div>
            <q-btn
                @click="clickCreateClassType()"
                text-color="black"
                label="新增"
            />
        </div>

        <div class=" mt-1 p-3">

            <div
                v-for="(categoryItem, index) in props.postClassTypeArray"
                class="mt-3 flex justify-between shadow p-3"
            >
                <div>
                    <div>{{ categoryItem.id }}.</div>
                    <div class="flex gap-2">
                        <div>{{ categoryItem.name }}</div>
                    </div>

                </div>
                <div class="flex gap-1">
                    <q-btn
                        @click="clickEditClassType(index)"
                        text-color="black"
                        label="編輯"
                    />
                    <q-btn
                        @click="deleteClassType(index)"
                        color="negative"
                        text-color="white"
                        label="刪除"
                    />
                </div>
            </div>
        </div>
        <q-dialog v-model="showClassTypeForm">
            <q-card style="width: 300px;">
                <q-card-section class="flex items-center">
                    <div class="text-h6">{{ editingClassTypeIndex > -1 ? "編輯" : "新增" }}文章{{ props.name }}</div>
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
                    </div>
                    <div class="flex justify-end">
                        <q-btn
                            v-if="editingClassTypeIndex > -1"
                            @click="updateClassType()"
                            :loading="loading"
                            text-color="black"
                            label="更新"
                        />
                        <q-btn
                            v-else
                            @click="createClassType()"
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
import { PostClassType, postTypeType } from '@/types/post.type';
import { computed, reactive, ref } from 'vue';
const Dialog = useDialog()
const Notify = useNotify()



interface Props {
    name: string,
    postClassTypeArray: Array<PostClassType | postTypeType>;
}
const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'save'): void;
}>();

const loading = ref(false)



const categoryFormDefault = {
    id: 0,
    name: "",
}
const categoryForm = ref(categoryFormDefault)
const resetClassTypeForm = (form?: PostClassType | postTypeType) => {
    editingClassTypeIndex.value = -1
    if (form) {
        categoryForm.value = JSON.parse(JSON.stringify(form))
    } else {
        categoryForm.value = JSON.parse(JSON.stringify(categoryFormDefault))
    }
}
const showClassTypeForm = ref(false)
const clickCreateClassType = () => {
    resetClassTypeForm()
    showClassTypeForm.value = true
}

const createClassType = () => {
    categoryForm.value.id = props.postClassTypeArray.length + 1
    props.postClassTypeArray.push(categoryForm.value)
    saveClassType()
}
const editingClassTypeIndex = ref<number>(-1)
const clickEditClassType = (index: number) => {
    resetClassTypeForm(props.postClassTypeArray[index])
    editingClassTypeIndex.value = index
    showClassTypeForm.value = true
}
const updateClassType = () => {
    if (editingClassTypeIndex.value > -1) {
        props.postClassTypeArray[editingClassTypeIndex.value] = JSON.parse(JSON.stringify(categoryForm.value))
        saveClassType()
    }
}

const deleteClassType = (index: number) => {

    Dialog.create({
        title: '刪除確認',
        message: '是否要刪除?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        props.postClassTypeArray.splice(index)
        saveClassType()

    })
}

const saveClassType = () => {
    emit('save')
    showClassTypeForm.value = false

}
</script>

<style scoped>
</style>