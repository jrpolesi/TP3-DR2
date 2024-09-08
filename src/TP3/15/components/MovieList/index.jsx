import { useState } from "react";
import { MovieItem } from "../MovieItem";
import "./style.css";

const MOVIES = [
  "Matrix",
  "O Poderoso Chefão",
  "O Senhor dos Anéis",
  "Star Wars",
  "Titanic",
  "Avatar",
  "O Rei Leão",
  "Harry Potter",
  "Jurassic Park",
  "Indiana Jones",
];

export function MovieList({ onUpdateMyList }) {
  const [currentIndexMovie, setCurrentIndexMovie] = useState(0);

  function handleChoice(movie, liked) {
    if (liked) {
      onUpdateMyList((prev) => [...prev, movie]);
    }

    if (currentIndexMovie < MOVIES.length) {
      setCurrentIndexMovie((prev) => prev + 1);
    }
  }

  const currentMovie = MOVIES[currentIndexMovie];

  return (
    <div className="movie-list--container">
      <h2>Avalie os filmes abaixo</h2>
      {currentMovie ? (
        <ul className="movie-list">
          <MovieItem
            key={currentMovie}
            movie={currentMovie}
            handleChoice={handleChoice}
          />
        </ul>
      ) : (
        <p>A lista acabou</p>
      )}
    </div>
  );
}
