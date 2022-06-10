
<template>

    <page-header />
    <router-view />
    <page-footer />

</template>


<script lang="ts">
export default {
    name: 'UserLayout',
}
</script>
<script setup lang="ts">
import PageHeader from '@/components/user/PageHeader.vue'
import PageFooter from '@/components/user/PageFooter.vue'

</script>


