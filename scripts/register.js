document.addEventListener("DOMContentLoaded", function () {
  const simbolos = /[@#€_&\-+()/*·"':;!?.,~`|•√π÷×§∆£¥$¢^°={}%©®™✓[\]<>]/;
  const numeros = /[123456789]/;
  const letras = /[qwertyuiopasdfghjklñzxcvbnm]/;

  // Declaración variables del campo nombre
  let nameInput = document.getElementById("name-input");
  let nameError = document.querySelector(".errorSpan");

  nameInput.addEventListener("input", function () {
    let inputValue = document.getElementById("name-input").value;
    // Validacion del nombre
    if (inputValue.length >= 2) {
      if (simbolos.test(inputValue)) {
        nameError.textContent = "Nombre no puede contener simbolos (!@#/&)";
        nameInput.style.borderColor = "red";
        nameInput.style.outlineColor = "red";
        nameInput.style.color = "red";
      } else if (numeros.test(inputValue)) {
        nameError.textContent = "Nombre no puede contener numeros (0-9)";
        nameInput.style.borderColor = "red";
        nameInput.style.outlineColor = "red";
        nameInput.style.color = "red";
      } else {
        nameError.textContent = "";
        nameInput.style.borderColor = "";
        nameInput.style.outlineColor = "";
        nameInput.style.color = "";
        nombreValido = true;
      }
    } else {
      nameError.textContent = "Nombre debe tener mas de 2 caracteres";
      nameInput.style.borderColor = "red";
      nameInput.style.outlineColor = "red";
      nameInput.style.color = "red";
    }
    //Limpiar por si nombre está vacío
    if (inputValue == "") {
      nameError.textContent = "";
      nameInput.style.borderColor = "";
      nameInput.style.outlineColor = "";
      nameInput.style.color = "";
    }
  });

  // Declaración variables del campo contraseña
  let passInput = document.getElementById("password-input");
  let passError = document.querySelector(".passError");

  passInput.addEventListener("input", function () {
    let inputValue = document.getElementById("password-input").value;
    //Validación contraseña
    if (inputValue.length >= 5) {
      if (!letras.test(inputValue)) {
        passError.textContent = "La contraseña debe contener letras (a-z)";
      } else if (!numeros.test(inputValue)) {
        passError.textContent = "La contraseña debe contener numeros (0-9)";
      } else if (!simbolos.test(inputValue)) {
        passError.textContent = "La contraseña debe contener simbolos (!@#/&)";
      } else {
        passError.textContent = "";
        passInput.style.borderColor = "";
        passInput.style.outlineColor = "";
        passInput.style.color = "";
        passValido = true;
      }
    } else {
      passError.textContent = "Contraseña muy corta";
      passInput.style.borderColor = "red";
      passInput.style.outlineColor = "red";
      passInput.style.color = "red";
    }
    //Limpiar por si contraseña está vacío
    if (inputValue == "") {
      passError.textContent = "";
      passInput.style.borderColor = "";
      passInput.style.outlineColor = "";
      passInput.style.color = "";
    }
  });

  let botonEye = document.getElementById("toggle-password");
  botonEye.addEventListener("click", function () {
    passInput.type = passInput.type === "password" ? "text" : "password";
  });
});
