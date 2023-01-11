import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PUBLIC_MOVIEDB_API,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: import.meta.env.API_KEY,
  },
});

export const getTrendingMovies = async () => api("");
