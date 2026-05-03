const form     = document.getElementById("login-form");
const email    = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // reset borders and hide errors
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

    // ── NEW: grab the part before "@" in the email to use as username ──
    // .split("@") breaks "yassin@gmail.com" into ["yassin", "gmail.com"]
    // [0] takes the first item → "yassin"
    const username = email.value.split("@")[0];

    // ── NEW: clear all the fields so inputs go empty ──
    email.value    = "";
    password.value = "";

    // ── NEW: show a success alert with the username ──
    alert("Welcome back, " + username + "! You have signed in successfully.");
});
