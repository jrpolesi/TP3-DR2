/*
Utilizando a ferramenta CodeSandbox e o template React, implemente uma aplicação que relacione os pontos turísticos da sua cidade, região, estado ou país.

Nesta mesma interface, o usuário pode selecionar um desses pontos turísticos, exibindo informações sobre o mesmo: nome, valor, informações, meios de transporte.

Ainda na mesma interface, é apresentada a relação de pontos turísticos que o usuário selecionou para visitar, juntamente com o valor (que pode variar conforme a quantidade de pessoas que irá acompanhá-lo) e o valor total, ao final da lista.

Implemente estilos diferentes para o esquema de cores light e dark.
Implementação adaptabilidade quando identificar que há recurso de apontamento.
Pense Mobile-first!

*/

import { useState } from "react";
import { Selecionados } from "./components/Selecionados";
import { DarkModeBtn } from "./components/DarkModeBtn";
import { ListaDePontosTuristicos } from "./components/ListaDePontosTuristicos";

const PONTOS_TURISTICOS = [
  {
    id: "1",
    nome: "Cristo Redentor",
    valor: 50,
    informacoes:
      "O Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a maior parte da cidade do Rio de Janeiro, Brasil.",
    transporte: "Ônibus, Carro",
  },
  {
    id: "2",
    nome: "Pão de Açúcar",
    valor: 40,
    informacoes:
      "O Pão de Açúcar é um pico situado no Rio de Janeiro, na entrada da baía da Guanabara, no bairro da Urca. Com 396 metros de altura, o morro do Pão de Açúcar é um dos principais pontos turísticos da cidade do Rio de Janeiro, no Brasil.",
    transporte: "Ônibus, Carro, Uber, Bicicleta, A pé",
  },
  {
    id: "3",
    nome: "Maracanã",
    valor: 30,
    informacoes:
      "O Estádio Jornalista Mário Filho, mais conhecido como Maracanã, é um estádio de futebol localizado no Rio de Janeiro, no Brasil. É o principal palco esportivo do país e um dos mais importantes do mundo.",
    transporte: "Ônibus, Carro, Uber, Bicicleta, A pé",
  },
  {
    id: "4",
    nome: "Ibirapuera",
    valor: 0,
    informacoes:
      "O Parque Ibirapuera é o mais importante parque urbano da cidade de São Paulo, Brasil. Foi inaugurado em 21 de agosto de 1954 para a comemoração do quarto centenário da cidade e só perde em tamanho para o Parque do Carmo.",
    transporte: "Carro, Uber, Bicicleta, A pé",
  },
  {
    id: "5",
    nome: "MASP",
    valor: 20,
    informacoes:
      "O Museu de Arte de São Paulo Assis Chateaubriand é uma das mais importantes instituições culturais brasileiras. Localiza-se na Avenida Paulista, cidade de São Paulo, e é conhecido pelo vão-livre que se estende sob quatro enormes pilares.",
    transporte: "Ônibus, Carro, Uber, Bicicleta, A pé",
  },
  {
    id: "6",
    nome: "Mercado Municipal",
    valor: 10,
    informacoes:
      "O Mercado Municipal Paulistano, também conhecido como Mercadão, é um mercado público localizado no centro histórico da cidade de São Paulo, capital do estado homônimo, no Brasil.",
    transporte: "Ônibus, Carro, Uber",
  },
];

export default function App() {
  const [pontosTuristicosSelecionados, setPontosTuristicosSelecionados] =
    useState([]);

  function addPontoTuristico(pontoTuristico) {
    setPontosTuristicosSelecionados([
      ...pontosTuristicosSelecionados,
      pontoTuristico,
    ]);
  }

  function removePontoTuristico(pontoTuristico) {
    setPontosTuristicosSelecionados(
      pontosTuristicosSelecionados.filter((selecionado) => {
        return selecionado.id !== pontoTuristico.id;
      })
    );
  }

  return (
    <main>
      <div className="title">
        <h1>Pontos turísticos</h1>
        <DarkModeBtn />
      </div>

      <ListaDePontosTuristicos
        pontosTuristicos={PONTOS_TURISTICOS}
        pontosTuristicosSelecionados={pontosTuristicosSelecionados}
        onAdd={addPontoTuristico}
      />

      <h2 className="selecionados-title">Selecionados</h2>
      {pontosTuristicosSelecionados.length ? (
        <Selecionados
          pontosTuristicosSelecionados={pontosTuristicosSelecionados}
          onRemove={removePontoTuristico}
        />
      ) : (
        <p className="aviso-lista-vazia">Nenhum ponto turístico selecionado</p>
      )}
    </main>
  );
}
