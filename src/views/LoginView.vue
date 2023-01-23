<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const router = useRouter();
const email = ref("");
const password = ref("");
const signInUserWithEmail = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/purchase");
  } catch (error) {
  }
};
const signInUserWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("./purchase");
  } catch (error) {
  }
};
</script>

<template>
  <div class="login-background"></div>
  <a href="/">MH</a>
  <div class="login-plat">
    <h1>Sign In</h1>
    <img src="../assets/images/google-logo.png" @click="signInUserWithGoogle()">
    <form @submit.prevent="signInUserWithEmail()">
      <input v-model="email" type="email" placeholder="email" /> <br />
      <input v-model="password" type="password" placeholder="password" />
      <br />
      <input type="submit" value="Login" />
    </form>
    <div v-if="error">
      <p>Incorrect password.</p>
    </div>
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
  margin-top: 4em;
  height: 3em;
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