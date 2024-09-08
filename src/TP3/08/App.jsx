/*
Utilizando a ferramenta CodeSandbox e o template React, crie um componente com estilo card, com bordas arredondadas e com efeito de elevação (sombra).

Para ele (o componente), o programador deve passar uma imagem, um título, uma descrição e um rodapé (ou seja, este componente deve esperar que lhe sejam passados parâmetros para que ele possa ser construído).

Este card deve exibir a imagem no topo dele.

O título, a descrição e o rodapé devem aparecer na parte de baixo do card, alinhados verticalmente.

Faça isso utilizando apenas estilização por classes CSS, exemplo:

Arquivo CSS: 

.container {  estilo  }

Pense Mobile-First.
*/

import "./card.css";

export default function App() {
  return (
    <Card
      image="./images/img.jpg"
      title="Instituto Infnet"
      description="O Infnet é um Instituto de Tecnologia fundado em 1994 que tornou-se referência na formação de profissionais em Tecnologia da Informação, Négocios e para a Indústria Criativa."
      footer="Rua São José, 90 - Centro, Rio de Janeiro - RJ, 20010-020"
    />
  );
}

function Card({ image, title, description, footer }) {
  return (
    <div className="card">
      <img src={image} alt="Imagem" className="card--image" />
      <div className="card--content">
        <h1 className="card--title">{title}</h1>
        <p className="card--description">{description}</p>
        <footer className="card--footer">{footer}</footer>
      </div>
    </div>
  );
}
