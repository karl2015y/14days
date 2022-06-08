<template>
    <!------------------------- about ------------------------->

    <div
        v-if="!props.isMove"
        class="about_web_wrap"
    >
        <div class="about"><span class="about_decoration">ABOUT</span>
            <p class="big_title_move">關於14HOLIDAYS</p>
            <div class="about_img"><img
                    alt=""
                    src="/assets/index/about.png"
                ></div>
            <div class="about_main_wrap">
                <div class="about_main_title">
                    <p class="big_title">關於14HOLIDAYS</p>
                    <p class="sub_title">14天防疫假期，快速預訂全台的防疫旅館！</p>
                </div>
                <div class="about_main_text">
                    <p class="about_main_text_txt">因應 Covid-19
                        疫情爆發，14天防疫假期於2019年開始，致力於尋找全台最好的防疫旅館，提供給返台的旅人們，提供一個最優質的居家檢疫環境，最優質的客服團隊
                        嚴選全台政府核可的防疫旅館，並在政策調整及問題發生時，給予最大的幫忙與協助</p>
                </div>
            </div>
        </div>
    </div>
    <!------------------------- move about ------------------------->
    <div
        v-else
        class="about_move_wrap"
    >
        <div class="about"><span class="about_decoration">ABOUT</span>
            <p class="big_title_move">關於14HOLIDAYS</p>
            <div class="about_img"><img
                    alt=""
                    src="/assets/index/about.png"
                ></div>
            <div class="about_main_wrap">
                <div class="about_main_title">
                    <p class="big_title">關於14HOLIDAYS</p>
                    <p class="sub_title">14天防疫假期，快速預訂全台的防疫旅館！</p>
                </div>
                <div class="about_main_text">
                    <p class="about_main_text_txt">因應 Covid-19
                        疫情爆發，14天防疫假期於2019年開始，致力於尋找全台最好的防疫旅館，提供給返台的旅人們，提供一個最優質的居家檢疫環境，最優質的客服團隊
                        嚴選全台政府核可的防疫旅館，並在政策調整及問題發生時，給予最大的幫忙與協助</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// props
interface Props {
    isMove?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    isMove: false,
});
</script>

<style scoped>
</style>