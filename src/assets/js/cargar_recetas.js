document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subirReceta').addEventListener('click', function () {
        console.log('El botón "Subir Receta" fue presionado.');

        const nombre = document.getElementById('nombre').value;
        const tipo = document.getElementById('tipo').value;
        const tiempoCoccion = document.getElementById('tiempo_coccion').value;
        const tiempoPreparacion = document.getElementById('tiempo_preparacion').value;
        const ingredientes = document.getElementById('ingredientes').value;
        const preparacion = document.getElementById('preparacion').value;
        const imagenInput = document.getElementById('imagen').files[0];

        if (!imagenInput) {
            alert('Por favor, selecciona una imagen para la receta.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const receta = {
                id: Date.now(),
                nombre,
                tipo,
                tiempoTotal: parseInt(tiempoCoccion) + parseInt(tiempoPreparacion),
                ingredientes,
                preparacion,
                imagen: event.target.result
            };

            const recetasGuardadas = JSON.parse(localStorage.getItem('recetas')) || [];
            recetasGuardadas.push(receta);
            localStorage.setItem('recetas', JSON.stringify(recetasGuardadas));

            alert('Receta subida con éxito!');
            document.getElementById('formReceta').reset();
        };

        reader.readAsDataURL(imagenInput);
    });

    const btnListadoRecetas = document.getElementById('btnListadoRecetas');
    if (btnListadoRecetas) {
        btnListadoRecetas.addEventListener('click', () => {
            console.log('Redirigiendo al listado...');
            window.location.href = '../../views/admin_views/listado_recetas.html';
        });
    } else {
        console.error('El botón "Volver al listado" no se encontró en el DOM.');
    }
});
