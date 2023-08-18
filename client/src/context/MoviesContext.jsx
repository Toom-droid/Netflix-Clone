import { createContext, useState, useContext, useEffect } from "react";
import {
  moviesRequest,
  recomendationsRequest,
  searchRequest,
} from "../api/movies";
export const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const res = await moviesRequest();
      setMovies(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecomendations = async (ids) => {
    try {
      const res = await recomendationsRequest(ids);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const searchMovie = async (search) => {
    try {
      const res = await searchRequest(search);
      console.log(res.data.results)
      setMovies(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, getRecomendations, searchMovie, getMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
