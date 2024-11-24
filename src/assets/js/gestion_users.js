function renderUsers() {
    const userTableBody = document.getElementById("userTableBody");
    userTableBody.innerHTML = "";

    Object.keys(localStorage).forEach((key) => {
        if (key !== "user" && key !== "role") { 
            const user = JSON.parse(localStorage.getItem(key));
            if (user && user.username) {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${user.username}</td>
                    <td>${user.password}</td>
                    <td>${user.role || "N/A"}</td>
                    <td>
                        <button class="btn btn-sm btn-warning" onclick="editUser('${user.username}')">Editar</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteUser('${user.username}')">Eliminar</button>
                    </td>
                `;

                userTableBody.appendChild(row);
            }
        }
    });
}

function editUser(username) {
    const user = JSON.parse(localStorage.getItem(username));
    if (user) {
        const newUsername = prompt("Editar nombre de usuario:", user.username);
        const newPassword = prompt("Editar contraseña:", user.password);
        const newRole = prompt("Editar rol:", user.role || "user");

        if (newUsername && newPassword && newRole) {
            localStorage.removeItem(username);
            const updatedUser = {
                username: newUsername,
                password: newPassword,
                role: newRole,
            };
            localStorage.setItem(newUsername, JSON.stringify(updatedUser));
            alert("Usuario actualizado correctamente.");
            renderUsers();
        } else {
            alert("Todos los campos son obligatorios.");
        }
    } else {
        alert("Usuario no encontrado.");
    }
}

function deleteUser(username) {
    if (confirm(`¿Estás seguro de que deseas eliminar el usuario "${username}"?`)) {
        localStorage.removeItem(username);
        alert("Usuario eliminado correctamente.");
        renderUsers();
    }
}

document.addEventListener("DOMContentLoaded", renderUsers);