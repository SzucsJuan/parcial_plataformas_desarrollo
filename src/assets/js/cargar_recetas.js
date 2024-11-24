document.querySelector('a[href="cargar_recetas.html"]').addEventListener('click', function (e) {
    e.preventDefault();

    fetch('admin_views/cargar_recetas.html')
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar el archivo');
            return response.text();
        })
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            const modalElement = tempDiv.querySelector('#cargarRecetasModal');
            
            if (modalElement) {
                document.body.appendChild(modalElement);
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            } else {
                console.error('No se encontró el modal en el archivo cargado.');
            }
        })
        .catch(error => console.error('Error cargando el modal:', error));
});
