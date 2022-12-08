<script setup>
import axios from "axios";
import { ref } from "vue";

let movie = ref(false);

const test = () => {
  console.log(movie);
}
const onChange = () => {
  axios
    .get(`https://api.themoviedb.org/3/trending/all/day`, {
      params: {
        api_key: "0dcabfe51b80fa2de3e80d7d256e0e81",
      },
    })
    .then((movieData) => {
      movie.value = movieData.data.results;
      console.log(movie.value.at(0));
    });
};
</script>

<template>
  <div>
    <button @click="onChange">aead</button>
  </div>
  <div v-for="(result, index) in movie"> <button  @click="test"><img v-bind:src="`https://image.tmdb.org/t/p/w500/${ result.backdrop_path }`"/> <p>{{ result.id }}</p></button></div>
</template>

<style scoped>
div {
  margin: 20px;
  border: solid black 5px;
}
</style>
