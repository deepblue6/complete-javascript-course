document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  console.log(menuIcon); // This should log the menu icon element
  console.log(navLinks); // This should log the nav links element

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
