<template>
    <div>
        {{ props.modelValue }}
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper();
interface Props {
    modelValue: number;
}
const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void;
}>();


watch(() => props.modelValue, (val) => {
    if (val != swiper.value.realIndex) {
        swiper.value.slideTo(val)
    }
})

watch(() => swiper.value.realIndex, (val) => {
    emit('update:modelValue', val)
})


</script>

<style scoped>
</style>