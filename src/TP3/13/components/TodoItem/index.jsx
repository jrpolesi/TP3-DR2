import { useState } from "react";

export function TodoItem({ task, onTaskDelete }) {
  const [completed, setCompleted] = useState(false);

  const textDecoration = completed ? "line-through" : "none";

  return (
    <li>
      <div>
        <span style={{ textDecoration }}>{task.title}</span>
        <span>{task.category}</span>
      </div>

      <button onClick={() => setCompleted(true)}>Concluir</button>

      <button onClick={() => onTaskDelete(task)}>Excluir</button>
    </li>
  );
}
