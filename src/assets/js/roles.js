// Obtener los elementos del DOM
const profileIcon = document.getElementById("profileIcon");
const roleModal = document.getElementById("roleModal");
const adminOptions = document.getElementById("adminOptions");
const userOptions = document.getElementById("userOptions");

// Función para abrir el modal y mostrar las opciones según el rol
profileIcon.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir la acción por defecto del enlace

    // Mostrar el modal
    roleModal.style.display = "block";

    // Obtener el rol del usuario desde localStorage
    const role = localStorage.getItem("role"); // Obtenemos el rol directamente de localStorage

    if (role === "admin") {
        adminOptions.classList.remove("hidden"); // Mostrar las opciones del admin
        userOptions.classList.add("hidden");     // Ocultar las opciones del usuario
    } else if (role === "user") {
        userOptions.classList.remove("hidden");  // Mostrar las opciones del usuario
        adminOptions.classList.add("hidden");    // Ocultar las opciones del admin
    }
});

// Función para cerrar el modal
function closeModal() {
    roleModal.style.display = "none";
}

// Función para manejar las acciones de los botones
function handleAction(action) {
    console.log(`Acción seleccionada: ${action}`);

    if (action === "cerrarSesion") {
        localStorage.removeItem("role"); // Eliminar el rol al cerrar sesión
        window.location.href = "../../login.html"; // Redirigir al login
    } else {
        console.log(`Acción específica: ${action}`);
    }

    closeModal();
}
