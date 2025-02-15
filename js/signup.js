
let signupBtn = document.getElementById("signupBtn");
let signupNameInput = document.getElementById("signupName");
let signupEmailInput = document.getElementById("email");
let signupPasswordInput = document.getElementById("password");
let loginAnchor = document.getElementById("loginAnchor");

let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
 function signUp() {
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
}


loginAnchor.addEventListener("click", function () {
  window.location.href = './../html/login.html';
});



const hidePasswordIcon = document.querySelector('#hidePassword');
const mainPasswordInput = document.querySelector('#password');

hidePasswordIcon.addEventListener('click', function () {
  const type =
    mainPasswordInput.getAttribute('type') === 'password'
      ? 'text'
      : 'password';
  mainPasswordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

// Toggle visibility for the confirm password
const hideConfirmPasswordIcon =
  document.querySelector('#hideConfirmPassword');
const confirmPasswordInput = document.querySelector('#confirm-password');

hideConfirmPasswordIcon.addEventListener('click', function () {
  const type =
    confirmPasswordInput.getAttribute('type') === 'password'
      ? 'text'
      : 'password';
  confirmPasswordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});