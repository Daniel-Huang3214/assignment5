<script setup>
import axios from "axios";
import { ref } from 'vue';
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
let movieData = ref("");

const purchases = () => {
  console.log(store.movies);
  router.push("./Checkout");
}
const openDiv = async (test) => {
  movieData.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${test}`, {
      params: {
        api_key: "e8016904e176c4cc2f25acfd19077f5c",
        include_adult: "false",
      },
    })
  ).data.title;
  store.purchased.push(movieData.value);
  console.log(store.purchased);
};
</script>

<template>
  <div>
    <button @click="purchases">Cart</button>
  </div>
  <div v-for="result in store.movies">
    <button @click="openDiv(result.id)">
      <img
        v-bind:src="`https://image.tmdb.org/t/p/w500/${result.poster}`"
      />
      <p>{{ result.id }}</p>
    </button>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
  border: solid black 5px;
}
</style>

<!-- 
store.$patch pinia
pinia store push 
-->