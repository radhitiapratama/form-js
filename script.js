const colors = document.querySelectorAll(".color");
const btn = document.querySelector(".btn");
const inputEffect = document.querySelectorAll(".input-group span");
const inputUser = document.querySelector(".usernameInput");
const inputPass = document.querySelector(".passwordInput");
const validUsername = document.querySelector(".username");
const validPassword = document.querySelector(".password");
colors.forEach((e) => {
  e.addEventListener("click", () => {
    let colorValue = e.getAttribute("value");
    const active = document.querySelector(".active");
    if (active == null) {
      e.classList.add("active");
    } else {
      active.classList.remove("active");
      e.classList.add("active");
      document.body.style.background = colorValue;
      btn.style.background = colorValue;
      inputEffect.forEach((e) => {
        e.style.background = colorValue;
      });
    }
  });
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUser.value && inputPass.value != null) {
    if (inputUser.value.indexOf(validUsername.textContent) > -1) {
      if (inputPass.value.indexOf(validPassword.textContent) > -1) {
        alert("Password dan username benar");
        inputUser.nextElementSibling.remove();
        inputPass.nextElementSibling.remove();
      } else {
        inputPass.nextElementSibling.textContent = "Password Salah";
      }
    } else {
      inputUser.nextElementSibling.textContent = "Username Salah";
      inputPass.nextElementSibling.textContent = "Password Salah";
    }
  } else {
    inputUser.nextElementSibling.textContent = "Username Wajib di isi";
    inputPass.nextElementSibling.textContent = "Passwords Wajib di isi";
  }
});
