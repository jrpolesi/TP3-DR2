import { Comentarios } from "./Components/Comentarios";
import { Header } from "./Components/Header";
import { Product } from "./Components/Product";
import { ProductsRelacionados } from "./Components/ProductsRelacionados";

export default function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <Product />

        <ProductsRelacionados />

        <Comentarios />
      </main>
    </div>
  );
}
