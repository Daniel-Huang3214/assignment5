<script setup>
import { useStore } from "../store/index.js";

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const store = useStore();

const purchased = async (movieTitle, moviePoster, movieId) => {
  store.purchased.push([movieTitle, moviePoster, movieId]);
};
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ props.id.at(1) }}</h1>
        <img v-bind:src="`https://image.tmdb.org/t/p/w500/${props.id.at(2)}`">
        <p class="release">{{ props.id.at(3) }}</p>
        <p class="overview">{{ props.id.at(4) }}</p>
        <button @click="purchased(props.id.at(1), props.id.at(2), props.id.at(0))" class="purchase">Purchase</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
* {
  color: rgb(233, 233, 233);
}
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: #1F2123;
  grid-gap: 10px;
  width: 70vw;
  height: 75vh;
  position: relative;
}

.purchase {
  position: absolute;
  height: 75px;
  width: 125px;
  color:black;
  bottom: 10%;
  right: 43%;
}

img {
  grid-column-start: 1;
  grid-row-start: 2;
  display: inline;
  height: 50vh;
  margin-left: 10px;
  border: solid black 5px;
}
.release {
  grid-column-start: 2;
  grid-row-start: 2;
}
.overview {
  padding-top: 40px;
  grid-column-start: 2;
  grid-row-start: 2;
}



.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>
