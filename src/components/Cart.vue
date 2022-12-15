<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
console.log(store.purchased);
</script>

<template>
  <h2>Thank you for your money</h2>
  <div class="main-container">
    <div class="filler"></div>
    <div class="filler2"></div>
    <div v-for="product in store.purchased">
      <div class="product-container">
        <h1>{{ product.at(0) }}</h1>
        <img v-bind:src="`https://image.tmdb.org/t/p/w500/${product.at(1)}`">
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 2;
  background-color: #e9ceac;
  border: solid black 5px;
}
.filler {
  grid-column-start: 1;
  grid-row-start: 1;
}
.filler2 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.product-container {
  display: grid;
  grid-template-columns: repeat(2, 300px);
}

h2{
  background-color: #e9ceac;
  border: solid black 5px;
  border-bottom: 0px;
  text-align: center;
  margin: 0px;
}
img {
  margin-left: 10px;
  height: 35vh;
  width: 16vw;
  grid-column-start: 1;
  grid-row-start: 1;
}

h1 {
  grid-column-start: 2;
  grid-row-start: 1;
}
</style>
