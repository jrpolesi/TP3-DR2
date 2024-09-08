import { useState } from "react";
import { NewTask } from "../NewTask";
import { TodoItem } from "../TodoItem";
import { Filter } from "../Filter";

const TASKS = [
  { id: "1", title: "Estudar para a prova", category: "Estudos" },
  { id: "2", title: "Ler um livro", category: "Estudos" },
  { id: "3", title: "Fazer compras", category: "Mercado" },
  { id: "4", title: "Assistir um filme", category: "Divertimento" },
  { id: "5", title: "Fazer exercícios", category: "Saúde" },
];

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function TodoList() {
  const [filter, setFilter] = useState([]);
  const [tasks, setTasks] = useState(TASKS);

  function addTask(newTask) {
    setTasks([
      ...tasks,
      {
        id: generateId(),
        title: newTask.title,
        category: newTask.category,
      },
    ]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  function onFilterChange(isActive, category) {
    setFilter((prevFilter) =>
      isActive
        ? prevFilter.filter((c) => c !== category)
        : [...prevFilter, category]
    );
  }
  const filteredTasks = filter.length
    ? tasks.filter((task) => filter.includes(task.category))
    : tasks;

  return (
    <div>
      <NewTask onAddTask={addTask} />

      <Filter onFilterChange={onFilterChange} tasks={tasks} filter={filter} />
      <ul>
        {filteredTasks.map((task) => (
          <TodoItem key={task.id} task={task} onTaskDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
}
