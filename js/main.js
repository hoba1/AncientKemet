// Navbar Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // المنيو تقفل لما ادوس علي اي لينك
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  // لما ادوس في  اي حته المنيو تقفل 
  document.addEventListener("click", function (e) {
    // !e.target.closest("nav") دي بتتأكد اني مش بدوس علي اي عنصر داخل ال nav
    if (!e.target.closest("nav")) {
      navLinks.classList.remove("active");
    }
  });
}

let themeBtn = document.querySelector(".theme-btn");
let themeIcon = themeBtn.querySelector(".theme-btn i");
themeBtn.addEventListener("click", () => {
    if(themeIcon.classList.contains("fa-moon")){
        darkmode()
        localStorage.setItem("mode","dark")
    } else{
        lightmode()
        localStorage.setItem("mode","light")
    }
});
if(localStorage.getItem("mode") === "dark"){
    darkmode()
} else{
    lightmode()
}
function addandremoveclass(e,ca,cr){
    e.classList.remove(cr)
    e.classList.add(ca)
}
function darkmode(){
    document.documentElement.style.setProperty("--background-color", "#0F0C06");
    document.documentElement.style.setProperty("--text-color", "#F5EDD5");
    document.documentElement.style.setProperty("--bg-card", "#1A1508");
    addandremoveclass(themeIcon,"fa-sun","fa-moon");
}
function lightmode(){
    document.documentElement.style.setProperty("--background-color", "#FAF6EE");
    document.documentElement.style.setProperty("--text-color", "#141c14");
    document.documentElement.style.setProperty("--bg-card", "#FFFFFF");
    addandremoveclass(themeIcon,"fa-moon","fa-sun");
}
