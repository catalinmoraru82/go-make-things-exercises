const passwordInput = document.getElementById('password');
const showPassword = document.getElementById('show-password');

function toggleVisibility() {

    if(showPassword.checked) {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
}

showPassword.addEventListener('click', toggleVisibility);