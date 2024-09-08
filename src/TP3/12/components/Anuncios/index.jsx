import { ads } from "../../assets";
import "./style.css";

export function Anuncios() {
  return (
    <section className="ads">
      <h3>Anúncios</h3>
      <div>
        <img
          src={ads}
          alt="Imagem de mesa de casino mostrando as mãos dos jogadores jogando poker"
        />
      </div>
    </section>
  );
}
