import { useState } from "react";
import "./style.css";

export function MovieItem({ movie, handleChoice }) {
  const [choice, setChoice] = useState(null);

  function onChoice(choice) {
    setChoice(choice);
    handleChoice(movie, choice);
  }

  const isDisabled = choice !== null;

  return (
    <li className="movie-item">
      <button
        className="material-symbols-outlined movie-item-btn--unliked"
        disabled={isDisabled}
        onClick={() => onChoice(false)}
      >
        thumb_down
      </button>

      <span className="movie-item--title">{movie}</span>

      <button
        className="material-symbols-outlined movie-item-btn--liked"
        disabled={isDisabled}
        onClick={() => onChoice(true)}
      >
        thumb_up
      </button>
    </li>
  );
}
