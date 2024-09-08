import "./style.css";
import { useState } from "react";
import { NewTask } from "../NewTask";
import { TodoItem } from "../TodoItem";
import { Filter } from "../Filter";
import { DarkModeBtn } from "../DarkModeBtn";

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
    const updatedTasks = tasks.filter((t) => t.id !== task.id);

    setTasks(updatedTasks);
    setFilter((prevFilter) =>
      prevFilter.filter((c) => updatedTasks.find((t) => t.category === c))
    );
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
    <div className="todo-list-container">
      <NewTask onAddTask={addTask} />

      <div className="todo-list-content">
        <div className="todo-list-title">
          <h2>Minhas tarefas</h2>
          <DarkModeBtn />
        </div>

        <Filter onFilterChange={onFilterChange} tasks={tasks} filter={filter} />

        {!filteredTasks.length && <p>Nenhuma tarefa encontrada</p>}

        <ul className="todo-list">
          {filteredTasks.map((task) => (
            <TodoItem key={task.id} task={task} onTaskDelete={deleteTask} />
          ))}
        </ul>
      </div>
    </div>
  );
}
