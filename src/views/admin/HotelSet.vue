<template>
    <div class="p-5 bg-grey-1 shadow-md">


        <EQSelect
            v-model="hotCities"
            name="城市設定"
            key1-name="name"
            key1-label="城市中文名"
            key2-name="label"
            key2-label="城市英文名"
            key3-name="image"
            key3-label="城市圖片"
        />
        <EQSelect
            v-model="hotelFilterArray"
            name="旅館設定"
            key1-name="hotelId"
            key1-label="旅館編號"
            key2-name="name"
            key2-label="旅館別名"
            key3-name="sortingOrder"
            key3-label="旅館排序"
        />


    </div>
</template>

<script setup lang="ts">
import EQSelect from '@/components/admin/elements/EQSelect.vue';
import { db } from '@/common/firebase';
import { ref, watchEffect } from 'vue';
import { useFirestore } from '@vueuse/firebase/useFirestore';

const HotelSettingDB = db().collection('Hotels').doc('Setting');
const HotelSetting = ref<{ hotCities: [], hotelFilterArray: [] }>((useFirestore(HotelSettingDB)) as any)
const hotCities = ref([])
const hotelFilterArray = ref([])
watchEffect(() => {
    if (HotelSetting.value) {
        hotCities.value = HotelSetting.value.hotCities
        hotelFilterArray.value = HotelSetting.value.hotelFilterArray
    }
})
watchEffect(() => {
    const _hs = {
        hotCities: hotCities.value,
        hotelFilterArray: hotelFilterArray.value
    }
    if (HotelSetting.value && JSON.stringify(_hs) != JSON.stringify(HotelSetting.value)) {
        HotelSettingDB.set(_hs)
    }

})
</script>

<style scoped>
</style>