console.log("Scroll esta funcionando");

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".center-Nav a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
