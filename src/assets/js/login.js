document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const messageLogin = document.getElementById("message");

    var user = localStorage.getItem(username);
    if (user) {
        var parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
            localStorage.setItem("user", JSON.stringify(parsedUser));
            
            if (parsedUser.role === "admin") {
                window.location.href = "src/views/home.html";
            } else {
                window.location.href = "src/views/home.html";
            }
        } else {
            messageLogin.textContent = "El usuario o la contraseña son incorrectos.";
            messageLogin.className = "error";
            messageLogin.style.display = "block";
        }
    } else {
        messageLogin.textContent = "Usuario no encontrado.";
        messageLogin.className = "error";
        messageLogin.style.display = "block";
    }
});
