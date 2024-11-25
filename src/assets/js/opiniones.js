document.addEventListener('DOMContentLoaded', function () {
    const opinionForm = document.querySelector('form');
    const opinionList = document.getElementById('opinionList');

    console.log(opinionForm);
    console.log(opinionList);

    if(!opinionForm || !opinionList){
        console.error('No se encontraron elementos');
        return;
    }

    opinionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const comentario = document.getElementById('comentario').value.trim();
        const valoracion = parseInt(document.getElementById('valoracion').value);

        if (comentario && valoracion) {
            const opiniones = JSON.parse(localStorage.getItem('opiniones')) || [];
            opiniones.push({ comentario, valoracion });
            localStorage.setItem('opiniones', JSON.stringify(opiniones));

            opinionForm.reset();
            loadOpinion();
        } else {
            alert('Por favor, completa todos los campos antes de enviar.');
        }
    });

    function loadOpinion() {
        opinionList.innerHTML = '';
        const opiniones = JSON.parse(localStorage.getItem('opiniones')) || [];

        opiniones.forEach((opinion) => {
            const opinionItem = document.createElement('div');
            opinionItem.classList.add('list-group-item');
            opinionItem.innerHTML = `
                <p><strong>Comentario:</strong> ${opinion.comentario}</p>
                <p><strong>Valoración:</strong> ${opinion.valoracion}/10</p>
            `;
            opinionList.appendChild(opinionItem);
        });
    }

    loadOpinion();
});
