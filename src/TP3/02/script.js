const menuToggleButton = document.getElementById("menu-toggle-button");

menuToggleButton.addEventListener("click", () => {
  const menuNav = document.getElementById("mobile-menu-navigation");

  menuNav.classList.toggle("hide");
});

const closeMenuButton = document.getElementById("close-menu-button");

closeMenuButton.addEventListener("click", () => {
  const menuNav = document.getElementById("mobile-menu-navigation");

  menuNav.classList.add("hide");
});

const navLinks = document.querySelectorAll(".menu-navigation li a");

for (const link of navLinks) {
  link.addEventListener("click", () => {
    const menuNav = document.getElementById("mobile-menu-navigation");

    menuNav.classList.add("hide");
  });
}
