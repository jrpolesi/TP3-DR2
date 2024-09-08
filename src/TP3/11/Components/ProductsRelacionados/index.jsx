import { relacionados } from "../../images";
import "./style.css";

const PRODUCTS = [
  {
    img: relacionados.outro1,
    alt: "Relógio com pulseira preta",
    nome: "Relógio XPTO",
    preco: "R$ 4.999,99",
  },
  {
    img: relacionados.outro2,
    alt: "Relógio com ponteiro azul",
    nome: "Relógio XPTO",
    preco: "R$ 5.999,99",
  },
  {
    img: relacionados.outro3,
    alt: "Relógio prateado",
    nome: "Relógio XPTO",
    preco: "R$ 6.999,99",
  },
  {
    img: relacionados.outro4,
    alt: "Relógio com pulseira de couro",
    nome: "Relógio XPTO",
    preco: "R$ 7.999,99",
  },
  {
    img: relacionados.outro5,
    alt: "Relógio dourado dentro de uma caixa branca",
    nome: "Relógio XPTO",
    preco: "R$ 8.999,99",
  },
];

export function ProductsRelacionados() {
  return (
    <section className="produtos-relacionados">
      <h3>Produtos relacionados</h3>

      <ul>
        {PRODUCTS.map((product, index) => (
          <ProductRelacionado key={index} {...product} />
        ))}
      </ul>
    </section>
  );
}

function ProductRelacionado({ img, alt, nome, preco }) {
  return (
    <li>
      <img src={img} alt={alt} />

      <div className="produto-relacionado--info">
        <h4>{nome}</h4>
        <p>{preco}</p>
      </div>
    </li>
  );
}
