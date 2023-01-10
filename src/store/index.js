import { firestore } from "../firebase/index";
import { doc, setDoc } from "firebase/firestore";
import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      cart: new Map(),
    }
  },
  actions: {
    async populateFirestore() {
      const genres = new Map([[28, "Action"], [10751, "Family"], [878, "Science Fiction"], [12, "Adventure"], [14, "Fantasy"]]);

      genres.forEach(async (value, key) => {
        let data = (await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "Your Key",
            with_genres: key,
          }
        })).data.results;
        data = data.map((movie) => {
          return {
            id: movie.id,
            image: movie.poster_path,
          }
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
    },
    async getMovies(id) {
      let data = (await axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "Your Key",
          with_genres: id,
        }
      })).data.results;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
        }
      });
    },
    addToCart(id, data) {
      // this.cart.set(id, data);
      // console.log(this.cart);
    }
  }
});