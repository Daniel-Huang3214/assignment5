<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
store.getMovies();
</script>

<template>
  <div class="header-container">
    <div>
      Legitiment Express
      <RouterLink to="/LoginPage" custom v-slot="{ navigate }">
        <button @click="navigate">Login</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  border: solid rgb(0, 0, 0) 3px;
  height: 10vh;
  background-color: #e9ceac;
}

.header-container div {
  font-size: 40px;
  font-family: monaco, Consolas, "Lucida Console", monospace;
  text-align: center;
  padding-top: 20px;
}

button {
  position:absolute;
  right: 15px;
  height: 6vh;
}
</style>
