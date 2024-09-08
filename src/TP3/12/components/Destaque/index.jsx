import "./style.css";

const ACTIONS = ["thumb_up", "share", "bookmark", "report"];

export function Destaque() {
  return (
    <section className="destaque">
      <video src="./assets/videos/video.mp4" controls></video>

      <div className="destaque--info">
        <div className="destaque--info-header">
          <div className="destaque--metadata">
            <h2>Primeira navegação</h2>
            <p>José Polesi</p>
          </div>

          <div className="destaque--actions">
            {ACTIONS.map((action) => (
              <button key={action} className="material-symbols-outlined">
                {action}
              </button>
            ))}
          </div>
        </div>

        <p>
          Neste vídeo emocionante, acompanhe uma aula de navegação aérea em um
          icônico Paulistinha, onde um aluno vivencia sua primeira experiência
          de voo. Vistas deslumbrantes e uma perspectiva única sobre o
          aprendizado em aviação. Ideal para entusiastas e futuros pilotos, este
          vídeo mostra de perto a magia e os desafios de aprender a voar em um
          dos aviões mais emblemáticos do treinamento. Inscreva-se no canal para
          mais conteúdo inspirador sobre aviação e não se esqueça de deixar seu
          like e compartilhar!
        </p>
      </div>
    </section>
  );
}
