<template>



    <div>
        <div class="font-bold text-lg mt-6 text-gray-600">{{props.name}}</div>
        <div class=" text-gray-500">{{ componentProps['label'] }}</div>
        <q-file
            filled
            v-model="model"
            label="上傳圖片"
            accept="image/*"
            clearable
            @clear="removeFile()"
        >
            <template v-slot:prepend>
                <q-icon name="cloud_upload" />
            </template>
        </q-file>

        <template v-if="mvalue">
            <q-img :src="mvalue" />
        </template>



    </div>







</template>

<script lang="ts">

export default {
    name: 'EImageUploader',
}
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { QInputProps } from 'quasar'
import { VueCropper } from "vue-cropper";
import { storage } from "@/common/firebase"
import { nanoid } from 'nanoid'
import { last } from 'lodash';
import firebase from 'firebase';

</script>


<script setup lang="ts">


const storageRef = storage().ref();
// const imagesRef = storageRef.child('images');

interface Props {
    name: string;
    modelValue: string;
    canEditProps?: boolean;
    componentProps?: any;
}
const props = withDefaults(defineProps<Props>(), {
    name: '',
    modelValue: '',
    canEditProps: true,
    componentProps: {}
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: QInputProps['modelValue']): void;
}>();

//   雙向value
const mvalue = computed({
    get: () => props.modelValue
    ,
    set: (val) => {
        emit("update:modelValue", val);
    }
})
let imagesRef: firebase.storage.Reference | null = null
const convertFile = (file: File,): Promise<string> => {
    return new Promise((resolve, reject) => {
        // let reader = new FileReader()
        // reader.onload = () => { resolve((reader.result) as string) }
        // reader.onerror = () => { reject(reader.error) }
        // reader.readAsDataURL(file)

        // Upload file and metadata to the object 'images/mountains.jpg'
        imagesRef = storageRef.child('images/' + nanoid() + '.' + last(file.name.split('.')))
        const uploadTask = imagesRef.put(file, {
            contentType: file.type
        })

        uploadTask.on(storage.TaskEvent.STATE_CHANGED, {
            'complete': function () {
                console.log('upload complete!');
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL: string | PromiseLike<string>) => {
                    console.log('File available at', downloadURL);
                    resolve(downloadURL)
                });
            }
        });


    })
}
const removeFile = () => {
    mvalue.value = ''
    imagesRef?.delete()
}
const model = ref<File | null>(null)
watch(() => model.value, async (file: File | null) => {
    console.log(file);
    if (file) { mvalue.value = await convertFile(file) }
})







</script>

<style scoped lang="sass">
</style>
