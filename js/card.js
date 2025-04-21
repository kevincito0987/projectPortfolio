document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".card-projects");

    const proyectos = [
        {
            titulo: "Exploring the Future of AI in Everyday Life",
            texto: "CampusLands",
            imagenClass: "card-image1",
            enlace: "https://github.com/kevincito0987/eCommerceClothingStore",
            invertirOrden: true,
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

    proyectos.forEach((proyecto, index) => {
        setTimeout(() => {
            const card = document.createElement("div");
            card.classList.add("card1");

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
            button.target = "_blank";

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

            tarjetasGeneradas.push(cardImage);

            if (tarjetasGeneradas.length === 2) {
                tarjetasGeneradas[0].style.backgroundImage = "url('../assets/images/project4.png')";
                tarjetasGeneradas[1].style.backgroundImage = "url('../assets/images/project5.png')";
            }

        }, index * 400);
    });

    
    document.querySelector(".filters").addEventListener("click", (event) => {
        event.preventDefault();
        const filterType = event.target.closest("a")?.querySelector("p")?.textContent;
    
        if (!filterType) return;
    
        document.querySelectorAll(".card1").forEach(card => {
            card.style.display = "flex";
        });
    
        if (filterType === "En Progreso") {
            document.querySelectorAll(".card1:not(#inprogress)").forEach(card => card.style.display = "none");
            const cardInProgress = document.getElementById("inprogress");
    
            if (cardInProgress) {
                const cardImage = cardInProgress.querySelector(".card-image");
                const cardContent = cardInProgress.querySelector(".card-content1");
    
                if (cardImage && cardContent) {
                    cardInProgress.removeChild(cardImage);
                    cardInProgress.removeChild(cardContent);
    
                    cardInProgress.appendChild(cardImage);
                    cardInProgress.appendChild(cardContent);
                }
            }
        } else if (filterType === "Futuros") {
            document.querySelectorAll(".card1:not(#future)").forEach(card => card.style.display = "none");
        }
    });
    
});
