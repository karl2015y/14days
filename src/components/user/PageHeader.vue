<template>
    <header
        class="header nav-wrap"
        id="nav"
    >
        <div class="content">
            <div class="nav"><a
                    href="/"
                    class="nav_logo"
                ><img src="https://ppt.cc/fFsAAx@.png"></a>
                <ul class="nav_list">

                    <li
                        v-for="(item, index) in menuArray"
                        class="nav_item"
                    >
                        <template v-if="item.children.length == 0">
                            <router-link :to="item.link">{{ item.label }}</router-link>
                        </template>

                        <template v-else>
                            <a
                                class="dropdown-toggle"
                                aria-expanded="false"
                                data-bs-toggle="dropdown"
                                :id="`dropdownMenuButton${index}`"
                                type="button"
                            >{{ item.label }}</a>
                            <ul
                                class="dropdown-menu nav_dropdown-menu"
                                :aria-labelledby="`dropdownMenuButton${index}`"
                            >
                                <li
                                    v-for="childItem in item.children"
                                    class="nav_dropdown-menu-item"
                                >


                                    <router-link
                                        :to="childItem.link"
                                        class="dropdown-item"
                                    >{{ childItem.label }}</router-link>




                                </li>
                            </ul>
                        </template>

                    </li>

                </ul>
                <div
                    class="moveMenu"
                    aria-controls="offcanvasExample"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                ><i class="bi bi-justify"></i></div>
                <div
                    class="moveMenuWrap offcanvas offcanvas-top"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                    tabindex="-1"
                >
                    <div class="moveMenu-header offcanvas-header">
                        <div class="nav_logo_move"><img src="https://ppt.cc/fFsAAx@.png"></div>
                        <button
                            aria-label="Close"
                            class="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            type="button"
                        ></button>
                    </div>
                    <div class="moveMenu-body">
                        <ul class="nav_list_move">
                            <template v-for="(item, index) in menuArray">

                                <template v-if="item.children.length == 0">
                                    <li class="nav_list_move_item">

                                        <router-link
                                            :to="item.link"
                                            class="nav_list_move_item_link"
                                        >
                                            {{ item.label }}
                                        </router-link>

                                    </li>

                                </template>

                                <template v-else>
                                    <li
                                        class="accordion-button"
                                        aria-expanded="true"
                                        :data-bs-target="`#nav_list_move_item_collapse${index}`"
                                        data-bs-toggle="collapse"
                                        type="button"
                                    >{{ item.label }}</li>
                                    <div
                                        class="accordion-collapse collapse show"
                                        :id="`#nav_list_move_item_collapse${index}`"
                                        aria-labelledby="headingOne"
                                    >
                                        <div
                                            v-for="childItem in item.children"
                                            class="nav_list_move_item_collapse-item"
                                            type="button"
                                            aria-label="Close"
                                            data-bs-dismiss="offcanvas"
                                        >
                                            <a
                                                :href="childItem.link"
                                                class="nav_list_move_item_collapse-link"
                                            >{{ childItem.label }}
                                            </a>
                                        </div>

                                    </div>
                                </template>
                            </template>




                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header
        v-if="props.showSearchBar"
        class="header"
    >
        <div class="content article-search-wrap">
            <div class="input-group article-search"><span
                    class="input-group-text"
                    id="basic-addon1"
                > <i class="bi bi-search"></i></span>
                <input
                    aria-describedby="basic-addon1"
                    aria-label="Username"
                    class="form-control"
                    placeholder="優惠資訊/旅遊"
                    type="text"
                >
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// props
interface Props {
    showSearchBar?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    showSearchBar: false,
});

const menuArray = ref([
    {
        label: '首頁',
        link: '/home',
        children: []
    },
    {
        label: '房型介紹',
        link: undefined,
        children: [
            {
                label: '台北防疫旅館',
                link: '/home#taipei',
            }, {
                label: '新北防疫旅館',
                link: '/home#newtaipei',
            }, {
                label: '桃園防疫旅館',
                link: '/home#taoyuan',
            }, {
                label: '新竹防疫旅館',
                link: '/home#hsinchu',
            }, {
                label: '台中防疫旅館',
                link: '/home#taicheng',
            }, {
                label: '台南防疫旅館',
                link: '/home#tainan',
            }, {
                label: '高雄防疫旅館',
                link: '/home#kaohsiung',
            },
        ]
    },
    {
        label: '防疫全攻略',
        link: '/article',
        children: []
    },
    {
        label: '最新消息',
        link: '/news',
        children: []
    },
    {
        label: '防疫旅館Q&A',
        link: '/Q&A',
        children: []
    },
    {
        label: '聯絡我們',
        link: '/ContactUs',
        children: []
    },
])
</script>

<style scoped>
</style>