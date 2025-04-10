
// Función para validar si las credenciales son correctas
function isValidUser(username, password) {
    const validUsername = "admin";
    const validPassword = "12345";
    return username === validUsername && password === validPassword;
}

function redirectToProfile() {
    // Redirigirse a profile.html
    window.location = "/profile.html"; 
}

// Función para cargar datos del usuario en el perfil
function loadProfile() {
    const username = localStorage.getItem("loggedInUser");
    if (username) {
        alert(`Bienvenido, ${username}!`);
    } else {
        alert("No hay usuario logueado. Redirigiendo al login...");
        window.location = "../index.html"; // Cambiar por la URL de tu página de login
    }
}

// Ejecutar carga del perfil al cargar la página del perfil
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("profileName")) {
        loadProfile();
    }
});