<template>
    <div
        class="faq-wrap"
        style="background-color:#FAFAFA"
    >
        <div class="content">
            <div class="faqs_wrap">
                <div class="faqs_title">防疫旅館FAQ</div>
                <div
                    class="accordion"
                    id="accordionExample"
                >
                    <div
                        class="accordion-item"
                        :id="`collapse-${i.id}`"
                        :key="i.id"
                        v-for="i in faqList"
                    >
                        <div
                            class="accordion-button collapsed"
                            type="button"
                            :data-bs-target="i.name"
                            aria-controls="collapseThree"
                            aria-expanded="false"
                            data-bs-toggle="collapse"
                        >{{ i.title }}</div>
                        <div
                            class="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            :id="i.id"
                            data-bs-parent="#accordionExample"
                        >
                            <p
                                class="faq_text"
                                v-html="i.text"
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
const faqList = ref([
    { name: '#faq01', id: 'faq01', title: '台灣防疫旅館的名單如何查詢?', text: '台灣各地區的防疫旅館可以在這裡查到<span style="color:#00A29A;">「台北防疫旅館」、 「台中防疫旅館」、 「高雄防疫旅館」、 「新北防疫旅館」。</span>' },
    //- {name:'#faq02',id:'faq02',title:'台北防疫旅館名單有哪些?',text:'台北市防疫旅館可以直接線上預訂的有<span style="color:#00A29A;"> 「雀客旅館-台北松江」、「雀客旅館-台北站前」、「承攜行旅-台北大稻埕」</span>，查詢更多「台北防疫旅館名單」。</span>'},
    //- {name:'#faq03',id:'faq03',title:'台中防疫旅館名單有哪些?',text:'目前台中市防疫旅館名單未公開，但可透過平台線上預訂的有<span style="color:#00A29A;">  「雀客旅館台中自由」、「台中市中區-【BS館】」、「鵲絲旅店」</span>，查詢更多「台中防疫旅館」。'},
    //- {name:'#faq04',id:'faq04',title:'高雄防疫旅館名單有哪些?',text:'目前高雄市防疫旅館開放線上預訂的有<span style="color:#00A29A;">  「承攜行旅-高雄新崛江」、 「賀喔文旅」、 「高雄苓雅區【X館】」</span>，還有更多「高雄市防疫旅館名單」可做選擇！'},
    { name: '#faq05', id: 'faq05', title: '哪些人需要做居家檢疫、居家隔離?', text: '2020年3月19日起，所有入境台灣的民眾，皆需要進行14天的居家檢疫；另外曾與感染新冠肺炎(確診者)個案接觸者，則需要居家隔離14天。目前已經有打疫苗的回國民眾，為了保護台灣尚未施打疫苗的民眾，仍需要做14天的居家檢疫喔。' },
    { name: '#faq06', i: 'faq06', title: '居家檢疫或居家隔離的民眾需要遵守以及注意的事項有哪些?', text: `* 嚴禁外出以及搭乘大眾交通工具<br/>* 每日落實紀錄體溫還有身體狀況 ( 如: 是否有發燒、失去嗅覺味覺、胸悶呼吸困難、四肢無力、流鼻水、咳嗽等等徵狀 )</br>* 勤洗手，勤消毒，不要摸眼口鼻<br/>* 擁有獨立空間，與家人保持1公尺以上的距離<br/>* 嚴禁同桌吃飯與近距離接觸等各種行為<br/>* 需獨立衛浴，如不得已與家人共用，每日以漂白水消毒3次<br/>` },
    { name: '#faq07', id: 'faq07', title: '居家檢疫或居家隔離者，申請防疫補助需要哪些資料?', text: '申請防疫補助金全攻略請看	<a href="https://taiwan14holidays.com.tw/%e4%bd%a0%e7%9f%a5%e9%81%93%e5%97%8e-%e9%98%b2%e7%96%ab%e8%a3%9c%e5%8a%a9%e9%80%99%e6%a8%a3%e7%94%b3%e8%ab%8b/">「你知道嗎 ? 防疫補助這樣申請」</a>' },
    { name: '#faq08', id: 'faq08', title: '自主健康管理是什麼?', text: '指揮中心自109年4月5日起，針對居家檢疫期滿者，實施額外7天自主健康管理。此決定為基於考量目前極少數感染COVID-19個案之潛伏期可能大於14天。' },
    { name: '#faq09', id: 'faq09', title: '自主健康管理期間可否外出用餐、聚會、至超商採買? 違反會被處罰嗎?', text: '用餐聚會：由於用餐無法全程配戴口罩，故期間禁止聚餐聚會，以降低感染風險。至超商採買：如沒出現任何症狀，可正常生活。進入超市或超商必須全程配戴口罩，遠離人潮並且保持距離。盡速離開，避免長時間逗留。 如未確實遵守各項自主健康管理規定，係違反「傳染病防治法」第48、58條，將依同法第67、69條，處新臺幣6萬以上至30萬元以下罰鍰或新臺幣1萬以上15萬元以下罰鍰。' },
    { name: '#faq10', id: 'faq10', title: '居家檢疫或者居家隔離者，在隔離/檢疫期間，如果有發燒或咳嗽等情形時，該怎麼辦?', text: '當您在隔離/檢疫期間，發燒 ≧38℃ 或咳嗽、呼吸急促等呼吸症狀時，您或家人請儘速與地方衛生局聯繫，依照地方衛生局指示，在外出時嚴禁搭乘大眾運輸工具，並應全程配戴口罩，按照醫院所訂立的分流看診機制就醫。' },
    { name: '#faq11', id: 'faq11', title: '確診者 (感染新冠狀肺炎) 如何請假?', text: `依據確診者(感染武漢肺炎)的因素，有不同規範：<br/>* 因公務感染者 : 可請公傷病假，公司應依據勞基法職業災害給予補償。<br/>* 非公務感染者 : 可請特休 (可領全薪) / 病假 (可領半薪) / 事假 (無薪)。<br/>` },
    { name: '#faq12', id: 'faq12', title: '如果家人受居家檢疫或居家隔離，可以怎麼做?', text: '如果居家檢疫或居家檢疫者本身生活不能自理 ，家屬可請防疫隔離假在家照顧家屬。' }
])

</script>

<style scoped>
</style>