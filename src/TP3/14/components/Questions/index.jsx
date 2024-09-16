import { useState } from "react";
import { Options } from "../Options";
import "./style.css";

export function Questions({ questions, onPointsChange, points }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  function handleSelectedOption(option) {
    if (option === currentQuestion.correct) {
      onPointsChange((prevPoints) => prevPoints + 1);
    }

    setSelectedOption(option);

    const isLastQuestion = currentQuestionIndex === questions.length;
    debugger
    if (isLastQuestion) {
      setIsFinished(true);
    }
  }

  function handleNextQuestion() {
    setSelectedOption(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function handleNewGame() {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsFinished(false);
    onPointsChange(0);
  }

  return (
    <div className="questions">
      <h2>{currentQuestion?.title ?? "Resultado"}</h2>

      {isFinished ? (
        <p className="questions-result">{points}</p>
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
