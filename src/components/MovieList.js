import React from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
function MovieList({ moviename, titlesearch, ratingsearch }) {
  const search = () => {
    return moviename.filter((film) => {
      return ratingsearch === 0
        ? film.title.toLowerCase().includes(titlesearch.toLowerCase())
        : Number(film.rating) === ratingsearch &&
            film.title.toLowerCase().includes(titlesearch.toLowerCase());
    });
  };

  useEffect(() =>
    search() === [] ? document.write(<p>nothing found</p>) : null
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {search().map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
}
export default MovieList;
