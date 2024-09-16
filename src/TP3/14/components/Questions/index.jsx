import { useState } from "react";
import { Options } from "../Options";
import "./style.css";

export function Questions({ questions, onPointsChange, points }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  function handleSelectedOption(option) {
    if (option === currentQuestion.correct) {
      onPointsChange((prevPoints) => prevPoints + 1);
    }

    setSelectedOption(option);
  }

  function handleNextQuestion() {
    setSelectedOption(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function handleNewGame() {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    onPointsChange(0);
  }

  const isFinished = currentQuestionIndex === questions.length;

  return (
    <div className="questions">
      <h2>{currentQuestion?.title ?? "Resultado"}</h2>

      {isFinished ? (
        <p className="questions-result">{points} pontos</p>
      ) : (
        <Options
          question={currentQuestion}
          selected={selectedOption}
          onAnswer={handleSelectedOption}
        />
      )}

      {isFinished ? (
        <button onClick={handleNewGame}>Reiniciar</button>
      ) : (
        <button
          className={!selectedOption ? "button-disabled" : ""}
          disabled={!selectedOption}
          onClick={handleNextQuestion}
        >
          Próxima
        </button>
      )}
    </div>
  );
}
