import "./style.css";
import { useState } from "react";

const MENU_ITEMS = [
  {
    href: "#",
    title: "Home",
  },
  {
    href: "#",
    title: "Sobre nós",
  },
  {
    href: "#",
    title: "Produtos",
  },
  {
    href: "#",
    title: "Carrinho",
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <h1>Store</h1>

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

        <DarkModeButton />
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
            <a href={item.href} onClick={onCloseButtonClick}>
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

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.getAttribute("data-theme") === "dark-mode"
  );

  return (
    <button
      className="dark-mode-btn material-symbols-outlined"
      onClick={() => {
        setIsDarkMode((isDarkMode) => {
          if (isDarkMode) {
            document.body.removeAttribute("data-theme");
            return false;
          }

          document.body.setAttribute("data-theme", "dark-mode");
          return true;
        });
      }}
    >
      {isDarkMode ? "dark_mode" : "light_mode"}
    </button>
  );
}
