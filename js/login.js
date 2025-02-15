let loginEmailInput = document.getElementById("username");
let loginPasswordInput = document.getElementById("password");
let loginBtn = document.getElementById("loginButton");
let signupAnchor = document.getElementById("signButton");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  let loginEmail = loginEmailInput.value;
  let loginPassword = loginPasswordInput.value;

  if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
    swal({
      icon: "warning",
      text: "Please fill in all fields",
    });
    return;
  }

  if (!isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    swal({
      icon: "error",
      text: "Incorrect email or password",
    });
  }
}

function isCorrectEmailAndPassword(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
    }
  }
  return 1;
}

loginBtn.addEventListener("click", function () {
  signIn();
});

signupAnchor.addEventListener("click", function () {
  window.location.href = "./../index.html";
});

document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (email && password) {
    const username = email.split("@")[0]; 
    localStorage.setItem("username", username); 
    window.location.href = "./../html/home.html"; 
  // } else {
  //   alert("Please enter valid email and password.");
  // 
  }
});

// hidePasswordIcon
       const hidePasswordIcon = document.querySelector('#hidePassword');
        const mainPasswordInput = document.querySelector('#password');

        hidePasswordIcon.addEventListener('click', function () {
            const type = mainPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            mainPasswordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });

