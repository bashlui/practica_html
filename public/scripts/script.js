const botton = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Función para validar credenciales del usuario
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Valida las credenciales con datos de ejemplo
    if (isValidUser(username, password)) {
        alert("Login exitoso, redirigiendo...");
        redirectToProfile(); // Redirige al perfil desde profile.js
    } else {
        alert("Error: Usuario o contraseña incorrectos.");
    }
}

// Agregar evento al botón de login
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("btnLogin");
    if (loginButton) {
        loginButton.addEventListener("click", validateLogin);
    }
});