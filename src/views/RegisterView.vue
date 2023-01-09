<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import { createUserWithEmailAndPassword } from "firebase/auth";

const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const registerUser = async () => {
  if (password1.value !== password2.value) {
    console.log("Password issue");
    return;
  }

  await createUserWithEmailAndPassword(auth, email.value, password1.value);
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="registerUser()">
      <input v-model="username" type="text" placeholder="username" /> <br />
      <input v-model="email" type="email" placeholder="email" /> <br />
      <input v-model="password1" type="password" placeholder="password" /> <br />
      <input v-model="password2" type="password" placeholder="re-enter password" /> <br />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<style scoped></style>
