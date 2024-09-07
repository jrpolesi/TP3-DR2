const menuToggleButton = document.getElementById("menu-toggle-button");

menuToggleButton.addEventListener("click", (e) => {
  const menuNav = document.getElementById("mobile-menu-navigation");
  const isOpen = e.target.classList.contains("menu-toggle-button--down");

  if (isOpen) {
    e.target.classList.remove("menu-toggle-button--down");
    e.target.classList.add("menu-toggle-button--up");

    menuNav.classList.add("hide");
  } else {
    e.target.classList.remove("menu-toggle-button--up");
    e.target.classList.add("menu-toggle-button--down");

    menuNav.classList.remove("hide");
  }
});
