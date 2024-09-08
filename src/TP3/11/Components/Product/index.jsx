import "./style.css";
import { ProductGaleria } from "../ProductGaleria";

export function Product() {
  return (
    <section className="product">
      <ProductGaleria />

      <div className="product-info">
        <h3>Relógio XPTO</h3>
        <span className="product-info--price">R$ 9.999,99</span>

        <div className="product-info--description">
          <p>
            Este elegante relógio prateado de luxo combina sofisticação e
            precisão em um design refinado. O mostrador, delicadamente polido,
            exibe um brilho metálico que reflete a luz com um toque de glamour.
            Os índices e ponteiros são finamente esculpidos, com detalhes em aço
            inoxidável que garantem uma leitura clara e elegante. O vidro de
            safira, resistente a arranhões, cobre o mostrador com uma
            transparência impecável, enquanto a caixa do relógio é esculpida com
            precisão, proporcionando um acabamento liso e brilhante.
          </p>

          <div className="product-info--spec">
            <h4>Especificações:</h4>

            <ul>
              <li>Material: Aço inoxidável</li>
              <li>Cor: Prateado</li>
              <li>Origem: Itália</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
