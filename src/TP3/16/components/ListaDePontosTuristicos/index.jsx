import { Card } from "../Card";
import "./style.css";

export function ListaDePontosTuristicos({
  pontosTuristicos,
  pontosTuristicosSelecionados,
  onAdd,
  onRemove,
}) {
  return (
    <ul className="pontos-turisticos">
      {pontosTuristicos.map((pontoTuristico) => (
        <Card
          key={pontoTuristico.id}
          pontoTuristico={pontoTuristico}
          onAdd={onAdd}
          onRemove={onRemove}
          alreadyAdded={pontosTuristicosSelecionados?.find(
            (selecionado) => selecionado.id === pontoTuristico.id
          )}
        />
      ))}
    </ul>
  );
}
