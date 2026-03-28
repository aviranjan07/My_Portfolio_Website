// Typing
const text = ["Web Developer", "DSA Learnerrrr", "Problem Solver"];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  if (!typingElement) return;

  let current = text[i];

typingElement.textContent = current.substring(0, j + 1);

  if (!isDeleting) j++; else j--;

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Progress bar
window.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width = (scroll / height) * 100 + "%";
});

// Theme toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active"); // animation
};

// CLOSE MENU ON SCROLL
window.addEventListener("scroll", () => {
  const navLinks = document.getElementById("nav-links");
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

// CLOSE MENU WHEN CLICK ANY LINK
const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("active");
  });
});