
const createAccount = document.querySelector(".register-link");
const signIn = document.querySelector(".sign-in");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");


createAccount.addEventListener("click", event => {
    event.preventDefault();
    loginForm.style.transition = "0s";
    loginForm.style.opacity = "0";
    registerForm.style.transform = "translate(-50%, -50%)";
    registerForm.style.opacity = "1";
});

signIn.addEventListener("click", event => {
    event.preventDefault();
    loginForm.style.transition = "3s";
    loginForm.style.opacity = "1";
    registerForm.style.transform = "translate(-50%, 50%)";
    registerForm.style.opacity = "0";
});

