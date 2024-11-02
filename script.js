let menu = document.querySelector(".menu")
let nav = document.querySelector('.navegaçao')
let body = document.querySelector('body')

function menuShow() {
    if (nav.style.display == 'none'){
        nav.style.display = 'block'
        body.style.overflowY = 'hidden'
    }else {
        nav.style.display = 'none'
        body.style.overflowY = 'auto'
    }
}

function fecharAba() {
    nav.style.display = 'none'
    body.style.overflowY = 'auto'
}