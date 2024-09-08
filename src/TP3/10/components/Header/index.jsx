import { useState } from "react";
import "./style.css";

const MENU_ITEMS = [
  {
    href: "#perfil",
    title: "Perfil",
  },
  {
    href: "#amigos",
    title: "Amigos",
  },
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#hobbies",
    title: "Hobbies",
  },
];

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.getAttribute("data-theme") === "dark-mode"
  );

  return (
    <header>
      <div className="header-content container">
        <h1>Face</h1>
        <nav>
          <span className="material-symbols-outlined menu-btn">menu</span>

          <ul>
            {MENU_ITEMS.map((item) => (
              <li key={item.title}>
                <a href={item.href}>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
      </div>
    </header>
  );
}
