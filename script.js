let form = document.querySelector("form");
let email = form.querySelector(".email-field");
let emailtxt = email.querySelector(".email-input");
let email_error = form.querySelector(".email-small");
let pass = form.querySelector(".create-password-field");
let passtxt = pass.querySelector(".pass-input");
let pass_error = form.querySelector(".create-small");
let cpass = form.querySelector(".confirm-password-field");
let cpasstxt = cpass.querySelector(".cpass-input");
let cpass_error = form.querySelector(".confirm-small");
const user = passtxt.value;
const cuser = cpasstxt.value;

function checkEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailtxt.value.match(emailPattern)) {
        email_error.style.display = "none";
    } else {
        email.style.borderColor = "red";
        email_error.style.display = "inline";
    };
}

function checkPassword() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passtxt.value.match(passPattern)) {
        pass_error.style.display = "none";
    } else {
        pass_error.style.display = "inline";
        pass.style.borderColor = "red";
    };
}

function hideIcons() {
    let hide = document.querySelectorAll(".fa-eye-slash")
    hide.forEach((icon) => {
        icon.addEventListener("click", function () {
            let input = icon.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
            icon.classList.toggle("fa-eye-slash");
            icon.classList.toggle("fa-eye");
        })
    })

}

function checkConfirm() {
    if (user.match(cuser) && cuser !== "") {
        cpass_error.style.display = "none";
    } else {
        cpass_error.style.display = "inline";
        cpass.style.borderColor = "red";
    }

}

hideIcons();
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkEmail();
    emailtxt.addEventListener("keypress", checkEmail);
    checkPassword();
    passtxt.addEventListener("keypress", checkPassword);
    checkConfirm();
    cpasstxt.addEventListener("keypress", checkConfirm);
})