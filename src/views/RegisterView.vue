<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
    router.push("/purchase");
  } catch (error) {
  }
};

const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
};
</script>

<template>
  <div class="login-background"></div>
  <a href="/">MH</a>
  <div class="login-plat">
    <h1>Register</h1>
    <img src="../assets/images/google-logo.png" @click="registerUserByGoogle">
    <form @submit.prevent="registerUserByEmail()">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password1" type="password" placeholder="Password" />
      <input v-model="password2" type="password" placeholder="Confirm Password" />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>


<style scoped>
* {
  padding: 0;
  margin: 0;
}

@font-face {
  font-family: logofont;
  src: url(../assets/fonts/Nabla.ttf);
}

@font-face {
  font-family: textfont;
  src: url(../assets/fonts/Lato.ttf);
}

.login-background {
  background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
  height: 64.25em;
}

.login-plat {
  position: absolute;
  text-align: center;
  color: white;
  background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
  border-radius: 15%;
  box-shadow: 0 0 10em 0 black;
  border: 2px solid orange;
  top: 20%;
  left: 30%;
  right: 30%;
  height: 35em;
}

h1 {
  margin: 1.5em;
  font-size: 3em;
  font-family: "textfont";
  color: grey;
}

input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  height: 1.5em;
  width: 15em;
  padding: 0.5em;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
}

input[type=submit] {
  height: 4em;
  width: 16.35em;
  color: grey;
}

input[type=submit]:hover {
  cursor: pointer;
  color: orange;
  transition: 0.5s;
}

p {
  font-family: "textfont";
}

a {
  position: absolute;
  top: 0;
  margin: 0.5em;
  font-size: 3.5em;
  text-decoration: none;
  font-family: "logofont";
}

img {
  position: absolute;
  right: 2.5em;
  height: 2em;
  cursor: pointer;
}
</style>
