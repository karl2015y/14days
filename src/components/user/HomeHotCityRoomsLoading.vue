<template>
    <li
        class="product_item_wrap"
        v-for="i in 4"
    >
        <div class="product_item">
            <q-card class="flex w-full lg:block">


                <q-skeleton
                    class="w-1/3 lg:w-full lg:h-44"
                    square
                />
                <div class="w-2/3 lg:w-full flex flex-col items-end lg:items-start">
                    <q-item class="w-full">

                        <q-item-section>
                            <q-item-label>
                                <q-skeleton type="text" />
                            </q-item-label>
                            <q-item-label caption>
                                <q-skeleton type="text" />
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>


                        <q-item-section>
                            <q-item-label class="">
                                <q-skeleton
                                    width="80px"
                                    type="text"
                                />

                            </q-item-label>

                        </q-item-section>
                    </q-item>
                </div>

            </q-card>
        </div>
    </li>

</template>

<script setup lang="ts">






</script>

<style scoped>
/* @tailwind base; */
/* @tailwind components; */
@tailwind utilities;
</style>