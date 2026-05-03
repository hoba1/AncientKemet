// ════════════════════════════════════════════
//  STEP 1 — grab elements from the HTML
//  document.getElementById() finds an element by its id=""
//  we store each one in a variable so we can use it below
// ════════════════════════════════════════════

const form            = document.getElementById("signup-form");      // the <form> element
const name            = document.getElementById("name");             // the name input
const email           = document.getElementById("email");            // the email input
const password        = document.getElementById("password");         // the password input
const confirmPassword = document.getElementById("confirm-password"); // the confirm password input


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
    name.style.borderColor            = "";
    email.style.borderColor           = "";
    password.style.borderColor        = "";
    confirmPassword.style.borderColor = "";

    // "none" hides the element — same as display: none in CSS
    document.getElementById("name-error").style.display     = "none";
    document.getElementById("email-error").style.display    = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("confirm-error").style.display  = "none";


    // ════════════════════════════════════════════
    //  STEP 4 — validation
    //  hasError starts as false
    //  we flip it to true whenever we find a problem
    //  checking fields separately means ALL errors show at the same time
    // ════════════════════════════════════════════

    let hasError = false;


    // ── check name ──
    // .value = what the user typed inside the input
    // .trim() removes spaces from start and end, so "   " counts as empty
    // === "" checks if the string is empty
    if (name.value.trim() === "") {
        name.style.borderColor = "red";                                  // red border on the input
        document.getElementById("name-error").style.display = "block";  // show error message
        hasError = true;                                                 // flag a problem was found
    }


    // ── check email ──
    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        document.getElementById("email-error").style.display = "block";
        hasError = true;
    }


    // ── check password — two rules ──
    if (password.value.trim() === "") {

        // rule 1: password can't be empty
        password.style.borderColor = "red";
        document.getElementById("password-error").textContent = "Please enter a password."; // change the message text
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


    // ── check confirm password — two rules ──
    if (confirmPassword.value.trim() === "") {

        // rule 1: confirm field can't be empty
        confirmPassword.style.borderColor = "red";
        document.getElementById("confirm-error").textContent = "Please confirm your password.";
        document.getElementById("confirm-error").style.display = "block";
        hasError = true;

    } else if (confirmPassword.value !== password.value) {

        // rule 2: must match the password exactly
        // !== means "not equal to"
        // "else if" only runs if confirm is not empty
        confirmPassword.style.borderColor = "red";
        document.getElementById("confirm-error").textContent = "Passwords do not match.";
        document.getElementById("confirm-error").style.display = "block";
        hasError = true;
    }


    // ════════════════════════════════════════════
    //  STEP 5 — stop if any error was found
    //  "return" exits the function immediately
    //  nothing below this line runs if hasError is true
    // ════════════════════════════════════════════

    if (hasError) return;


    // ════════════════════════════════════════════
    //  STEP 6 — save data to localStorage
    //
    //  localStorage is a place in the browser to save data permanently
    //  it stays saved even after the tab or browser is closed
    //  it can only store strings — not objects
    //  so we use JSON.stringify() to convert our object into a string first
    // ════════════════════════════════════════════

    // save the name BEFORE clearing the fields
    // if we clear first, name.value becomes "" and we lose it
    const username = name.value.trim();

    // create an object with all the user's data
    // an object is a collection of key: value pairs, wrapped in {}
    const userData = {
        name:     name.value.trim(),
        email:    email.value.trim(),
        password: password.value
        // in a real app, NEVER store plain passwords — this is just for learning
    };

    // JSON.stringify() converts the object into a string so localStorage can save it
    // example:
    // { name: "Yassin", email: "y@y.com", password: "12345678" }
    // becomes → '{"name":"Yassin","email":"y@y.com","password":"12345678"}'
    const userDataString = JSON.stringify(userData);

    // localStorage.setItem("key", value) saves the data in the browser
    // "user" is the key — like a label on a box — we use it to find the data later
    localStorage.setItem("user", userDataString);

    // also save the name separately so other pages can read it easily
    localStorage.setItem("username", username);


    // ════════════════════════════════════════════
    //  STEP 7 — clear fields and show success message
    // ════════════════════════════════════════════

    // .value = "" sets the input back to empty
    name.value            = "";
    email.value           = "";
    password.value        = "";
    confirmPassword.value = "";

    // alert() shows a popup message to the user
    // "+" joins strings together — called concatenation
    alert("Welcome, " + username + "! Your account has been created successfully.");
});
