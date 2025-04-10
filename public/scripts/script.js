const botton = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {
    console.log(username.value + " " + password.value);

    sessionStorage.name = "Toño";
    window.location = "./tags.html";
};

botton.addEventListener("click", login);    