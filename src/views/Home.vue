<template>
  <home-banner />
  <home-layout>
    <!------------------------- about ------------------------->
    <home-about />
    <!------------------------- hot ------------------------->
    <home-hot-city-rooms />
    <!------------------------- care ------------------------->
    <home-care />
    <!------------------------- focus ------------------------->
    <home-focus />
    <!------------------------- blog ------------------------->
    <home-blog />
    <!------------------------- faq ------------------------->
    <home-faq />
    <!------------------------- move about ------------------------->
    <home-about :isMove="true" />
  </home-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeBanner from '@/components/HomeBanner.vue'
import HomeLayout from '@/components/HomeLayout.vue'
import HomeHotCityRooms from '@/components/HomeHotCityRooms.vue';
import HomeFaq from '@/components/HomeFaq.vue';
import HomeAbout from '@/components/HomeAbout.vue';
import HomeCare from '@/components/HomeCare.vue';
import HomeFocus from '@/components/HomeFocus.vue';
import HomeBlog from '@/components/HomeBlog.vue'
interface Props {
  label?: string;
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<style scoped lang="sass">
</style>
