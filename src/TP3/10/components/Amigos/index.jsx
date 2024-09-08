import { amigos } from "../../images";
import "./style.css";

const AMIGOS = [
  {
    id: 1,
    image: amigos.amigo1,
    alt: "Mulher de pele clara e cabelos loiros com céu azul sem nuvens no fundo",
  },
  {
    id: 2,
    image: amigos.amigo2,
    alt: "Homem de cabelo grisalho e uma parede de ferramentas no fundo",
  },
  {
    id: 3,
    image: amigos.amigo3,
    alt: "Mulher de cabelos castanhos com árvores no fundo",
  },
  {
    id: 4,
    image: amigos.amigo4,
    alt: "Homem de cabelo curto e loiro com o fundo preto e uma iluminação lateral",
  },
];

export function Amigos() {
  return (
    <div id="amigos" className="amigos-list">
      <h2>Amigos</h2>

      <ul>
        {AMIGOS.map((amigo) => (
          <Amigo key={amigo.id} {...amigo} />
        ))}
      </ul>
    </div>
  );
}

function Amigo({ image, alt }) {
  return (
    <li>
      <img src={image} alt={alt} />
    </li>
  );
}
