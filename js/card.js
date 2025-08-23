document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".card-projects");
    // ❌ Se ha eliminado la línea container.innerHTML = ""; para no borrar las tarjetas existentes.

    // 📌 Lista de proyectos a generar dinámicamente (solo los dos nuevos)
    const proyectos = [
        {
            titulo: "Exploring the Future of AI in Everyday Life",
            texto: "CampusLands",
            imagenClass: "card-image1",
            enlace: "https://github.com/kevincito0987/eCommerceClothingStore",
            invertirOrden: true, // 📌 Indica si la imagen debe ir después del contenido
            id: "inprogress",
            imagenUrl: "https://github.com/kevincito0987/projectPortfolio/blob/main/assets/images/project4.png?raw=true"
        },
        {
            titulo: "Immersive UI Journey Through Gaming Interfaces",
            texto: "Personal",
            imagenClass: "card-image1",
            enlace: "https://github.com/kevincito0987/projectConcets",
            invertirOrden: false,
            id: "future",
            imagenUrl: "https://github.com/kevincito0987/projectPortfolio/blob/main/assets/images/project5.png?raw=true"
        }
    ];

    let tarjetasGeneradas = [];

    // 🔄 Creación dinámica de tarjetas de proyectos
    proyectos.forEach((proyecto, index) => {
        setTimeout(() => {
            const card = document.createElement("div");
            card.classList.add("card1", "rounded-lg", "p-4", "flex", "flex-col", "items-center", "w-full", "md:w-5/12", "space-y-4", "md:space-y-0", "md:space-x-4");

            // 🏷️ Asignar ID si existe
            if (proyecto.id) {
                card.id = proyecto.id;
            }
            
            // Añadir flex-row-reverse si es necesario para el orden
            if (proyecto.invertirOrden) {
                card.classList.add("md:flex-row-reverse");
            } else {
                card.classList.add("md:flex-row");
            }

            // 🖼️ Creación de imagen de tarjeta
            const cardImage = document.createElement("div");
            // Se usa la clase de imagen de la lista de proyectos y también se añade "card-image"
            cardImage.classList.add(proyecto.imagenClass, "card-image", "w-full", "md:w-1/2", "h-64", "md:h-auto", "bg-gray-700", "rounded-lg");
            cardImage.style.backgroundSize = "cover";

            if (proyecto.imagenUrl) {
                cardImage.style.backgroundImage = `url('${proyecto.imagenUrl}')`;
            }


            // 📝 Creación de contenido de tarjeta
            const cardContent = document.createElement("div");
            cardContent.classList.add("card-content1", "w-full", "md:w-1/2", "flex", "flex-col", "justify-center", "text-white", "p-4");

            const icon = document.createElement("img");
            icon.src = "./assets/icons/Vector.svg";
            icon.alt = "Vector Icon";
            icon.classList.add("w-8", "h-8", "mb-2");


            const title = document.createElement("h3");
            title.classList.add("card-title1", "text-lg", "font-semibold", "mb-1");
            title.textContent = proyecto.titulo;

            const text = document.createElement("p");
            text.classList.add("card-text", "text-sm", "text-gray-400", "mb-4");
            text.textContent = proyecto.texto;

            const button = document.createElement("a");
            button.classList.add("card-button", "text-blue-500", "hover:underline");
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
