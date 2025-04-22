console.log("Listas");

// 📌 Creación del componente personalizado `CertificationList`
class CertificationList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // 🛡️ Activa Shadow DOM para encapsulación

        // 🎨 Define el estilo y la estructura del componente
        this.shadowRoot.innerHTML = `
            <style>
                .list-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-top: 10px;
                    width: 200px;
                }
                .list-item {
                    text-decoration: none;
                    color: var(--color-1);
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-family: "Inter-Bold";
                    font-size: 16px;
                }
                .list-item:hover {
                    background-color: var(--color-10); /* 🎨 Efecto hover */
                }
            </style>
            <div class="list-container"></div>
        `;
    }

    connectedCallback() {
        const listContainer = this.shadowRoot.querySelector('.list-container');
        const items = JSON.parse(this.getAttribute('items') || '[]'); // 📦 Obtiene los elementos dinámicos

        // 🔄 Genera los elementos de la lista con enlaces a certificados
        items.forEach((item, index) => {
            const link = document.createElement('a');
            link.classList.add('list-item');
            link.href = item.url || '#';
            link.target = "_blank"; // 🔗 Abre la URL en una nueva pestaña
            link.textContent = `Certificado ${index + 1}: ${item.name || 'Sin nombre'}`;
            listContainer.appendChild(link); // 🔗 Añade cada elemento a la lista
        });
    }
}

// 🔗 Registra el componente web personalizado
customElements.define('certification-list', CertificationList);
