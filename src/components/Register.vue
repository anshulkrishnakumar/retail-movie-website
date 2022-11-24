<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const name = ref("");
const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value);
};
</script>

<template>
  <div class="register-container">
    <form @submit.prevent="register()">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<style scoped>
.register-container form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.submitted {
  color: white;
}
</style>
