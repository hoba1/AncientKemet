document.addEventListener("DOMContentLoaded", function () {
    let heroTitle = document.querySelector(".hero-title");
    let loginBtn = document.querySelector(".login-btn");
    let signupBtn = document.querySelector(".signup-btn");
    let logoutBtn = document.querySelector(".logout-btn");
    if (localStorage.getItem("username")) {
        heroTitle.textContent = `Welcome , ${localStorage.getItem("username")}!`;
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        logoutBtn.style.display = "block";
    } else {
        heroTitle.textContent = "Ancient Egypt";
        loginBtn.style.display = "block";
        signupBtn.style.display = "block";
        logoutBtn.style.display = "none";
    }
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("user");
    });
})


