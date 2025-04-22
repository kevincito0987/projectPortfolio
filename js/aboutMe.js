console.log("About me función");

document.addEventListener("DOMContentLoaded", () => {
    const myStorySection = document.querySelector(".firstPart .descWork21");

    // 🎨 Configuración inicial de la caja y textos
    myStorySection.style.display = "flex";
    myStorySection.style.flexDirection = "column";
    myStorySection.style.justifyContent = "flex-end"; // 📌 Posicionar abajo desde el inicio
    myStorySection.style.padding = "10px";
    myStorySection.style.backgroundColor = "rgba(60, 57, 101, 0.1)";
    myStorySection.style.borderRadius = "4px"; // Bordes redondeados
    myStorySection.style.boxSizing = "border-box";
    myStorySection.style.height = "auto";
    myStorySection.style.transition = "all 0.3s ease"; // ✨ Transición suave

    const title = myStorySection.querySelector("p:nth-child(2)"); // Selecciona "My Story"
    title.style.fontSize = "40px"; // 🔤 Tamaño inicial de fuente
    title.style.fontFamily = "Inter-Bold"; // Fuente inicial
    title.style.marginBottom = "10px"; // Espaciado hacia abajo

    // 📝 Crear la descripción y mantenerla oculta inicialmente
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = `
        As a Frontend Developer, I am passionate about technology and thoroughly enjoy writing code.
        Throughout my career, I have had the opportunity to work on a variety of different projects,
        which has helped me to grow my skill set and refine my abilities. Currently, if you're interested 
        in discussing how we can work together to build innovative solutions, please don't hesitate to get in touch!
    `;
    description.style.fontSize = "12px"; // 🔤 Fuente pequeña para la descripción
    description.style.lineHeight = "1.5"; // Espaciado entre líneas
    description.style.textAlign = "justify"; // Alineación
    description.style.overflow = "hidden"; // Evitar desbordamiento
    description.style.opacity = "0"; // 🕶️ Invisible inicialmente
    description.style.height = "0"; // 🔽 Altura inicial 0
    description.style.transition = "opacity 0.3s ease, height 0.3s ease"; // 🎨 Transición de visibilidad y altura
    myStorySection.appendChild(description); // Añade la descripción

    // ⏳ Esconder inicialmente para evitar parpadeos
    myStorySection.style.visibility = "hidden"; 
    setTimeout(() => {
        myStorySection.style.visibility = "visible"; // Mostrar todo cuando esté listo
    }, 200); // 🕒 Le damos tiempo para cargar estilos

    // 🎯 Comportamiento dinámico al hacer clic
    title.addEventListener("click", () => {
        if (description.style.opacity === "0") {
            // 🎨 Mostrar descripción
            description.style.opacity = "1"; // Aparece
            description.style.height = "auto"; // Ajustar altura automáticamente
        } else {
            // 🔄 Ocultar descripción
            description.style.opacity = "0"; // Desaparece
            description.style.height = "0"; // Regresa a altura 0
        }
    });
});

