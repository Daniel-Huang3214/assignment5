<script setup>
import { useStore } from "../store/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const account = useStore();
const userin = ref("");
const passin = ref("");
const error = ref(false);

const user = account.user;
const password = account.password
const login = () => {
  if (userin.value === account.user && passin.value === account.password) {
    console.log("among us");
    router.push("./WebPage");
  } else {
    error.value = true;
    console.log(error.value);
  }
};
</script>

<template>
  <div class="login-UI">
    <form @submit.prevent="login()">
      <input type="text" placeholder="Username" v-model="userin" />
      <input type="password" placeholder="Password" v-model="passin" />
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
  grid-template-rows: 50px 50px 50px;
  display: grid;
  margin: 20px;
  border: solid black 3px;

}
.error {
  grid-column-start: 2;
  grid-row-start: 3;
}
form {
  grid-column-start: 2;
  grid-row-start: 2;
}
</style>
