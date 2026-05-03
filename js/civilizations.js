document.addEventListener("DOMContentLoaded", function () {
  let savedLayout = localStorage.getItem("civilization layout");
    if (savedLayout) {
        let layoutBtn = document.querySelector(`.layout-btn[data-layout="${savedLayout}"]`);
        if (layoutBtn) {
            layoutBtn.click();
        }
    }
});

let layoutbtn = document.querySelectorAll(".layout-btn");
layoutbtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    let layout = this.getAttribute("data-layout");
    let civilizationsContainer = document.querySelector(
      ".civilizations .container",
    );
    let civilizationCard = document.querySelectorAll(
      ".civilizations .civilization-card",
    );
    let civilizationCardTop = document.querySelectorAll(
      ".civilizations .civilization-card .civilization-card-top",
    );
    let activeBtn = document.querySelector(".layout-btn.active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }
    this.classList.add("active");
    localStorage.setItem("civilization layout", layout);
    if (layout === "grid") {
      civilizationsContainer.style.flexDirection = "row";
      civilizationCard.forEach((card) => {
        card.style.width = "400px";
      });
      civilizationCardTop.forEach((top) => {
        top.style.flexDirection = "column";
      });
    } else {
      civilizationsContainer.style.flexDirection = "column";
      civilizationCard.forEach((card) => {
        card.style.width = "100%";
      });
      civilizationCardTop.forEach((top) => {
        top.style.flexDirection = "row";
      });
    }
  });
});
