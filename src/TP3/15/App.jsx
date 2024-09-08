/*
Utilizando a ferramenta CodeSandbox e o template React, implemente uma aplicação que apresente para o usuário, um item por vez, de uma relação de itens, por exemplo: títulos de filmes, títulos de músicas, títulos de jogos.

Para cada um dos itens, o usuário deverá informar se gosta ou não gosta do que lhe foi apresentado.

No momento em que ele desejar, ele pode ir para outra interface em que lhe será apresentado uma relação de outros usuários que tenham gostos parecidos com os seus, ou seja, que gostam e não das mesmas coisas e ele. Esta relação deve estar organizada por nível de afinidade. 

Use a técnica que desejar para calcular o nível de afinidade. 
Use o layout que achar melhor!
A aplicação deve estar componentizada.
Implemente estilos diferentes para o esquema de cores light e dark.
Pense Mobile-first!
*/

import { useState } from "react";
import { CompatibilityList } from "./components/CompatibilityList";
import { MovieList } from "./components/MovieList";
import { DarkModeBtn } from "../13/Components/DarkModeBtn";

export default function App() {
  const [myList, setMyList] = useState([]);
  const [showCompatibility, setShowCompatibility] = useState(false);

  return (
    <main>
      <div className="title">
        <h1>Compatibilidade de filmes</h1>
        <DarkModeBtn />
      </div>

      {showCompatibility ? (
        <CompatibilityList myList={myList} />
      ) : (
        <div className="select-movies">
          <MovieList onUpdateMyList={setMyList} />

          <button
            className="show-compatibility-btn"
            onClick={() => setShowCompatibility(true)}
          >
            Ver usuários com gostos parecidos
          </button>
        </div>
      )}
    </main>
  );
}
