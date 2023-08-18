import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useMovies } from "../context/MoviesContext";

function Movies() {
  const { movies, getRecomendations } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recomendations, setRecomendations] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedMovie ? "hidden" : "auto";
  }, [selectedMovie]);

  {console.log(movies)}
  

  return (
    <main className="relative">
      <section className="h-[calc(90vh)] w-full bgBrowser relative">
        <NavBar />
        <div className="browserVignete h-[calc(90vh)] w-full"></div>
      </section>
      <section className="h-96 text-white grid grid-cols-5 p-10 absolute top-[calc(70%)]">
        {movies &&
          movies.map((movie, i) => (
            <div
              className="flex flex-col items-center justify-center"
              key={i}
              onClick={async () => {
                setSelectedMovie(movie);
                const res = await getRecomendations(movie.genre_ids);
                setRecomendations(res.data.results.slice(1,7));
              }}
            >
              <img
                className="h-4/5 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.id}
              />
            </div>
          ))}
      </section>
      {selectedMovie && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div
            className="fixed inset-0 flex items-center justify-center "
            onClick={() => {
              setSelectedMovie(null);
              setRecomendations(null);
            }}
          >
            <div className="rounded-lg p-4 bg-zinc-950 text-white mx-auto w-2/3 flex gap-5">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
                  alt="Movie Poster"
                  className="rounded-md min-w-[calc(30rem)] h-[calc(50rem)]"
                />
              </div>
              <div className="flex flex-col justify-around">
                <div>
                  <h1 className="text-xl font-bold">{selectedMovie.title}</h1>
                  <p>{selectedMovie.overview}</p>
                  <p>{selectedMovie.release_date}</p>
                </div>
                <h1>If you like {selectedMovie.title}:</h1>

                <div className="grid grid-cols-3 gap-5 h-[calc(35rem)] place-items-center">
                  {recomendations &&
                    recomendations.map((movie, i) => (
                      <div key={i}>
                        <img
                          className="h-60 rounded-md"
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                          alt={movie.title}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Movies;
