import { Anuncios } from "../Anuncios";
import { VideosRelacionados } from "../VideosRelacionados";
import "./style.css";

export function ConteudoSecundario({ isMobile }) {
  const classes = ["conteudo-secundario"];

  if (isMobile) {
    classes.push("conteudo-secundario--mobile");
  }

  return (
    <div className={classes.join(" ")}>
      <Anuncios />

      <VideosRelacionados />
    </div>
  );
}
