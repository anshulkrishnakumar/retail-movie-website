<script setup>
import SiteCartHeader from "../components/SiteCartHeader.vue";
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <SiteCartHeader />
  <div class="content-container">
    <div v-for="movie in Array.from(store.cart.values())">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      <button @click="store.removeFromCart(movie.id)">-</button>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2em 8.5em;
  padding-top: 1em;
  padding-left: 1em;
  background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
  height: 50em;
}

img {
  width: 15em;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 black;
}

button {
  position: absolute;
  margin-top: -0.5em;
  margin-left: -0.5em;
  font-size: 7.5em;
  color: red;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
