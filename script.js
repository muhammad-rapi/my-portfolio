const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
});

function toggleClassbody() {
    var body = document.body;
    "flow" !== body.className
        ? (body.className = "flow")
        : (body.className = "");
}

document.getElementById("download-cv").addEventListener("click", function () {
    var link = document.createElement("a");
    link.href = "cv-muhammad-rafi.pdf";
    link.download = "cv-muhammad-rafi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
