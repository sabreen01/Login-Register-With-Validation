let signupBtn = document.getElementById("signupBtn");
let signupNameInput = document.getElementById("signupName");
let signupEmailInput = document.getElementById("email");
let signupPasswordInput = document.getElementById("password");
let signupCoPasswordInput = document.getElementById("confirm-password");
let loginAnchor = document.getElementById("loginAnchor");

let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
function signUp() {
  if (signupPasswordInput.value !== signupCoPasswordInput.value) {
    swal({
      icon: "error",
      text: "Passwords do not match",
    });
    return;
  }

  let user = {
    name: signupNameInput.value,
    email: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  if (
    signupNameInput.value === "" ||
    signupEmailInput.value === "" ||
    signupPasswordInput.value === ""
  ) {
    swal({
      icon: "warning",
      text: "Please fill in all fields",
    });
    return;
  }

  if (isValidEmail(signupEmailInput.value) && isNewEmail(signupEmailInput.value)) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users)); 
    clearForm();
    swal({
      icon: "success",
      text: "Sign up successful!",
    });
  } else {
    swal({
      icon: "error",
      text: "Invalid email or email already in use",
    });
  }
}

signupBtn.addEventListener("click", function () {
  signUp();
});

function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isNewEmail(email) {
  return !users.some((user) => user.email === email);
}

function clearForm() {
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";
  signupCoPasswordInput.value = "";
}

loginAnchor.addEventListener("click", function () {
  window.location.href = './login.html';
});

// Toggle eye icons for password and confirm password fields
document.addEventListener('DOMContentLoaded', function() {
  const togglePasswordIcons = document.querySelectorAll('.togglePassword');

  togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const passwordField = this.previousElementSibling;
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });
  });
});