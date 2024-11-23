document.getElementById("register").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var role = document.getElementById("role").value;

    const messageRegister = document.getElementById("message");

    if (password !== confirmPassword) {
        messageRegister.textContent = "Las contraseñas no coinciden.";
        messageRegister.className = "error";
        messageRegister.style.display = "block";
        return;
    }

    const user = {
        username: username,
        password: password,
        role: role
    };

    localStorage.setItem(username, JSON.stringify(user));

    messageRegister.textContent = "Registro exitoso, ya puedes loguearte.";
    messageRegister.className = "success";
    messageRegister.style.display = "block";

    setTimeout(() => {
        window.location.href = "../../../login.html";
    }, 3000);
});
