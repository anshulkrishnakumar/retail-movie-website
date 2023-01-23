<script setup>
import axios from "axios";
import { ref } from "vue";
import SiteModal from "../components/SiteModal.vue";
import SitePurchaseHeader from "../components/SitePurchaseHeader.vue"
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(28);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;

  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "8ac2fee2e116a087001b0fb5443451e5",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  totalPages.value = data.total_pages;

  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};

await store.populateFirestore();
</script>

<template>
  <SitePurchaseHeader />
  <div class="content-container">
    <select v-model="genre" @change="getGenres()">
      <option value="Action">Action</option>
      <option value="Family">Family</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Adventure">Adventure</option>
      <option value="Fantasy">Fantasy</option>
    </select>
    <input type="search" v-model="criteria" @keydown.enter="search(0)" placeholder="Search" />
    <div class="purchase-container">
      <template v-if="searchResults.length">
        <img v-for="movie in searchResults" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
      <template v-else>
        <img v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
      <template v-if="searchResults.length">
        <div class="navigation">
          <button v-show="page > 1" @click="search(-1)">&lt;</button>
          <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
          <button v-show="page < totalPages" @click="search(1)">></button>
        </div>
      </template>
      <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: logofont;
  src: url(../assets/fonts/Nabla.ttf);
}

@font-face {
  font-family: textfont;
  src: url(../assets/fonts/Lato.ttf);
}
.content-container {
  background: linear-gradient(360deg, rgba(15, 15, 15, 1) 0%, rgba(42, 42, 42, 1) 98%);
  height: 107.5em;
}
select {
    height: 3em;
    width: 12.5%;
    border: 0.5px solid;
    outline: none;
    color: grey;
    background-color: transparent;
  }

  select:hover {
    border-color: orange;
    transition: 0.5s;
  }

  input[type="search"] {
    height: 3em;
    width: 87.5%;
    text-align: center;
    border: 0.5px solid;
    outline: none;
    color: grey;
    background-color: transparent;
  }

  input[type="search"]:hover {
    transition: 0.5s;
    border-color: orange;
  }

  .navigation {
    text-align: center;
  }

  h1 {
    display: inline;
    padding-left: 1em;
    padding-right: 1em;
    color: grey;
    font-family: "textfont";
  }

  button {
    font-size: 2em;
    background-color: transparent;
    border: none;
    color: grey;
    cursor: pointer;
    font-family: "textfont";
  }

  button:hover {
    transition: 0.5s;
    color: orange;
  }
  
@media (min-width: 1280px) {
  img {
    margin: 2%;
    width: 16%;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 black;
  }

}

@media (min-width: 1024px) and (max-width: 1279px) {
  img {
    margin: 2%;
    width: 21%;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 black;
  }
  
}

@media (min-width: 767px) and (max-width: 1023px) {
  img {
    margin: 2%;
    width: 21%;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 black;
  }
}

@media (min-width: 480px) and (max-width: 766px) {
  img {
    margin: 2%;
    width: 46%;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 black;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  img {
    margin: 2%;
    width: 96%;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 black;
  }
}

img:hover {
  opacity: 0.8;
  transition: 0.5s;
  cursor: pointer;
}
</style>