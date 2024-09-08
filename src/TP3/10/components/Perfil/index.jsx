import { perfil } from "../../images";
import "./style.css";

export function Perfil() {
  return (
    <div id="perfil" className="perfil">
      <img src={perfil} alt="Imagem de perfil" />
      <div>
        <h2>José Polesi</h2>
        <span>jose.polesi@al.infnet.edu.br</span>
      </div>
    </div>
  );
}
