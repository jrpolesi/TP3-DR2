import "./style.css";

import { useState } from "react";

export function NewTask({ onAddTask }) {
  const [values, setValues] = useState({
    title: "",
    category: "",
  });

  function updateValue(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [key]: value,
    });
  }

  const isDisabled = !values.title || !values.category;

  return (
    <div className="add-task-container">
      <h2>Nova tarefa</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Digite o título da tarefa..."
          value={values.title}
          onChange={updateValue}
        />
        <input
          type="text"
          name="category"
          placeholder="Digite a categoria da tarefa..."
          value={values.category}
          onChange={updateValue}
        />
      </div>
      <button
        className={isDisabled ? "disabled" : ""}
        disabled={isDisabled}
        onClick={() => {
          onAddTask(values);
          setValues({
            title: "",
            category: "",
          });
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
