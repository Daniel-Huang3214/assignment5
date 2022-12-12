<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
store.getMovies();
</script>

<template>
  <div>
    Legitiment Express
    <RouterLink to="/LoginPage" custom v-slot="{ navigate }">
      <button @click="navigate">Login</button>
      </RouterLink>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
  border: solid black 5px;
}
</style>
