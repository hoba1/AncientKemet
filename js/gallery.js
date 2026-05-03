let buttons = document.querySelectorAll(".filters button");
let cards = document.querySelectorAll(".card");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        // نشيل active من كله
        buttons.forEach(b => b.classList.remove("active"));

        // نحط على اللي اتداس
        btn.classList.add("active");

        let type = btn.textContent.toLowerCase();

        // لو All Works نظهر كله
        if (type === "all works") {

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