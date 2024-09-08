import "./style.css";

export function ViajantesInput({ viajantes, onViajantesChange }) {
  return (
    <div className="viajantes-input">
      <label htmlFor="viajantes">Número de viajantes:</label>
      <input
        id="viajantes"
        type="number"
        min={0}
        value={viajantes}
        onChange={(e) => {
          const value = e.target.value;

          if (value >= 0) {
            onViajantesChange(value);
          }
        }}
      />
    </div>
  );
}
