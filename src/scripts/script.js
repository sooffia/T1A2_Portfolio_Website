document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("menu");

    if (menu) {
      menu.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });
    }
  });