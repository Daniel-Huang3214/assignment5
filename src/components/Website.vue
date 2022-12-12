<script setup>
import axios from "axios";
import { ref } from 'vue';
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const purchases = () => {
  console.log(store.movies);
  router.push("./Checkout");
}
const purchased = async (movieTitle) => {
  store.purchased.push(movieTitle);
  console.log(store.purchased);
};
</script>

<template>
  <div class="main-container">
      <div>
        <button @click="purchases">Cart</button>
      </div>
      <div class="movie-container">
      <div v-for="result in store.movies" class="movie">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500/${result.poster}`" />
        <p>{{ result.title }}</p>
        <p>{{ result.release }}</p>
        <button @click="purchased(result.title)">Purchase</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
  border: solid black 5px;
}

.main-container {
  background-color: #e9ceac;
}
.movie-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: 100px 100px 100px 100px;
  grid-row-gap: 400px;
}

img {
  width: 14vw;
  height: 30vh;
}

.movie {
}
</style>