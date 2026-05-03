let buttons = document.querySelectorAll(".filters button");
let cards = document.querySelectorAll(".card");
let loadBtn = document.querySelector(".load button");

// بنضيف data-type لكل كارت
cards[0].dataset.type = "Temples";
cards[1].dataset.type = "Temples";
cards[2].dataset.type = "Artifacts";
cards[3].dataset.type = "Artifacts";
cards[4].dataset.type = "Landscapes";
cards[5].dataset.type = "Pyramids";

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        // نشيل active من كله
        buttons.forEach(b => b.classList.remove("active"));

        // نحط على اللي اتداس
        btn.classList.add("active");

        let type = btn.textContent;

        // لو All Works نظهر كله
        if (type === "All Works") {

            cards.forEach(card => {
                card.style.display = "block";
            });

        } else {

            cards.forEach(card => {

                // لو النوع مطابق يظهر
                if (card.dataset.type === type) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        }
    });

});