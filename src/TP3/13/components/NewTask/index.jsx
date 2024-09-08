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
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={updateValue}
      />
      <input
        type="text"
        name="category"
        value={values.category}
        onChange={updateValue}
      />
      <button disabled={isDisabled} onClick={() => onAddTask(values)}>
        Adicionar
      </button>
    </div>
  );
}
