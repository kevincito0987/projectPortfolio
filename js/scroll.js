console.log("Scroll está funcionando"); // 🔍 Mensaje de depuración

// 🏗️ Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".center-Nav a"); // 🔗 Selecciona los enlaces de navegación

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // 🚫 Evita el comportamiento predeterminado del enlace

            const targetId = link.getAttribute("href").substring(1); // 📌 Obtiene el ID del elemento destino
            const targetElement = document.getElementById(targetId); // 🎯 Encuentra el elemento en el DOM

            // 🔄 Aplica el desplazamiento suave si el elemento existe
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // 🌊 Scroll animado
            }
        });
    });
});
