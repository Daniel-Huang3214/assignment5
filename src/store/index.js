import { defineStore } from "pinia";

export const store = defineStore("account", {
  state: () => ({
    user: "tmdb",
    password: "movies",
    car: {type:"Fiat", model:"500", color:"white"},
  }),
});
