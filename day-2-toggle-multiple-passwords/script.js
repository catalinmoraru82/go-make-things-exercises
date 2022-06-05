const toggle = document.getElementById('show-passwords');

// convert node list into an array: Array.prototypes.slice.call()
const passwords = Array.prototype.slice.call(document.querySelectorAll('[data-password]'));


function togglePasswords() {
    passwords.forEach(function(password) {
        if(toggle.checked) {
            password.type = 'text'
        } else {
            password.type = 'password'
        }
    })
}

toggle.addEventListener('click', togglePasswords);