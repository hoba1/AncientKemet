const form            = document.getElementById("signup-form");      
const name            = document.getElementById("name");             
const email           = document.getElementById("email");            
const password        = document.getElementById("password");         
const confirmPassword = document.getElementById("confirm-password"); 


form.addEventListener("submit", function(e) {

    e.preventDefault();

    name.style.borderColor            = "";
    email.style.borderColor           = "";
    password.style.borderColor        = "";
    confirmPassword.style.borderColor = "";

    document.getElementById("name-error").style.display     = "none";
    document.getElementById("email-error").style.display    = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("confirm-error").style.display  = "none";

    let hasError = false;

    if (name.value.trim() === "") {
        name.style.borderColor = "red";                                  
        document.getElementById("name-error").style.display = "block";  
        hasError = true;                                                 
    }

    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        document.getElementById("email-error").style.display = "block";
        hasError = true;
    }

    if (password.value.trim() === "") {

        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Please enter a password."; 
        document.getElementById("password-error").style.display = "block";
        hasError = true;

    } else if (password.value.length < 8) {

        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;
    }

    if (confirmPassword.value.trim() === "") {

        confirmPassword.style.borderColor = "red";
        document.getElementById("confirm-error").textContent = "Please confirm your password.";
        document.getElementById("confirm-error").style.display = "block";
        hasError = true;

    } else if (confirmPassword.value !== password.value) {

        confirmPassword.style.borderColor = "red";
        document.getElementById("confirm-error").textContent = "Passwords do not match.";
        document.getElementById("confirm-error").style.display = "block";
        hasError = true;
    }

    if (hasError) return;

    const username = name.value.trim();

    const userData = {
        name:     name.value.trim(),
        email:    email.value.trim(),
        password: password.value
    };

    const userDataString = JSON.stringify(userData);

    localStorage.setItem("user", userDataString);

    localStorage.setItem("username", username);

    name.value            = "";
    email.value           = "";
    password.value        = "";
    confirmPassword.value = "";

    alert("Welcome, " + username + "! Your account has been created successfully.");
    window.location.href = "./login.html";
});
