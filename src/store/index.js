import { defineStore } from "pinia";
import axios from "axios";

export const useStore  = defineStore("store", {
  state: () => {
    return {
      user: "tmdb",
      password:"movies",
      movies: [],
      purchased: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "0dcabfe51b80fa2de3e80d7d256e0e81",
        }
      })).data.results;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
          title: movie.title,
          release: movie.release_date
        }
      });
    },
  }
});