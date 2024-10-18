document.addEventListener("DOMContentLoaded", function () {
  let nameInput = document.getElementById("name-input");
  let error = document.querySelector(".errorSpan");
  let simbolos = /[!@#$%^&*()_+·~\-=\[\]{};':"\\|,.<>\/?]/;
  let numeros = /[123456789]/;

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

    if (simbolos.test(inputValue)) {
      error.textContent = "Contiene simbolos (!·$%&/)";
      nameInput.style.borderColor = "red";
      nameInput.style.outlineColor = "red";
      nameInput.style.color = "red";
    }

    if (numeros.test(inputValue)) {
      error.textContent = "Contiene números (0-9)";
      nameInput.style.borderColor = "red";
      nameInput.style.outlineColor = "red";
      nameInput.style.color = "red";
    }

    if (inputValue == "") {
      error.textContent = "";
      nameInput.style.borderColor = "";
      nameInput.style.outlineColor = "";
      nameInput.style.color = "";
    }
  });

  let passInput = document.getElementById("password-input");
  let passError = document.querySelector(".passError");

  passInput.addEventListener("input", function () {
    let inputValue = document.getElementById("password-input").value;

    if (inputValue.length <= 5) {
      passError.textContent = "Contraseña muy corta";
      passInput.style.borderColor = "red";
      passInput.style.outlineColor = "red";
      passInput.style.color = "red";
    } else if (
      inputValue.length > 5 &&
      !simbolos.test(inputValue) &&
      !numeros.test(inputValue)
    ) {
      passError.textContent = "La contraseña debe contener numeros o simbolos";
      passInput.style.borderColor = "red";
      passInput.style.outlineColor = "red";
      passInput.style.color = "red";
    } else {
      passError.textContent = "";
      passInput.style.borderColor = "";
      passInput.style.outlineColor = "";
      passInput.style.color = "";
    }

    if (inputValue == "") {
      passError.textContent = "";
      passInput.style.borderColor = "";
      passInput.style.outlineColor = "";
      passInput.style.color = "";
    }
  });
});
