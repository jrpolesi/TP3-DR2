import { Amigos } from "../Amigos";
import { Perfil } from "../Perfil";

export function NetworkSection() {
  return (
    <section className="network">
      <Perfil />
      <Amigos />
    </section>
  );
}
