

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

function toggleClassbody() {
  var body = document.body;
  "flow" !== body.className ? (body.className = "flow") : (body.className = "");
}
