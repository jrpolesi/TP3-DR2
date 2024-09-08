/*
Utilizando a ferramenta CodeSandbox e o template React, crie uma página simples.

Esta página deve conter:

- Título de segundo nível com o texto: “Desenvolvimento Front-End com Frameworks”.
- Título de terceiro nível com o texto: “Mobile-First UI com React”.
- Título de quarto nível com o texto: “Diferença entre responsividade e adaptabilidade”.
- Um texto, devendo ser separado em vários parágrafos, explicando a diferença apontada no texto anterior.

Estilize a página para que:

- O h2 fique com a fonte maior que o h3, que terá a fonte maior que o h4, que terá a fonte maior que o p. Cada um desses componentes deve ter um tamanho de fonte mínimo, ideal e máximo.
- Todos os cabeçalhos devem ter o texto centralizado.
- Todos os parágrafos devem ter o texto justificado e a primeira linha deve estar avançada para a direita. Além disso, deve-se haver um espaçamento interno (padding) na vertical de 0 e na horizontal de 20px.

Faça isso utilizando apenas estilização direta de tags, exemplo:

Arquivo CSS: 

div { estilo  }

Pense Mobile-First.
*/
import "./main.css";

export default function App() {
  return (
    <div>
      <h2>Desenvolvimento Front-End com Frameworks</h2>

      <h3>Mobile-First UI com React</h3>

      <h4>Diferença entre responsividade e adaptabilidade</h4>

      <p>
        Responsabilidade no design web refere-se à capacidade da página de se
        ajustar automaticamente a diferentes tamanhos de tela, como em
        celulares, tablets e computadores.
      </p>
      <p>
        Um site responsivo garante boa visualização e usabilidade em qualquer
        dispositivo.
      </p>
      <p>
        Adaptabilidade, por outro lado, envolve a personalização em larguras
        específicas.
      </p>
      <p>
        Ou seja, diferentemente do responsivo que sempre se adequa
        automaticamente a todos os tamanhos, o adaptativo irá se ajustar apenas
        quando o dispositivo chegar na largura esperada.
      </p>

      <a href="https://medium.com/@fnandaleite/entendendo-as-diferen%C3%A7as-entre-design-responsivo-adaptativo-e-mobile-first-ea3c61fc9181">
        Referência
      </a>
    </div>
  );
}
