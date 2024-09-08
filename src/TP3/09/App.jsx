import { useState } from "react";

/*
Utilizando a ferramenta CodeSandbox e o template React, crie um componente que é um menu.

Este menu deve ser do tipo expande/colapsa, possuir um elemento sempre visível que é o logo ou a marca do App e um outro elemento, também sempre visível, que é o botão para expandir/colapsar o menu.

Os outros itens do menu, a saber: Home, Serviços, Produtos, Sobre nós e Contatos, ficarão escondidos no menu.

Caso o dispositivo seja capaz de exibir todos os itens do menu na página (ou seja, caso ele tenha uma largura suficiente para isso), então o menu deve se adaptar a esta condição e se apresentar em um modelo de menu horizontal, exibindo todos os ítens, sem a mecânica de expandir/colapsar. Neste caso, o elemento que permite expandir/colapsar o menu, deve estar invisível.

Faça isso utilizando apenas estilização por classes CSS, exemplo:

Arquivo CSS: 

.container { estilo }

Pense Mobile-First.
*/
import "./app.css";
import logo from "./images/logo.webp";

export default function App() {
  return <Header />;
}

const MENU_ITEMS = [
  { title: "Home", icon: "home" },
  { title: "Serviços", icon: "build" },
  { title: "Produtos", icon: "inventory_2" },
  { title: "Sobre nós", icon: "info" },
  { title: "Contatos", icon: "call" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="logo s-car" className="logo" />

        {isMobileMenuOpen && (
          <MobileMenu
            items={MENU_ITEMS}
            onCloseButtonClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <DesktopMenu items={MENU_ITEMS} />
        <ToggleMenuButton
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        />
      </div>
    </header>
  );
}

function MobileMenu({ onCloseButtonClick, items }) {
  return (
    <nav
      id="mobile-menu-navigation"
      className="menu-navigation menu-navigation--mobile"
    >
      <button
        id="close-menu-button"
        className="material-symbols-outlined close-menu-button"
        onClick={onCloseButtonClick}
      >
        close
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <a href="#" onClick={onCloseButtonClick}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ToggleMenuButton({ onClick }) {
  return (
    <button
      id="menu-toggle-button"
      className="material-symbols-outlined menu-toggle-button"
      onClick={onClick}
    >
      menu
    </button>
  );
}

function DesktopMenu({ items }) {
  return (
    <nav className="menu-navigation menu-navigation--desktop">
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
