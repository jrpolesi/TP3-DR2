import "./style.css";

const COMENTARIOS = [
  {
    nome: "João da Silva",
    data: "01/01/2021",
    comentario: "Excelente vídeo, imagens lindas!",
  },
  {
    nome: "Maria Oliveira",
    data: "02/01/2021",
    comentario: "Adorei o vídeo, muito inspirador!",
  },
  {
    nome: "José Pereira",
    data: "03/01/2021",
    comentario:
      "Excelente, Poderia gravar um video contando como foi a experiência.",
  },
];

export function Comentarios() {
  return (
    <section className="comentarios">
      <h3>Comentários</h3>

      <ul>
        {COMENTARIOS.map((comentario) => (
          <Comentario key={comentario.comentario} {...comentario} />
        ))}
      </ul>
    </section>
  );
}

function Comentario({ nome, data, comentario }) {
  return (
    <li>
      <div className="comentario--header">
        <h4>{nome}</h4>-<span className="comentario--date">{data}</span>
      </div>

      <p>{comentario}</p>
    </li>
  );
}
