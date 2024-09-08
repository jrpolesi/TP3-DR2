import { hobbies } from "../../images";
import "./style.css";

const HOBBIES = [
  {
    id: 1,
    image: hobbies.basquete,
    alt: "Cesta de basquete vista de baixo para cima, e um homem enterrando",
  },
  {
    id: 2,
    image: hobbies.tenis,
    alt: "Raquete de tênis e bolinha no chão de um quadra de tênis",
  },
  {
    id: 3,
    image: hobbies.futebol,
    alt: "Bola de futebol parada no gramado verde de um campo de futebol",
  },
  {
    id: 4,
    image: hobbies.academia,
    alt: "Homem fazendo levantamento terra em uma academia",
  },
];

export function Hobbies() {
  return (
    <div id="hobbies" className="hobbies-list">
      <h2>Meus hobbies</h2>

      <ul>
        {HOBBIES.map((hobby) => (
          <img key={hobby.id} src={hobby.image} alt={hobby.alt} />
        ))}
      </ul>
    </div>
  );
}
