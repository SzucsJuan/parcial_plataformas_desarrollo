document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('table tbody');
    const recetas = JSON.parse(localStorage.getItem('recetas')) || [];


    if (recetas.length === 0) {
    const noDataRow = document.createElement('tr');
    noDataRow.innerHTML = `<td colspan="5" class="text-center">No hay recetas disponibles.</td>`;
    tbody.appendChild(noDataRow);
    return;
    }
    recetas.forEach((receta) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="hidden">${receta.id}</td>
            <td>${receta.nombre}</td>
            <td>${receta.tipo}</td>
            <td>${receta.tiempoTotal} minutos</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="eliminarReceta(${receta.id})">Eliminar</button>
         </td>
        `;
        tbody.appendChild(row);
    });
});


function eliminarReceta(id) {
    let recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    recetas = recetas.filter((receta) => receta.id !== id);
    localStorage.setItem('recetas', JSON.stringify(recetas));
    location.reload();
}