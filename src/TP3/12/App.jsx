/*
Utilizando a ferramenta CodeSandbox e o template React, implemente uma página apresentando um vídeo de uma plataforma de vídeo.

Nesta página você deve apresentar:

Um vídeo em destaque;
O título e o autor do vídeo;
um menu com opções para curtir, compartilhar, salvar e denunciar o vídeo (essas opções não precisam estar funcionais);
A descrição do vídeo;
Uma área com propaganda;
Uma lista de vídeos relacionados apresentando uma capa, o nome e o autor do vídeo;
Uma lista de comentários de outros usuários apresentando o nome, a data e o comentário.
Esta página deve ser responsiva, de modo que, quando o usuário estiver em um dispositivo maior, o layout deve ser reorganizado para apresentar os dados de uma melhor forma - podendo até apresentar mais informações.

Esta página deve ter um menu com, no mínimo, 4 itens, que também é responsivo. Em caso de não haver espaço suficiente, o menu deve funcionar em modo expande - colapsa.

Faça isso utilizando apenas estilização por classes CSS, exemplo:

Arquivo CSS: 

.container { estilo }

Talvez você já tenha feito este trabalho anteriormente, porém agora você tem uma outra condição: todos os elementos da sua página devem ser componentes React e todos os elementos que se repetem na mesma, como a relação de amigos, devem ser criados pela reutilização de um componente genérico/personalizável.

O menu não precisa estar funcional.
Implemente estilos diferentes para o esquema de cores light e dark.
Pense Mobile-first!
*/

import { Comentarios } from "./components/Comentarios";
import { ConteudoSecundario } from "./components/ConteudoSecundario";
import { Destaque } from "./components/Destaque";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <div className="main-layout">
          <Destaque />

          <ConteudoSecundario isMobile={true} />

          <Comentarios />
        </div>

        <ConteudoSecundario />
      </main>
    </div>
  );
}
