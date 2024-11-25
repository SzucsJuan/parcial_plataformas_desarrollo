document.addEventListener('DOMContentLoaded', function() {
    let recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    const recetasContainer = document.querySelector('.recetas-container');
    
    if (recetas.length > 0) {
        console.log('Recetas en localStorage:', recetas);
        
        recetas.forEach(function(receta) {
            if (typeof receta.ingredientes === 'string') {
                receta.ingredientes = receta.ingredientes.split(',');
            }
            const recetaElement = document.createElement('div');
            recetaElement.classList.add('col-md-4', 'mb-4');

            recetaElement.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${receta.nombre}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Tipo: ${receta.tipo}</h6>
                        <p class="card-text"><strong>Ingredientes:</strong></p>
                        <ul class="list-group list-group-flush">
                            ${receta.ingredientes.map(ingrediente => `<li class="list-group-item">${ingrediente}</li>`).join('')}
                        </ul>
                        <p class="card-text mt-2"><strong>Tiempo:</strong> ${receta.tiempoTotal} minutos</p>
                        <p class="card-text"><strong>Preparación:</strong> ${receta.preparacion}</p>
                    </div>
                </div>
            `;

            recetasContainer.appendChild(recetaElement);
        });
    } else {
        console.log('No hay recetas en localStorage');
        recetasContainer.innerHTML = `
            <p class="text-center">No hay recetas disponibles. ¡Agrega una nueva receta!</p>
        `;
    }
});
