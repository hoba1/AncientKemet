// ── Step 1: grab the elements from the HTML ──
// document.getElementById finds an element by its id attribute
const form     = document.getElementById("login-form");
const email    = document.getElementById("email");
const password = document.getElementById("password");


// ── Step 2: listen for the form submit event ──
// "submit" fires when the button is clicked OR the user presses Enter
// the browser automatically passes the event object (e) into the function
form.addEventListener("submit", function(e) {

    // stops the browser's default behavior — which is reloading the page
    e.preventDefault();


    // ── Step 3: reset from any previous attempt ──
    // if the user tried before and got red borders, clear them first
    email.style.borderColor    = "";  // "" means remove the inline style
    password.style.borderColor = "";

    // hide both error messages (they may be visible from last attempt)
    document.getElementById("email-error").style.display    = "none";
    document.getElementById("password-error").style.display = "none";


    // ── Step 4: start validation ──
    // hasError starts as false — we flip it to true if we find a problem
    // we don't use one big if() so ALL fields get checked at once
    let hasError = false;


    // check email — .trim() removes spaces so "   " counts as empty
    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        document.getElementById("email-error").style.display = "block";
        hasError = true;
    }


    // check password — two rules:
    if (password.value.trim() === "") {
        // rule 1: not empty
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Please enter your password.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;

    } else if (password.value.length < 8) {
        // rule 2: at least 8 characters
        // .length counts how many characters are in the string
        // else if means: only check this if the first check passed
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;
    }


    // ── Step 5: stop if there's any error ──
    // return exits the function — nothing after this line runs
    if (hasError) return;


    // ── Step 6: all good ──
    // only reaches here if every check passed
    // replace this with whatever you want — redirect, fetch, etc.
    console.log("Form is valid!");
});
