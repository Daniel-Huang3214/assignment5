<script setup>
import { ref } from 'vue';
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";
import Modal from '../components/Modal.vue';

const showModal = ref(false);
const selectedId = ref(0);
const router = useRouter();
const store = useStore();

const openModal = (id, title, poster, release, overview) => {
  showModal.value = true;
  selectedId.value = [id, title, poster, release, overview];
};

const closeModal = () => {
  showModal.value = false;
};

const purchases = () => {
  console.log(store.movies);
  router.push("./Checkout");
}
</script>

<template>
  <div class="main-container">
    <h1>"Your money, our pockets"</h1>
    <div>
      <button @click="purchases" class="purchase">Cart</button>
    </div>
    <div class="movie-container">
      <div v-for="result in store.movies" class="movie">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500/${result.poster}`"
          @click="openModal(result.id, result.title, result.poster, result.release, result.overview)" />
      </div>
      <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
}

h1 {
  text-align: center;
}
.main-container {
  background-color: #e9ceac;
  border: solid black 5px;
  height: 155vh;
}

.movie-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: 100px 100px 100px 100px;
  grid-row-gap: 200px;
  border: solid black 5px;
  height: 145vh;
}

img {
  width: 14vw;
  height: 30vh;
}

.purchase {
  position: fixed;
  right: 35px;
  top: 25px;
}

.movie {
  border: solid black 5px;
  height: 30vh;
}
</style>