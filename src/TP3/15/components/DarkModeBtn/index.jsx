import "./style.css";
import { useState } from "react";

export function DarkModeBtn() {
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
