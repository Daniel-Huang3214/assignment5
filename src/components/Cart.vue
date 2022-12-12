<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div v-for="product in store.purchased">
    <div>{{product}}</div>
  </div>
</template>

<style scoped>
</style>
