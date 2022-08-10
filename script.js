const hamburger = document.querySelector('.btn-toggle-nav');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const menuGrey = document.querySelector('.grey');
const menuRed = document.querySelector('.red');
const menuOrange = document.querySelector('.orange');
const menuPurple = document.querySelector('.purple');
const menuGreen = document.querySelector('.green');

function toggleMenu() {
    if(menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
} else {
    menu.classList.add('showMenu');
}
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', toggleMenu)
}
)

menuGrey.addEventListener('click', bodyGrey);

function bodyGrey() {
    body.removeAttribute('class');
    body.classList.add('grey-background');
}

menuRed.addEventListener('click', bodyRed);

function bodyRed() {
    body.removeAttribute('class');
    body.classList.add('red-background');
}

menuOrange.addEventListener('click', bodyOrange);

function bodyOrange() {
    body.removeAttribute('class');
    body.classList.add('orange-background');
    
}

menuPurple.addEventListener('click', bodyPurple);

function bodyPurple() {
    body.removeAttribute('class');
    body.classList.add('purple-background');
    
}

menuGreen.addEventListener('click', bodyGreen);

function bodyGreen() {
    body.removeAttribute('class');
    body.classList.add('green-background');
    
}




