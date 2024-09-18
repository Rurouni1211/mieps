const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menuBtn.classList.add("hidden"); // Hide the burger menu button when menu opens
});

menuClose.addEventListener("click", () => {
  menu.classList.add("hidden");
  menuBtn.classList.remove("hidden"); // Show the burger menu button when menu closes
});
