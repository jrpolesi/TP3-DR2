import { Comentarios } from "./components/Comentarios";
import { ConteudoSecundario } from "./components/ConteudoSecundario";
import { Destaque } from "./components/Destaque";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <div className="main-layout">
          <Destaque />

          <ConteudoSecundario isMobile={true} />

          <Comentarios />
        </div>

        <ConteudoSecundario />
      </main>
    </div>
  );
}
