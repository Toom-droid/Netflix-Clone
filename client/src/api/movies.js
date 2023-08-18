import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzNiZjgwYjY3OTI5YTY0YjJmYmJhNDgyOTg0OWE1ZiIsInN1YiI6IjY0N2E4MzUzMGUyOWEyMDBiZjFlNmFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L1XP6OPqG-fjo_u4qOkWk5pHvOkIimsWa34R7rWAZ9s",
  },
};

export const moviesRequest = async () =>
  await axios.get("https://api.themoviedb.org/3/movie/popular", options);

export const recomendationsRequest = async (ids) =>
  await axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${ids}`,
    options
  );

export const searchRequest = async (search) =>
  await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}`,
    options
  );
