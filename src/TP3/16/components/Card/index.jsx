import "./style.css";

export function Card({ pontoTuristico, onAdd, onRemove, alreadyAdded }) {
  return (
    <li className="ponto-turistico-card">
      <h2>{pontoTuristico.nome}</h2>
      <p className="ponto-turistico--preco">R$ {pontoTuristico.valor}</p>
      <ul className="ponto-turistico--transportes">
        {pontoTuristico.transporte.split(", ").map((transporte) => (
          <li key={transporte}>{transporte}</li>
        ))}
      </ul>
      <p className="ponto-turistico--info">{pontoTuristico.informacoes}</p>
      {onAdd && (
        <button
          className="ponto-turistico--add"
          disabled={alreadyAdded}
          onClick={() => onAdd(pontoTuristico)}
        >
          Adicionar
        </button>
      )}
      {onRemove && (
        <button
          className="ponto-turistico--remove"
          onClick={() => onRemove(pontoTuristico)}
        >
          Remover
        </button>
      )}
    </li>
  );
}
