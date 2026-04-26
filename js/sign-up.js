const form            = document.getElementById("signup-form");
const name            = document.getElementById("name");
const email           = document.getElementById("email");
const password        = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // ── reset all borders and hide all error messages ──
    name.style.borderColor            = "";
    email.style.borderColor           = "";
    password.style.borderColor        = "";
    confirmPassword.style.borderColor = "";

    document.getElementById("name-error").style.display     = "none";
    document.getElementById("email-error").style.display    = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("confirm-error").style.display  = "none";

    let hasError = false;

    // ── check name ──
    if (name.value.trim() === "") {
        name.style.borderColor = "red";
        document.getElementById("name-error").style.display = "block";
        hasError = true;
    }

    // ── check email ──
    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        document.getElementById("email-error").style.display = "block";
        hasError = true;
    }

    // ── check password ──
    if (password.value.trim() === "") {
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Please enter a password.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;

    } else if (password.value.length < 8) {
        // .length counts characters — must be 8 or more
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;
    }

    // ── check confirm password ──
    if (confirmPassword.value.trim() === "") {
        confirmPassword.style.borderColor = "red";
        document.getElementById("confirm-error").textContent = "Please confirm your password.";
        document.getElementById("confirm-error").style.display = "block";
        hasError = true;

    } else if (confirmPassword.value !== password.value) {
        // !== means "not equal" — both passwords must be exactly the same
        confirmPassword.style.borderColor = "red";
        document.getElementById("confirm-error").textContent = "Passwords do not match.";
        document.getElementById("confirm-error").style.display = "block";
        hasError = true;
    }

    // ── stop if any error ──
    if (hasError) return;

    // ── all good — replace this with your real action ──
    console.log("Sign up valid!");
});