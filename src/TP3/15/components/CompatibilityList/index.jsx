import "./style.css";

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

export function CompatibilityList({ myList }) {
  const sortedUsers = USERS.sort((a, b) => {
    const aLiked = a.liked.filter((movie) => myList.includes(movie));
    const bLiked = b.liked.filter((movie) => myList.includes(movie));

    return bLiked.length - aLiked.length;
  });

  return (
    <ul className="compatibility-list">
      {sortedUsers.map((user) => (
        <li key={user.name} className="compatibility-list-item">
          <h2>{user.name}</h2>
          <p>
            Vocês tem{" "}
            <span className="common-movies-count">
              {user.liked.filter((movie) => myList.includes(movie)).length}
            </span>{" "}
            gostos em comum
          </p>
        </li>
      ))}
    </ul>
  );
}
