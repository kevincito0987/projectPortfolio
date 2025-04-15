console.log("Listas");
class CertificationList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Activa Shadow DOM

        // Define el estilo y la estructura del componente
        this.shadowRoot.innerHTML = `
            <style>
                .list-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-top: 10px;
                }
                .list-item {
                    text-decoration: none;
                    color: white; 
                    background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro */
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-family: Arial, sans-serif;
                }
                .list-item:hover {
                    background-color: rgba(255, 255, 255, 0.2); /* Efecto hover */
                }
            </style>
            <div class="list-container"></div>
        `;
    }

    connectedCallback() {
        const listContainer = this.shadowRoot.querySelector('.list-container');
        const items = JSON.parse(this.getAttribute('items') || '[]');

        // Genera los elementos de la lista
        items.forEach((item, index) => {
            const link = document.createElement('a');
            link.classList.add('list-item');
            link.href = item.url || '#';
            link.textContent = `Elemento ${index + 1}: ${item.name || 'Sin nombre'}`;
            listContainer.appendChild(link);
        });
    }
}

customElements.define('certification-list', CertificationList);