import "./style.css";
import { useState } from "react";

export function TodoItem({ task, onTaskDelete }) {
  const [completed, setCompleted] = useState(false);

  const textDecoration = completed ? "line-through" : "none";

  return (
    <li className="list-item">
      <div className="list-item--content">
        <h3 style={{ textDecoration }}>{task.title}</h3>
        <span className="list-item--category">{task.category}</span>
      </div>

      <div className="list-item--actions">
        <button onClick={() => setCompleted((o) => !o)}>
          {completed ? "Voltar" : "Concluir"}
        </button>

        <button onClick={() => onTaskDelete(task)}>Excluir</button>
      </div>
    </li>
  );
}
