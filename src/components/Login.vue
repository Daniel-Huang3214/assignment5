<script setup>
import { useStore } from "../store/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const account = useStore();
const userin = ref("");
const passin = ref("");
const error = ref(false);

const login = () => {
  if (userin.value === account.user && passin.value === account.password) {
    router.push("./WebPage");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="login-UI">
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <input type="text" placeholder="Username" v-model="userin" />
      <br>
      <input type="password" placeholder="Password" v-model="passin" />
      <br>
      <input type="submit" value="Login" />
    </form>
    <div v-if="error" class="error">User/Pass wrong</div>
  </div>
</template>

<style scoped>
div {
  background-color: #e9ceac;
}

.login-UI {
  grid-template-columns: auto auto auto;
  grid-template-rows: 200px 200px 200px;
  display: grid;
  margin: 20px;
  border: solid black 3px;

}

.error {
  grid-column-start: 2;
  grid-row-start: 3;
  text-align: center;
}

h1 {
  grid-column-start: 2;
  text-align: center;
}

form {
  text-align: center;
  grid-column-start: 2;
  grid-row-start: 2;
}
</style>
