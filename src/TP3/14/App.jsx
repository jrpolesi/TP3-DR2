/*
Utilizando a ferramenta CodeSandbox e o template React, implemente uma aplicação que simule um Quiz em que há várias questões. Cada questão possui um enunciado e quatro opções. A aplicação deve conter ao menos 10 questões. Implemente um mecanismo de pontuação e exiba a pontuação do usuário ao final do Quiz.

Use o layout que achar melhor!
Não implemente navegação, use apenas gerenciamento de estado.
Implemente estilos diferentes para o esquema de cores light e dark.
Pense Mobile-first!
*/

import { useState } from "react";

const QUESTIONS = [
  {
    title: "Qual é o maior planeta do sistema solar?",
    options: ["Júpiter", "Saturno", "Netuno", "Urano"],
    correct: "Júpiter",
  },
  {
    title: "Qual é o menor planeta do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
  },
  {
    title: "Qual é o planeta mais quente do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Vênus",
  },
  {
    title: "Qual é o planeta mais frio do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Netuno"],
    correct: "Netuno",
  },
  {
    title: "Qual é o planeta mais distante do sol?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Netuno",
  },
  {
    title: "Qual é o planeta mais próximo do sol?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
  },
  {
    title: "Qual é o planeta com maior número de luas?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Júpiter",
  },
  {
    title: "Qual é o planeta com menor número de luas?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
  },
  {
    title: "Qual é o planeta mais denso do sistema solar?",
    options: ["Mercúrio", "Vênus", "Terra", "Marte"],
    correct: "Terra",
  },
  {
    title: "Qual é o planeta menos denso do sistema solar?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Saturno",
  },
];

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <div>
      <div>
        <div>
          <span>Seus pontos:</span>
          <span>{points}</span>
        </div>
      </div>

      <Game onPointsChange={setPoints} />
    </div>
  );
}

function Game({ onPointsChange }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  function handleOptionClick(option) {
    setSelectedOption(option);
  }

  function handleNextQuestion() {
    if (selectedOption === currentQuestion.correct) {
      onPointsChange((prevPoints) => prevPoints + 1);
    }

    const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;
    if (isLastQuestion) {
      setIsFinished(true);
      return;
    }

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
    <div>
      <h2>{currentQuestion.title}</h2>
      <ul>
        {currentQuestion.options.map((option) => (
          <li
            key={option}
            style={{
              backgroundColor:
                selectedOption === option
                  ? option === currentQuestion.correct
                    ? "green"
                    : "red"
                  : "transparent",
            }}
            onClick={() => !selectedOption && handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {isFinished ? (
        <button onClick={handleNewGame}>Reiniciar</button>
      ) : (
        <button disabled={!selectedOption} onClick={handleNextQuestion}>Próxima</button>
      )}
    </div>
  );
}
