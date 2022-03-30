<template>
  <div class="flex">
    <q-btn icon="home" class="w-40">安安 {{ store.data }}</q-btn>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from './stores/main.store';

const store = useMainStore();
</script>

<style lang="sass">
#app
  display: flex
  flex-direction: column
</style>
