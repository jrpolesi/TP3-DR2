/*
Utilizando a ferramenta CodeSandbox e o template React, crie uma página simples.

Esta página deve conter:

- Título de segundo nível com o texto: “Desenvolvimento Front-End com Frameworks”.
- Título de terceiro nível com o texto: “Mobile-First UI com React”.
- Título de quarto nível com o texto: “Conceitos de Usabilidade”.
- Um texto, devendo ser separado em vários parágrafos, explicando a diferença apontada no texto anterior.

Estilize a página para que:

- O h2 fique com a fonte maior que o h3, que terá a fonte maior que o h4, que terá a fonte maior que o p. Cada um desses componentes deve ter um tamanho de fonte mínimo, ideal e máximo.
- Todos os cabeçalhos devem ter o texto centralizado.
- Todos os parágrafos devem ter o texto justificado e a primeira linha deve estar avançada para a direita. Além disso, deve-se haver um espaçamento interno (padding) na vertical de 0 e na horizontal de 20px.

Faça isso utilizando apenas estilização por classes CSS, exemplo:

Arquivo CSS: 

.container {  estilo  }

Pense Mobile-First.
*/

import "./main.css";

export default function App() {
  return (
    <div>
      <h2 className="title2">Desenvolvimento Front-End com Frameworks</h2>

      <h3 className="title3">Mobile-First UI com React</h3>

      <h4 className="title4">Conceitos de Usabilidade</h4>

      <p className="text">
        Usabilidade é a facilidade com que os usuários interagem com um site.
        Pra isso utilizamos alguns conceitos para construir sites com uma boa
        usabilidade, como:
      </p>
      <p className="text">
        A consistência no design ajuda os usuários a se orientarem. Usar padrões
        visuais facilita a navegação.
      </p>
      <p className="text">
        A acessibilidade torna o site utilizável por todos, incluindo pessoas
        com deficiências.
      </p>
      <p className="text">
        O feedback imediato informa o usuário sobre suas ações, evitando erros e
        frustrações.
      </p>

      <a href="https://rankmyapp.com/pt-br/usabilidade-o-que-e/">Referência</a>
    </div>
  );
}
