document.addEventListener("DOMContentLoaded", function() {
    fetch("data/oficinas.json")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".oficinas-container");
            container.innerHTML = ""; // Limpiar contenido previo

            Object.keys(data).forEach(lugar => {
                const oficina = data[lugar];
                const oficinaDiv = document.createElement("div");
                oficinaDiv.classList.add("oficina");

                oficinaDiv.innerHTML = `
                    <div class="sede">${lugar.charAt(0).toUpperCase() + lugar.slice(1)}</div>
                    <div class="oficinas-direccion"> ${oficina.direccion}</div>
                    <div class="oficinas-email"> ${oficina.email}</div>
                    <div class="oficinas-telefono"><strong>Teléfono:</strong> ${oficina.telefono}</div>
                `;

                container.appendChild(oficinaDiv);
            });
        })
        .catch(error => console.error("Error cargando los datos:", error));
});