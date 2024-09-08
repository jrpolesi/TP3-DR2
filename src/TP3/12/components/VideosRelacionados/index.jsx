import { thumbs } from "../../assets";
import "./style.css";

const RELACIONADOS = [
  {
    id: 1,
    image: thumbs.thumb1,
    alt: "Imagem de um avião da United voando, com o céu completamente limpo e azul no fundo",
    title: "Voando na United",
    author: "Pedro",
  },
  {
    id: 2,
    image: thumbs.thumb2,
    alt: "Imagem de avião voando, com nuvens densas no fundo",
    title: "Voando na primeira classe",
    author: "Maria",
  },
  {
    id: 3,
    image: thumbs.thumb3,
    alt: "Imagem de avião monomotor vermelho de pequeno porte, parado em uma montanha coberta de neve",
    title: "Pousos difíceis",
    author: "Ana Paula",
  },
  {
    id: 4,
    image: thumbs.thumb4,
    alt: "Imagem de avião voando, mostrando o avião indo cada vez mais longe",
    title: "Meu último voo",
    author: "João",
  },
];

export function VideosRelacionados() {
  return (
    <section className="relacionados">
      <h3>Vídeos relacionados</h3>

      <ul>
        {RELACIONADOS.map((relacionado) => (
          <Relacionado key={relacionado.id} {...relacionado} />
        ))}
      </ul>
    </section>
  );
}

function Relacionado({ image, alt, title, author }) {
  return (
    <li>
      <img src={image} alt={alt} />
      <h4>{title}</h4>
      <span>{author}</span>
    </li>
  );
}
