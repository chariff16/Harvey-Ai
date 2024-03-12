// mouse movement animation

let mouse = document.documentElement;
mouse.addEventListener("mousemove", (e) => {
  mouse.style.setProperty("--x", e.clientX + "px");
  mouse.style.setProperty("--y", e.clientY + "px");
});

// button modal
let showBtns = document.querySelectorAll(".showBtn");
let closeBtn = document.querySelector("#closeBtn");
let modal = document.querySelector(".modal");
let body = document.body; // Selecting the body element

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
    disableScroll(); // Call the function to disable scrolling when modal is open
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("none");
  enableScroll(); // Call the function to enable scrolling when modal is closed
});

document.addEventListener("click", (e) => {
  if (
    !modal.contains(e.target) &&
    !Array.from(showBtns).some((btn) => btn.contains(e.target))
  ) {
    modal.classList.add("none");
    enableScroll(); // Call the function to enable scrolling when modal is closed
  }
});

// menu animation
document.querySelector(".menu").addEventListener("click", function () {
  this.classList.toggle("active");
});
// menu
let show = document.querySelector(".menu");
let navbar = document.querySelector(".resNavBar");
show.addEventListener("click", () => {
  if (navbar.style.display == "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
