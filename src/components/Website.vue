<script setup>
import axios from "axios";
import { ref } from "vue";

let movie = ref(false);

const onChange = () => {
  axios
    .get(`https://api.themoviedb.org/3/trending/all/day`, {
      params: {
        api_key: "0dcabfe51b80fa2de3e80d7d256e0e81",
      },
    })
    .then((movieData) => {
      movie.value = movieData.data.results;
      console.log(movieData.data);
    });
};
</script>

<template>
  <div>
    <button @click="onChange">aead</button>
  </div>
  <li v-for="result in movie">{{ result.backdrop_path }}</li>
</template>

<style scoped>
div {
  margin: 20px;
  border: solid black 5px;
}
</style>
