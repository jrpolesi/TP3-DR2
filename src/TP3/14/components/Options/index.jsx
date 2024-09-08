import { Option } from "../Option";
import "./style.css";

export function Options({ question, selected, onAnswer }) {
  return (
    <ul className="options-list">
      {question.options.map((option) => (
        <Option
          key={option}
          isSelected={selected === option}
          option={option}
          isCorrect={selected === question.correct}
          onAnswer={(o) => onAnswer(o)}
          isDisabled={!!selected}
        />
      ))}
    </ul>
  );
}
