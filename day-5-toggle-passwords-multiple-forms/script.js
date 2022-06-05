const toggle = Array.prototype.slice.call(document.querySelectorAll('[name=show-passwords]'));


window.addEventListener('click', function(event) {
    if(event.target.matches('[name=show-passwords]')) {
        const inputs = document.querySelectorAll('[name="password"]')

        console.log(inputs)
    }
})
