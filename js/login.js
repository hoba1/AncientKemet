const form     = document.getElementById("login-form");
const email    = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    email.style.borderColor    = "";
    password.style.borderColor = "";

    document.getElementById("email-error").style.display    = "none";
    document.getElementById("password-error").style.display = "none";

    let hasError = false;

    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        document.getElementById("email-error").style.display = "block";
        hasError = true;
    }

    if (password.value.trim() === "") {
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Please enter your password.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;
    } else if (password.value.length < 8) {
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;
    }

    if (hasError) return;

    const userDataString = localStorage.getItem("user");

    if (userDataString === null) {
        alert("No account found. Please sign up first.");
        return;
    }

    const userData = JSON.parse(userDataString);

    if (email.value.trim() !== userData.email || password.value !== userData.password) {
        alert("Incorrect email or password. Please try again.");
        return;
    }

    const username = userData.name;

    email.value    = "";
    password.value = "";

    localStorage.setItem("loggedIn", "true");
    alert("Welcome back, " + username + "! You have signed in successfully.");
    window.location.href = "./index.html";
});
