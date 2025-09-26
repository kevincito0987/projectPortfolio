document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".card-projects");
    // ❌ Se ha eliminado la línea container.innerHTML = ""; para no borrar las tarjetas existentes.

    // 📌 Lista de proyectos a generar dinámicamente (solo los dos nuevos)
    const proyectos = [
        {
            titulo: "Exploring the Future of AI in Everyday Life.<br><br>This project is an intelligent chatbot for a Taekwondo school. It uses artificial intelligence to improve communication by automating responses and providing personalized information to students and parents. It demonstrates the practical integration of AI to optimize management and enhance the user experience.",
            texto: "Python, React && MySQL",
            imagenClass: "card-image1",
            enlace: "https://github.com/Brayanestiv1/SportBot_backend.git",
            invertirOrden: true, // 📌 Indica si la imagen debe ir después del contenido
            id: "inprogress",
            imagenUrl: "https://www.infobae.com/resizer/v2/TG5KWH2QBVCL5HPTYUKTLDR23Y.jpg?auth=c8514863638a9d821a35afe6fc7a4fce7afae7d16c5214ca6fcf73bb01179e50&smart=true&width=1200&height=1200&quality=85"
        },
        {
            titulo: "Interactive Communication and Learning Platform ComunicaTech.<br><br>This project is an Accessible Web Platform for individuals with Language Disorders (e.g., ASD, aphasia). It digitizes visual communication cards (PECS) with multilingual audio and personalized lessons. The technical foundation uses Laravel 11, SOLID principles, and TypeScript in the frontend, with the core purpose of leveraging a multisensory interface to promote autonomy and inclusion in communication.",
            texto: "Laravel, Postgress, Php, Mysql, Supabase, Typescript, Postman && Tailwind Css",
            imagenClass: "card-image1",
            enlace: "https://github.com/kevincito0987/finalLaravelProject.git",
            invertirOrden: false,
            id: "future",
            imagenUrl: "https://github.com/kevincito0987/projectPortfolio/blob/main/assets/images/m2Lj5VO%20-%20Imgur.png?raw=true"
        }
    ];

    let tarjetasGeneradas = [];

    // 🔄 Creación dinámica de tarjetas de proyectos
    proyectos.forEach((proyecto, index) => {
        setTimeout(() => {
            const card = document.createElement("div");
            card.classList.add("card1", "rounded-lg", "p-4", "flex", "flex-col", "md:flex-row", "items-center", "w-full", "md:w-12/12", "space-y-4", "md:space-y-0", "md:space-x-4", "lg:w-5/12");

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
            // ❌ La clave aquí
            title.innerHTML = proyecto.titulo; 

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