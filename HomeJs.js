const navbar = document.querySelector("#nav");
let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickynavbar);
