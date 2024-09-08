import { useState } from "react";
import "./style.css";
import { ListaDePontosTuristicos } from "../ListaDePontosTuristicos";
import { ViajantesInput } from "../ViajantesInput";

export function Selecionados({ pontosTuristicosSelecionados, onRemove }) {
  const [viajantes, setViajantes] = useState(1);

  const selecionadosComOValorAtualizado = pontosTuristicosSelecionados.map(
    (pontoTuristico) => ({
      ...pontoTuristico,
      valor: pontoTuristico.valor * viajantes,
    })
  );

  const total = selecionadosComOValorAtualizado.reduce(
    (acc, pontoTuristico) => acc + pontoTuristico.valor,
    0
  );

  return (
    <div className="selecionados-list">
      <div className="selecionados-info">
        <ViajantesInput
          viajantes={viajantes}
          onViajantesChange={setViajantes}
        />
        <span className="total-selecionados">Total: R$ {total}</span>
      </div>

      <ListaDePontosTuristicos
        pontosTuristicos={selecionadosComOValorAtualizado}
        onRemove={onRemove}
      />
    </div>
  );
}
