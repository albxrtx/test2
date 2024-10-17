document.addEventListener("DOMContentLoaded", function () {
  let nameInput = document.getElementById("name-input");
  let error = document.querySelector(".errorSpan");
  nameInput.addEventListener("input", function () {
    let inputValue = document.getElementById("name-input").value;

    if (inputValue.length <= 2) {
      error.textContent = "Debe contener más de 2 caracteres";
      nameInput.style.borderColor = "red";
      nameInput.style.outlineColor = "red";
      nameInput.style.color = "red";
    } else if (inputValue.length >= 16) {
      error.textContent = "Debe contener menos de 16 caracteres";
      nameInput.style.borderColor = "red";
      nameInput.style.outlineColor = "red";
      nameInput.style.color = "red";
    } else {
      error.textContent = "";
      nameInput.style.borderColor = "";
      nameInput.style.outlineColor = "";
      nameInput.style.color = "";
    }

    if (inputValue == "") {
      error.textContent = "";
      nameInput.style.borderColor = "";
      nameInput.style.outlineColor = "";
      nameInput.style.color = "";
    }
  });
});
