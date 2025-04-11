window.onload = () => {
    const username = localStorage.getItem("username");
    if (!username) {
        alert("No tienes acceso a esta página. Por favor, inicia sesión primero.");
        if (!window.location.href.includes("index.html")) {
            window.location.href = "./index.html";
        }
    }
};
