<script setup>
import axios from "axios";
import { ref } from 'vue';
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";
import Modal from '../components/Modal.vue';

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};
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
        <button @click="purchases" class="purchase">Cart</button>
      </div>
      <div class="movie-container">
      <div v-for="result in store.movies" class="movie">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500/${result.poster}`" />
        <p>{{ result.title }}</p>
        <p>{{ result.release }}</p>
        <button @click="purchased(result.title)">Purchase</button>
        <button @click="openModal(5000)">Modal</button>
      </div>
      <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
}

.main-container {
  background-color: #e9ceac;
  border: solid black 5px;
  height: 225vh;
}
.movie-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: 100px 100px 100px 100px;
  grid-row-gap: 400px;
  border: solid black 5px;
  height: 215vh;
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
  height: 42vh;
}
</style>