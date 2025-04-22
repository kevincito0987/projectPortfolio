import './listas.js';

console.log("Certificaciones");

const icons = document.querySelectorAll('.empresasCertificadoras img');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Encuentra el contenedor del ícono
        const parent = icon.parentElement;

        // Verifica si ya existe una lista asociada al ícono
        let list = parent.querySelector('certification-list');

        if (list) {
            // Alterna la visibilidad si ya existe la lista
            list.style.display = list.style.display === 'none' ? 'block' : 'none';
            return;
        }

        // Crea una nueva lista si no existe
        list = document.createElement('certification-list');
        list.setAttribute('items', icon.getAttribute('data-items')); // Pasa los datos dinámicos
        parent.appendChild(list); // Inserta la lista directamente debajo del ícono
    });
});
