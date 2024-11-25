document.getElementById('subirReceta').addEventListener('click', function(){
    console.log('El boton fue presionado');
    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const tiempoCoccion = document.getElementById('tiempo_coccion').value;
    const tiempoPreparacion = document.getElementById('tiempo_preparacion').value;
    const ingredientes = document.getElementById('ingredientes').value;
    const preparacion = document.getElementById('preparacion').value;

    const receta ={
        id: Date.now(),
        nombre,
        tipo,
        tiempoTotal: parseInt(tiempoCoccion) + parseInt(tiempoPreparacion),
        ingredientes,
        preparacion
    };
    const recetasGuardadas = JSON.parse(localStorage.getItem('recetas')) || [];

    recetasGuardadas.push(receta);

    localStorage.setItem('recetas', JSON.stringify(recetasGuardadas));
})

document.addEventListener('DOMContentLoaded', () => {
    const btnListadoRecetas = document.getElementById('btnListadoRecetas');

    btnListadoRecetas.addEventListener('click', () =>{
        window.location.href = '../../views/admin_views/listado_recetas.html'
    })
})
