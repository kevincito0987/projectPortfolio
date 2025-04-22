document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".card-projects");

    // 📌 Lista de proyectos a generar dinámicamente
    const proyectos = [
        {
            titulo: "Exploring the Future of AI in Everyday Life",
            texto: "CampusLands",
            imagenClass: "card-image1",
            enlace: "https://github.com/kevincito0987/eCommerceClothingStore",
            invertirOrden: true, // 📌 Indica si la imagen debe ir después del contenido
            id: "inprogress"
        },
        {
            titulo: "Immersive UI Journey Through Gaming Interfaces",
            texto: "Personal",
            imagenClass: "card-image2",
            enlace: "https://github.com/kevincito0987/projectConcets",
            invertirOrden: false,
            id: "future"
        }
    ];

    let tarjetasGeneradas = [];

    // 🔄 Creación dinámica de tarjetas de proyectos
    proyectos.forEach((proyecto, index) => {
        setTimeout(() => {
            const card = document.createElement("div");
            card.classList.add("card1");

            // 🏷️ Asignar ID si existe
            if (proyecto.id) {
                card.id = proyecto.id;
            }

            // 🖼️ Creación de imagen de tarjeta
            const cardImage = document.createElement("div");
            cardImage.classList.add("card-image", proyecto.imagenClass);

            // 📝 Creación de contenido de tarjeta
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
            button.target = "_blank"; // 🔗 Abre en nueva pestaña

            // 🔄 Estructura de la tarjeta
            cardContent.appendChild(icon);
            cardContent.appendChild(title);
            cardContent.appendChild(text);
            cardContent.appendChild(button);

            // 📌 Determinar posición de imagen y contenido
            if (proyecto.invertirOrden) {
                card.appendChild(cardContent);
                card.appendChild(cardImage);
            } else {
                card.appendChild(cardImage);
                card.appendChild(cardContent);
            }

            // 🎨 Animación de aparición
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            container.appendChild(card);

            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }, 100);

            tarjetasGeneradas.push(cardImage);

            // 🌆 Cambiar fondo dinámicamente en las últimas dos tarjetas
            if (tarjetasGeneradas.length === 2) {
                tarjetasGeneradas[0].style.backgroundImage = "url('../assets/images/project4.png')";
                tarjetasGeneradas[1].style.backgroundImage = "url('../assets/images/project5.png')";
            }

        }, index * 400); // ⏳ Intervalo entre cada tarjeta generada
    });

    // 🔎 Función de filtrado e intercambio dinámico
    document.querySelector(".filters").addEventListener("click", (event) => {
        event.preventDefault();
        const filterType = event.target.closest("a")?.querySelector("p")?.textContent;

        if (!filterType) return;

        document.querySelectorAll(".card1").forEach(card => {
            card.style.display = "flex"; // Mostrar todas las tarjetas por defecto
        });

        if (filterType === "En Progreso") {
            // Filtro: solo mostrar tarjetas "in progress"
            document.querySelectorAll(".card1:not(#inprogress)").forEach(card => card.style.display = "none");

            // Intercala dinámicamente las imágenes y el contenido
            document.querySelectorAll("#inprogress").forEach((card, index) => {
                const cardImage = card.querySelector(".card-image");
                const cardContent = card.querySelector(".card-content1");

                if (cardImage && cardContent) {
                    card.innerHTML = ""; // Limpia el contenido actual

                    // Alternar posición de imagen y contenido
                    if (index % 2 === 0) {
                        card.appendChild(cardImage); // Imagen primero
                        card.appendChild(cardContent);
                    } else {
                        card.appendChild(cardContent); // Contenido primero
                        card.appendChild(cardImage);
                    }
                }
            });

        } else if (filterType === "Futuros") {
            // Filtro: solo mostrar tarjetas "future"
            document.querySelectorAll(".card1:not(#future)").forEach(card => card.style.display = "none");

            // Intercala dinámicamente las imágenes y el contenido
            document.querySelectorAll("#future").forEach((card, index) => {
                const cardImage = card.querySelector(".card-image");
                const cardContent = card.querySelector(".card-content1");

                if (cardImage && cardContent) {
                    card.innerHTML = ""; // Limpia el contenido actual

                    // Alternar posición de imagen y contenido
                    if (index % 2 === 0) {
                        card.appendChild(cardImage); // Imagen primero
                        card.appendChild(cardContent);
                    } else {
                        card.appendChild(cardContent); // Contenido primero
                        card.appendChild(cardImage);
                    }
                }
            });
        }
    });
});
