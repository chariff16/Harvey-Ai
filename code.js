// Mouse movement animation
document.documentElement.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", e.clientX + "px");
  document.documentElement.style.setProperty("--y", e.clientY + "px");
});

// Button modal
const showBtns = document.querySelectorAll(".showBtn");
const closeBtn = document.querySelector("#closeBtn");
const modal = document.querySelector(".modal");
const body = document.body;

// Function to disable scrolling
function disableScroll() {
  body.style.overflow = "hidden";
}

// Function to enable scrolling
function enableScroll() {
  body.style.overflow = "auto";
}

showBtns.forEach((showBtn) => {
  showBtn.addEventListener("click", () => {
    modal.classList.remove("none");
    disableScroll();
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("none");
  enableScroll();
});

document.addEventListener("click", (e) => {
  if (
    !modal.contains(e.target) &&
    !Array.from(showBtns).some((btn) => btn.contains(e.target))
  ) {
    modal.classList.add("none");
    enableScroll();
  }
});

// Menu animation
document.querySelector(".menu").addEventListener("click", function () {
  this.classList.toggle("active");
});

// Toggle navbar visibility
const showMenu = document.querySelector(".menu");
const navbar = document.querySelector(".resNavBar");

showMenu.addEventListener("click", () => {
  navbar.style.display = navbar.style.display === "none" ? "block" : "none";
});
