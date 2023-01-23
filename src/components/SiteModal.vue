<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

let data = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "8ac2fee2e116a087001b0fb5443451e5",
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ data.title }}</h1>
        <p class="overview">{{ data.overview }}</p>
        <p class="release-date">{{ data.release_date }}</p>
        <img :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`" alt="">
        <button class="cart" @click="
  store.addToCart(props.id, {
    id: data.id,
    poster: data.poster_path,
    title: data.title,
    date: data.release_date,
  })
        ">
          Add To Cart
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
* {
  color: white;
}

@font-face {
  font-family: textfont;
  src: url(../assets/fonts/Lato.ttf);
}

@media (min-width: 1280px) {
  .modal-outer-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #00000099;
    z-index: 3;
  }

  .modal-outer-container .modal-inner-container {
    position: relative;
    background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    border-radius: 15px;
    box-shadow: 0 0 10em 0 black;
    border: 2px solid orange;
  }
  .modal-inner-container {
    width: 65em;
  }
  .modal-outer-container .modal-inner-container .close-button {
    position: absolute;
    right: 0;
    padding: 2%;
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 1em;
    border-radius: 15px;
  }

  .close-button {
    color: grey;
  }

  .close-button:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }

  .modal-inner-container {
    display: grid;
    font-family: "textfont";
  }

  h1 {
    grid-column: 1 / span 3;
    grid-row: 1;
    text-align: center;
    font-size: 1.5em;
    margin-top: 1em;
  }

  img {
    grid-column: 1 / span 1;
    grid-row: 2 / span 5;
    margin-left: 2em;
    margin-top: 2em;
    height: 35em;
    border-radius: 15px;
    border: 2px solid orange;
  }

  .overview {
    grid-column: 2 / span 1;
    grid-row: 2;
    margin-left: 2em;
    margin-right: 5em;
    margin-top: 2em;
    font-size: 1.25em;
    text-align: justify;
  }

  .release-date {
    grid-column: 2 / span 4;
    grid-row: 4;
    margin-left: 2em;
    font-size: 1.25em;
  }

  .cart {
    grid-row: 7;
    grid-column: 1 / span 3;
    margin-left: auto;
    margin-right: auto;
    padding: 5%;
    border: none;
    color: grey;
    background-color: transparent;
  }

  .cart:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }
}

@media (min-width: 767px) and (max-width: 1279px) {
  .modal-outer-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #00000099;
    z-index: 3;
  }

  .modal-outer-container .modal-inner-container {
    position: relative;
    background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    border-radius: 15px;
    box-shadow: 0 0 10em 0 black;
    border: 2px solid orange;
  }

  .modal-outer-container .modal-inner-container .close-button {
    position: absolute;
    right: 0;
    padding: 2%;
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 1em;
    border-radius: 15px;
  }

  .close-button {
    color: grey;
  }

  .close-button:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }

  .modal-inner-container {
    display: grid;
    font-family: "textfont";
  }

  h1 {
    grid-column: 1 / span 3;
    grid-row: 1;
    text-align: center;
    font-size: 1.5em;
  }

  img {
    grid-column: 1 / span 1;
    grid-row: 2 / span 5;
    margin-left: 0.75em;
    height: 30em;
    border-radius: 15px;
    border: 2px solid orange;
  }

  .overview {
    grid-column: 2 / span 1;
    grid-row: 2;
    margin-left: 0.75em;
    margin-right: 0.75em;
    font-size: 1.25em;
    text-align: justify;
  }

  .release-date {
    grid-column: 2 / span 4;
    grid-row: 4;
    text-align: center;
    font-size: 1.5em;
  }

  .cart {
    grid-row: 7;
    grid-column: 1 / span 3;
    padding: 5%;
    border: none;
    color: grey;
    background-color: transparent;
  }

  .cart:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }
}

@media (min-width: 481px) and (max-width: 766px) {
  .modal-outer-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #00000099;
    z-index: 3;
  }

  .modal-outer-container .modal-inner-container {
    position: relative;
    background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    border-radius: 15px;
    box-shadow: 0 0 10em 0 black;
    border: 2px solid orange;
  }

  .modal-outer-container .modal-inner-container .close-button {
    position: absolute;
    right: 0;
    padding: 2%;
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 1.5em;
    border-radius: 15px;
  }

  .close-button {
    color: grey;
  }

  .close-button:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }

  .modal-inner-container {
    display: grid;
    font-family: "textfont";
  }

  h1 {
    grid-column: 1 / span 3;
    grid-row: 1;
    text-align: center;
    font-size: 1.5em;
  }

  img {
    grid-column: 1 / span 2;
    grid-row: 3 / span 3;
    margin-left: 0.75em;
    height: 20em;
    border-radius: 15px;
    border: 2px solid orange;
  }

  .overview {
    grid-column: 1 / span 3;
    grid-row: 2;
    margin-left: 0.75em;
    margin-right: 0.75em;
    font-size: 1.25em;
    text-align: justify;
  }

  .release-date {
    grid-column: 2 / span 2;
    grid-row: 4;
    text-align: center;
    font-size: 1.25em;
  }

  .cart {
    grid-row: 7;
    grid-column: 1 / span 3;
    padding: 5%;
    border: none;
    color: grey;
    background-color: transparent;
  }

  .cart:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .modal-outer-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #00000099;
    z-index: 3;
  }

  .modal-outer-container .modal-inner-container {
    position: relative;
    background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
    border-radius: 15px;
    box-shadow: 0 0 10em 0 black;
    border: 2px solid orange;
  }

  .modal-outer-container .modal-inner-container .close-button {
    position: absolute;
    right: 0;
    padding: 2%;
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 1em;
    border-radius: 15px;
  }

  .close-button {
    color: grey;
  }

  .close-button:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }

  .modal-inner-container {
    display: grid;
    font-family: "textfont";
  }

  h1 {
    grid-column: 1 / span 3;
    grid-row: 1;
    text-align: center;
    font-size: 1.5em;
  }

  img {
    grid-column: 1 / span 2;
    grid-row: 3 / span 3;
    margin-left: 0.75em;
    height: 15em;
    border-radius: 15px;
    border: 2px solid orange;
  }

  .overview {
    grid-column: 1 / span 3;
    grid-row: 2;
    margin-left: 0.75em;
    margin-right: 0.75em;
    font-size: 1.25em;
    text-align: justify;
  }

  .release-date {
    grid-column: 2 / span 2;
    grid-row: 4;
    text-align: center;
    font-size: 1em;
  }

  .cart {
    grid-row: 7;
    grid-column: 1 / span 3;
    padding: 5%;
    border: none;
    color: grey;
    background-color: transparent;
  }

  .cart:hover {
    cursor: pointer;
    color: orange;
    transition: 0.5s;
  }
}
</style>
