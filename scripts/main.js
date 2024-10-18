let body = document.querySelector("body");
let darkModeBtn = document.querySelector(".size-6");

function toggleDarkMode() {
  body.classList.toggle("darkMode");
  if (body.classList == "darkMode") {
    darkModeBtn.style.fill = "#fefefe";
  } else darkModeBtn.style.fill = "none";
}
