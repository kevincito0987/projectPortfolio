console.log("Esta es la función de la tarjeta");

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".card-projects");

    const proyectos = [
        {
            titulo: "Exploring the Future of AI in Everyday Life",
            texto: "CampusLands",
            imagenClass: "card-image1",
            enlace: "https://github.com/kevincito0987/eCommerceClothingStore",
            invertirOrden: true,
            id: "inprogress" // Se asignará a la primera tarjeta
        },
        {
            titulo: "Immersive UI Journey Through Gaming Interfaces",
            texto: "Personal",
            imagenClass: "card-image2",
            enlace: "https://github.com/kevincito0987/projectConcets",
            invertirOrden: false,
            id: "future" // Se asignará a la última tarjeta
        }
    ];

    let tarjetasGeneradas = [];

    proyectos.forEach((proyecto, index) => {
        setTimeout(() => {
            const card = document.createElement("div");
            card.classList.add("card1");

            // Asignar el ID a la primera y última tarjeta
            if (proyecto.id) {
                card.id = proyecto.id;
            }

            const cardImage = document.createElement("div");
            cardImage.classList.add("card-image", proyecto.imagenClass);

            const cardContent = document.createElement("div");
            cardContent.classList.add("card-content1");

            const icon = document.createElement("img");
            icon.src = "./assets/icons/Vector.svg";
            icon.alt = "Vector Icon";

            const title = document.createElement("h3");
            title.classList.add("card-title1");
            title.textContent = proyecto.titulo;

            const text = document.createElement("p");
            text.classList.add("card-text");
            text.textContent = proyecto.texto;

            const button = document.createElement("a");
            button.classList.add("card-button");
            button.href = proyecto.enlace;
            button.textContent = "Learn More";
            button.target = "_blank"; // Abre en nueva pestaña

            cardContent.appendChild(icon);
            cardContent.appendChild(title);
            cardContent.appendChild(text);
            cardContent.appendChild(button);

            if (proyecto.invertirOrden) {
                card.appendChild(cardContent);
                card.appendChild(cardImage);
            } else {
                card.appendChild(cardImage);
                card.appendChild(cardContent);
            }

            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            container.appendChild(card);

            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }, 100);

            // Guardar referencia de la tarjeta generada
            tarjetasGeneradas.push(cardImage);

            // Cambiar el fondo de las dos últimas tarjetas generadas
            if (tarjetasGeneradas.length === 2) {
                tarjetasGeneradas[0].style.backgroundImage = "url('../assets/images/project4.png')";
                tarjetasGeneradas[1].style.backgroundImage = "url('../assets/images/project5.png')";
            }

        }, index * 400);
    });
});
