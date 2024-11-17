document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Las contraseñas no coinciden.");
        return
    }
    const user ={
        username: username,
        password: password,
    };
    localStorage.setItem(username, JSON.stringify(user));
    alert("Registro exitoso, ya podes loguearte.");
    window.location.href = "login.html";
})