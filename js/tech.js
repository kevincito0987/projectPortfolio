document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const techCards = document.querySelectorAll(".cardT");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // 1. Gestionar estados visuales de los botones
            filterButtons.forEach(btn => {
                btn.classList.remove("bg-[#f04e23]");
                btn.classList.add("bg-gray-700");
            });
            button.classList.add("bg-[#f04e23]");
            button.classList.remove("bg-gray-700");

            // 2. Filtrar las tarjetas
            techCards.forEach(card => {
                // Si es "all", mostramos todo
                if (filter === "all") {
                    showCard(card);
                }
                // Si la tarjeta tiene la clase del filtro, la mostramos
                else if (card.classList.contains(filter)) {
                    showCard(card);
                }
                // Si no coincide, la ocultamos
                else {
                    hideCard(card);
                }
            });
        });
    });

    // Funciones auxiliares para animaciones limpias
    function showCard(card) {
        card.style.display = "block"; // O "flex" según tu diseño
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
        }, 10);
    }

    function hideCard(card) {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
            card.style.display = "none";
        }, 300); // Tiempo que coincide con el CSS transition
    }
});