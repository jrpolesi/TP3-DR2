/*
Utilizando a ferramenta CodeSandbox e o template React, implemente uma página que represente a sua rede social.

Esta página deve conter:

- Um layout com grid que contenha um cabeçalho, um menu principal, um feed de postagens de amigos, uma área com a relação de amigos e uma área com a relação de sugestões de amizade.
- As postagens de amigos devem conter uma imagem, um título, um texto, uma data de publicação, o autor da postagem, a quantidade de curtidas, a quantidade de compartilhamentos e uma lista de comentários.
- A relação de amigos deve apresentar a foto, o nome e a quantidade de amigos em comum.
- A relação de sugestões deve apresentar a foto, o nome e um amigo em comum entre você e a sugestão apresentada.
- O layout e o estilo da página ficam a seu critério.
Faça isso utilizando apenas estilização por classes CSS, exemplo:

Arquivo CSS: 

.container { estilo }

Talvez você já tenha feito este trabalho anteriormente, porém agora você tem uma outra condição: todos os elementos da sua página devem ser componentes React e todos os elementos que se repetem na mesma, como a relação de amigos, devem ser criados pela reutilização de um componente genérico/personalizável.

Combine flexbox e grid layout.

Pense Mobile-First.
*/

import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hobbies } from "./components/Hobbies";
import { NetworkSection } from "./components/NetworkSection";

export default function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <NetworkSection />

        <About />

        <Hobbies />
      </main>
    </div>
  );
}
