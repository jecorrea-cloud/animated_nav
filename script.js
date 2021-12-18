// Bring down the Navigation bar and the button
const nav = document.getElementById("nav");
const toggle = document.getElementById("toggle");

// In this case what classList.toggle does is that if toggle is set to active remove it, otherwise add it
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
