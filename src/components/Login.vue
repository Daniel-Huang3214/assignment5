<script setup>
import { storeToRefs } from "pinia";
import { store } from "../store/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const account = store();
const userin = ref("");
const passin = ref("");
const error = ref(false);

const { user, password } = storeToRefs(account);
const login = () => {
  if (userin.value === user.value && passin.value === password.value) {
    console.log("among us");
    router.push("./WebPage");
  } else {
    error.value = true;
    console.log(error.value);
  }
};
</script>

<template>
  <div>{{ user }} {{ password }}</div>
  <form @submit.prevent="login()">
    <input type="text" placeholder="Username" v-model="userin" />
    <input type="password" placeholder="Password" v-model="passin" />
    <input type="submit" value="Login" />
  </form>
  <div v-if="error">User/Pass wrong</div>
</template>

<style scoped>
div {
  margin: 20px;
  border: solid black 5px;
}
</style>
