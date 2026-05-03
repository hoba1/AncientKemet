// ════════════════════════════════════════════
//  STEP 1 — grab elements from the HTML
//  document.getElementById() finds an element by its id=""
//  we store each one in a variable so we can use it below
// ════════════════════════════════════════════

const form     = document.getElementById("login-form"); // the <form> element
const email    = document.getElementById("email");       // the email input
const password = document.getElementById("password");   // the password input


// ════════════════════════════════════════════
//  STEP 2 — listen for the form submit event
//  "submit" fires when the button is clicked OR user presses Enter
//  the browser automatically passes "e" (the event object) to our function
// ════════════════════════════════════════════

form.addEventListener("submit", function(e) {

    // stops the browser's default behavior — which is reloading the page
    e.preventDefault();


    // ════════════════════════════════════════════
    //  STEP 3 — reset from any previous attempt
    //  clear red borders and hide error messages before checking again
    // ════════════════════════════════════════════

    // "" removes the inline style — goes back to the CSS default
    email.style.borderColor    = "";
    password.style.borderColor = "";

    // "none" hides the element — same as display: none in CSS
    document.getElementById("email-error").style.display    = "none";
    document.getElementById("password-error").style.display = "none";


    // ════════════════════════════════════════════
    //  STEP 4 — validation
    //  hasError starts as false
    //  we flip it to true whenever we find a problem
    // ════════════════════════════════════════════

    let hasError = false;


    // ── check email ──
    // .value = what the user typed inside the input
    // .trim() removes spaces from start and end, so "   " counts as empty
    // === "" checks if the string is empty
    if (email.value.trim() === "") {
        email.style.borderColor = "red";                                  // red border on the input
        document.getElementById("email-error").style.display = "block";  // show error message
        hasError = true;                                                  // flag a problem was found
    }


    // ── check password — two rules ──
    if (password.value.trim() === "") {

        // rule 1: password can't be empty
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Please enter your password."; // change the message text
        document.getElementById("password-error").style.display = "block";
        hasError = true;

    } else if (password.value.length < 8) {

        // rule 2: must be at least 8 characters
        // .length counts the number of characters in a string
        // "else if" only runs if the first "if" was false (password is not empty)
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
        document.getElementById("password-error").style.display = "block";
        hasError = true;
    }


    // ════════════════════════════════════════════
    //  STEP 5 — stop if any error was found
    //  "return" exits the function immediately
    //  nothing below this line runs if hasError is true
    // ════════════════════════════════════════════

    if (hasError) return;


    // ════════════════════════════════════════════
    //  STEP 6 — read saved data from localStorage
    //
    //  localStorage.getItem("key") reads the data by its key name
    //  we saved the user data in sign-up.js with the key "user"
    //  if nothing was saved yet, getItem returns null
    // ════════════════════════════════════════════

    // read the saved user string from localStorage
    const userDataString = localStorage.getItem("user");

    // check if any account exists at all
    // null means nothing was found with that key — no account was created yet
    if (userDataString === null) {
        alert("No account found. Please sign up first.");
        return; // stop here, don't continue
    }

    // JSON.parse() is the opposite of JSON.stringify()
    // it converts the string back into an object so we can access .name, .email, etc.
    // '{"name":"Yassin","email":"y@y.com"}' becomes → { name: "Yassin", email: "y@y.com" }
    const userData = JSON.parse(userDataString);


    // ════════════════════════════════════════════
    //  STEP 7 — check if email and password match
    //  compare what the user typed with what was saved in localStorage
    // ════════════════════════════════════════════

    // userData.email is the email saved from sign-up
    // email.value is what the user just typed now
    // !== means "not equal to"
    // || means "or" — if EITHER one doesn't match, we reject
    if (email.value.trim() !== userData.email || password.value !== userData.password) {
        alert("Incorrect email or password. Please try again.");
        return; // stop here, don't continue
    }


    // ════════════════════════════════════════════
    //  STEP 8 — login is successful
    //  both email and password matched
    // ════════════════════════════════════════════

    // userData.name is the name we saved during sign-up
    const username = userData.name;

    // .value = "" sets the inputs back to empty
    email.value    = "";
    password.value = "";

    // save a "loggedIn" flag so other pages know the user is signed in
    // localStorage only stores strings — so we store the string "true", not the boolean true
    localStorage.setItem("loggedIn", "true");

    // alert() shows a popup message to the user
    // "+" joins strings together — called concatenation
    alert("Welcome back, " + username + "! You have signed in successfully.");
});
