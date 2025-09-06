console.log("About Me Función"); // 📌 Mensaje para depuración inicial

document.addEventListener("DOMContentLoaded", () => {
    // 🏗️ Selección de la sección principal
    const myStorySection = document.querySelector(".firstPart .descWork21");

    // 🎨 Configuración inicial de estilos para la caja y textos
    myStorySection.style.display = "flex"; // 📐 Caja flexible para organizar elementos
    myStorySection.style.flexDirection = "column"; // 🔄 Dirección de los elementos: vertical
    myStorySection.style.justifyContent = "flex-end"; // 📌 Posicionar contenido abajo
    myStorySection.style.padding = "10px"; // 🛠️ Espaciado interno para mejor diseño
    myStorySection.style.backgroundColor = "rgba(60, 57, 101, 0.1)"; // 🎨 Fondo sutil
    myStorySection.style.borderRadius = "4px"; // 🔵 Bordes suaves y estilizados
    myStorySection.style.boxSizing = "border-box"; // 📦 Ajustar el diseño de la caja
    myStorySection.style.height = "auto"; // 📏 Altura dinámica basada en el contenido
    myStorySection.style.transition = "all 0.3s ease"; // ✨ Transición suave para interactividad

    // ✍️ Configuración inicial de "My Story"
    const title = myStorySection.querySelector("p:nth-child(2)"); // Selección del título
    title.style.fontSize = "40px"; // 🔤 Fuente grande y destacada
    title.style.fontFamily = "Inter-Bold"; // 🎨 Tipo de fuente elegante
    title.style.marginBottom = "10px"; // 🔽 Espaciado para separar del siguiente elemento

    // 📝 Creación de la descripción oculta inicialmente
    const description = document.createElement("p"); // 📌 Elemento dinámico para la descripción
    description.classList.add("description"); // 🏷️ Clase para estilos
    description.textContent = `
        As a Frontend Developer, I am passionate about technology and thoroughly enjoy writing code.
        Throughout my career, I have had the opportunity to work on a variety of different projects,
        which has helped me to grow my skill set and refine my abilities. Currently, if you're interested 
        in discussing how we can work together to build innovative solutions, please don't hesitate to get in touch!
    `; // ✍️ Descripción detallada

    // 🎯 Agrega la descripción al DOM
    myStorySection.appendChild(description);

    // ✂️ Configuración inicial de visibilidad y transición para la descripción
    description.style.lineHeight = "1.5";
    description.style.textAlign = "center";
    description.style.overflow = "hidden";
    description.style.opacity = "0";
    description.style.height = "0";
    description.style.transition = "opacity 0.3s ease, height 0.3s ease";

    // 📐 Función para actualizar los estilos de la descripción basados en el tamaño de la pantalla
    const updateDescriptionStyles = () => {
        if (window.matchMedia("(min-width: 1280px)").matches) {
            // Pantallas de 1280px o más grandes
            description.style.fontSize = "1.6rem";
            description.style.width = "96%";
        } else if (window.matchMedia("(min-width: 1114px) and (max-width: 1279px)").matches) {
            // Pantallas entre 1114px y 1279px
            description.style.fontSize = "1.2rem";
            description.style.width = "96%";
        } else if (window.matchMedia("(min-width: 800px) and (max-width: 1113px)").matches) {
            // Pantallas entre 800px y 1113px
            description.style.fontSize = "1.1rem";
            description.style.width = "96%";
        } else if (window.matchMedia("(min-width: 760px) and (max-width: 799px)").matches) {
            // Pantallas entre 760px y 799px
            description.style.fontSize = "1.1rem";
            description.style.width = "96%";
        } else if (window.matchMedia("(min-width: 390px) and (max-width: 440px)").matches) {
            // Pantallas entre 390px y 440px
            description.style.fontSize = "1.1rem";
            description.style.width = "96%";
        } else if (window.matchMedia("(min-width: 360px) and (max-width: 389px)").matches) {
            // Pantallas entre 360px y 389px
            description.style.fontSize = "1rem";
            description.style.width = "95%";
        } else if (window.matchMedia("(min-width: 320px) and (max-width: 359px)").matches) {
            // Pantallas entre 320px y 359px
            description.style.fontSize = "1rem";
            description.style.width = "100%";
        } else {
            // Estilos por defecto para cualquier otro tamaño
            description.style.fontSize = "0.8rem";
            description.style.width = "100%";
        }
    };

    // 🔄 Llama a la función al cargar la página
    updateDescriptionStyles();

    // 🎧 Escucha el evento de cambio de tamaño de la ventana para actualizar los estilos
    window.addEventListener("resize", updateDescriptionStyles);

    // ⏳ Esconder inicialmente para evitar parpadeos
    myStorySection.style.visibility = "hidden"; // 🕶️ Inicialmente invisible
    setTimeout(() => {
        myStorySection.style.visibility = "visible"; // 👁️ Mostrar cuando todo esté listo
    }, 200); // 🕒 Le damos tiempo para cargar estilos

    // 🎯 Interactividad al hacer clic en "My Story"
    title.addEventListener("click", () => {
        // 🔄 Alternar visibilidad de la descripción
        if (description.style.opacity === "0") {
            description.style.opacity = "1"; // 👁️ Muestra la descripción
            description.style.height = "auto"; // 📐 Ajustar altura automáticamente
        } else {
            description.style.opacity = "0"; // 🕶️ Oculta la descripción
            description.style.height = "0"; // 🔽 Reduce la altura a 0
        }
    });
});