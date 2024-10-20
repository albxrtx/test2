let btnMenu = document.getElementById("btn-Menu");
let btnHide = document.getElementById("btn-Hide");
let menu = document.querySelector(".container-menu-hidden");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("container-menu-visible");
});
btnHide.addEventListener("click", function () {
  menu.classList.remove("container-menu-visible");
});

let popUp = document.querySelector(".popUp");
let btnPopUp = document.getElementById("btn-PopUp");
let btnHidePopUp = document.getElementById("btn-Hide-popUp");

btnPopUp.addEventListener("click", function () {
  popUp.style.visibility = "visible";
});

btnHidePopUp.addEventListener("click", function () {
  popUp.style.visibility = "hidden";
});
