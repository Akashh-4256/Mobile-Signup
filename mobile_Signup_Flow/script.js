// ===============================
// Show / Hide Password
// ===============================

const passwordIcons = document.querySelectorAll(".togglePassword");

passwordIcons.forEach(icon => {

    icon.addEventListener("click", function () {

        const input = this.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        }

    });

});


// ===============================
// Password Strength Indicator
// ===============================

const passwordField = document.getElementById("signupPassword");
const strengthBar = document.getElementById("strengthBar");

if (passwordField && strengthBar) {

passwordField.addEventListener("keyup", () => {

let value = passwordField.value;

let strength = 0;

if (value.length >= 6)
strength++;

if (/[A-Z]/.test(value))
strength++;

if (/[0-9]/.test(value))
strength++;

if (/[@$!%*?&]/.test(value))
strength++;

switch(strength){

case 1:
strengthBar.style.width="25%";
strengthBar.style.background="red";
break;

case 2:
strengthBar.style.width="50%";
strengthBar.style.background="orange";
break;

case 3:
strengthBar.style.width="75%";
strengthBar.style.background="gold";
break;

case 4:
strengthBar.style.width="100%";
strengthBar.style.background="green";
break;

default:
strengthBar.style.width="0%";

}

});

}


// ===============================
// Login Validation
// ===============================

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value.trim();

if(email==="" || password===""){

alert("Please fill all fields.");

return;

}

window.location.href="login.html";

});

}


// ===============================
// Signup Validation
// ===============================

const signupForm=document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("signupEmail").value.trim();

const password=document.getElementById("signupPassword").value;

const confirm=document.getElementById("confirmPassword").value;

if(name==="" || email==="" || password===""){

alert("Please complete all fields.");

return;

}

if(password!==confirm){

alert("Passwords do not match.");

return;

}

alert("Account created successfully!");

window.location.href="index.html";

});

}


// ===============================
// Forgot Password
// ===============================

const forgotForm=document.getElementById("forgotForm");

if(forgotForm){

forgotForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("resetEmail").value;

if(email===""){

alert("Enter your registered email.");

return;

}

alert("Password reset link sent to "+email);

window.location.href="index.html";

});

}