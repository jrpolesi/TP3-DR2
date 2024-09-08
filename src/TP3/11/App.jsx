/*
Utilizando a ferramenta CodeSandbox e o template React, implemente uma página apresentando os detalhes de um produto em uma plataforma de e-commerce.

Nesta página você deve apresentar:

Uma imagem do produto, com opção para visualizar outras imagens do mesmo produto;
O nome, o valor, a descrição, e as especificações do produto;
Uma lista de produtos relacionados apresentando uma imagem, o nome e o valor dos produtos;
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

import { Comentarios } from "./Components/Comentarios";
import { Header } from "./Components/Header";
import { Product } from "./Components/Product";
import { ProductsRelacionados } from "./Components/ProductsRelacionados";

export default function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <Product />

        <ProductsRelacionados />

        <Comentarios />
      </main>
    </div>
  );
}
