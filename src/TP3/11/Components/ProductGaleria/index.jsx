import { relogio } from "../../images";
import "./style.css";

export function ProductGaleria() {
  return (
    <div className="galeria">
      <img src={relogio.relogio1} alt="Relógio prateado" />

      <div className="galeria-sub">
        <img
          className="galeria-img--selected"
          src={relogio.relogio1}
          alt="Relógio prateado"
        />
        <img src={relogio.relogio2} alt="Relógio prateado" />
        <img src={relogio.relogio3} alt="Relógio prateado" />
      </div>
    </div>
  );
}
