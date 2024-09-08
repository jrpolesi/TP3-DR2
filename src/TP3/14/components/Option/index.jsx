import "./style.css";

export function Option({
  isSelected,
  option,
  onAnswer,
  isCorrect,
  isDisabled,
}) {
  let classes = ["option"];
  if (isSelected && isCorrect) {
    classes.push("option--correct");
  }
  if (isSelected && !isCorrect) {
    classes.push("option--incorrect");
  }

  return (
    <li className={classes.join(" ")}>
      <label
        className={isDisabled ? "option-label--disabled" : ""}
        onClick={() => !isDisabled && onAnswer(option)}
      >
        <input type="radio" name="option" checked={isSelected} readOnly />
        {option}
      </label>
    </li>
  );
}
