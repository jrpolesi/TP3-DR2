/*
Utilizando a plataforma CodeSandbox e o template React, implemente uma aplicação que simule uma lista de tarefas. O usuário pode inserir e remover novas tarefas.

A interface inicial apresenta uma relação de categorias de tarefas (por exemplo: mercado, farmácia, estudos).

Ao selecionar uma das categorias, a aplicação apresenta as tarefas que pertencem àquela categoria.

Use o layout que achar melhor!
A aplicação deve estar componentizada.
Implemente estilos diferentes para o esquema de cores light e dark.
Pense Mobile-first!
*/

import { TodoList } from "./components/TodoList";

export default function App() {
  return <TodoList />;
}
