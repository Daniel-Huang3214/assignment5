<script setup>
import Top from "../components/Top.vue";
import Middle from "../components/Middle.vue";
import Bottom from "../components/Bottom.vue";
</script>

<template>
  <div class="div-container">
    <Top />
    <Middle />
    <Bottom />
  </div>
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
  color: white;
}

.div-container {
  background-color: rgb(68, 68, 68);
  height: 110%;
}
</style>
