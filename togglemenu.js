function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav-menu");
  const menuLinks = nav.querySelectorAll("a, button");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
});
