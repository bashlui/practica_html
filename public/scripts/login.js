const button = document.getElementById("btnLogin");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const login = () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate credentials
    if (username === "admin" && password === "12345") {
        alert("Inicio de sesión exitoso. Redirigiendo...");
        window.location.href = "./profile.html"; 
    } else {
        alert("Error: Credenciales incorrectas.");
    }
};


button.addEventListener("click", login);