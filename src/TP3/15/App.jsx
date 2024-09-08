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

const MOVIES = [
  "Matrix",
  "O Poderoso Chefão",
  "O Senhor dos Anéis",
  "Star Wars",
  "Titanic",
  "Avatar",
  "O Rei Leão",
  "Harry Potter",
  "Jurassic Park",
  "Indiana Jones",
];

export default function App() {
  return <MovieList />;
}

function MovieList() {
  const [currentMovie, setCurrentMovie] = useState(0);
  const [myList, setMyList] = useState([]);
  const [showCompatibility, setShowCompatibility] = useState(false);

  function handleChoice(movie, liked) {
    if (liked) {
      setMyList((prev) => [...prev, movie]);
    }
    if (currentMovie < MOVIES.length) {
      setCurrentMovie((prev) => prev + 1);
    }
  }
  console.log({
    currentMovie,
    length: MOVIES.length,
  });

  return (
    <div>
      {showCompatibility ? (
        <CompatibilityList myList={myList} />
      ) : (
        <div>
          <ul>
            {MOVIES.map((movie) => (
              <MovieItem
                key={movie}
                movie={movie}
                handleChoice={handleChoice}
              />
            ))}
          </ul>

          <button
            disabled={currentMovie < MOVIES.length}
            onClick={() => setShowCompatibility(true)}
          >
            Ver usuários com gostos parecidos
          </button>
        </div>
      )}
    </div>
  );
}

function MovieItem({ movie, handleChoice }) {
  const [choice, setChoice] = useState(null);

  function onChoice(choice) {
    setChoice(choice);
    handleChoice(movie, choice);
  }

  const isDisabled = choice !== null;

  return (
    <li>
      <h2>{movie}</h2>
      <button disabled={isDisabled} onClick={() => onChoice(true)}>
        👍
      </button>
      <button disabled={isDisabled} onClick={() => onChoice(false)}>
        👎
      </button>
    </li>
  );
}

const USERS = [
  {
    name: "João",
    liked: ["Matrix", "O Poderoso Chefão", "O Senhor dos Anéis"],
  },
  {
    name: "Maria",
    liked: ["O Poderoso Chefão", "O Rei Leão", "Harry Potter"],
  },
  {
    name: "José",
    liked: ["Star Wars", "Titanic", "Avatar"],
  },
];

function CompatibilityList({ myList }) {
  const sortedUsers = USERS.sort((a, b) => {
    const aLiked = a.liked.filter((movie) => myList.includes(movie));
    const bLiked = b.liked.filter((movie) => myList.includes(movie));

    return bLiked.length - aLiked.length;
  });

  return (
    <ul>
      {sortedUsers.map((user) => (
        <li key={user.name}>
          <h2>{user.name}</h2>
          <div>
            Vocês tem
            {user.liked.filter((movie) => myList.includes(movie)).length} gostos
            em comum
          </div>
        </li>
      ))}
    </ul>
  );
}
