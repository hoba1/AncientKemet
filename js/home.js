document.addEventListener("DOMContentLoaded", function () {
    let heroTitle = document.querySelector(".hero-title");
    if (localStorage.getItem("username")) {
        heroTitle.textContent = `Welcome , ${localStorage.getItem("username")}!`;
    } else {
        heroTitle.textContent = "Ancient Egypt";
    }
})