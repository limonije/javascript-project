const hamburger = document.querySelector('.btn-toggle-nav');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const menuGrey = document.querySelector('.grey');
const menuRed = document.querySelector('.red');
const menuOrange = document.querySelector('.orange');
const menuPurple = document.querySelector('.purple');
const menuGreen = document.querySelector('.green');
const navSidebar = document.querySelector('.nav-sidebar');

// function toggleMenu() {
//     if(menu.classList.contains('showMenu')) {
//     menu.classList.remove('showMenu');
// } else {
//     menu.classList.add('showMenu');
// }
// }

function hoverMenuOpen() {
    menu.classList.add('showMenu'); 
}

function hoverMenuClose() {
    menu.classList.remove('showMenu'); 
}

//hamburger.addEventListener('click', toggleMenu)
hamburger.addEventListener('mouseover', hoverMenuOpen);
navSidebar.addEventListener('mouseleave', hoverMenuClose);


// menuItems.forEach(function(menuItem) {
//     menuItem.addEventListener('click', toggleMenu)
// }
// )

menuGrey.addEventListener('click', bodyGrey);

function bodyGrey() {
    body.removeAttribute('class');
    body.classList.add('grey-background');
    let color = document.querySelector('input[name = "colors"]:checked').value;
    document.getElementById('output').innerHTML = color;
    menu.classList.remove('showMenu'); 
}

menuRed.addEventListener('click', bodyRed);

function bodyRed() {
    body.removeAttribute('class');
    body.classList.add('red-background');
    let color = document.querySelector('input[name = "colors"]:checked').value;
    document.getElementById('output').innerHTML = color;
    menu.classList.remove('showMenu'); 
}

menuOrange.addEventListener('click', bodyOrange);

function bodyOrange() {
    body.removeAttribute('class');
    body.classList.add('orange-background');
    let color = document.querySelector('input[name = "colors"]:checked').value;
    document.getElementById('output').innerHTML = color;  
    menu.classList.remove('showMenu');   
}

menuPurple.addEventListener('click', bodyPurple);

function bodyPurple() {
    body.removeAttribute('class');
    body.classList.add('purple-background');
    let color = document.querySelector('input[name = "colors"]:checked').value;
    document.getElementById('output').innerHTML = color;
    menu.classList.remove('showMenu'); 
}

menuGreen.addEventListener('click', bodyGreen);

function bodyGreen() {
    body.removeAttribute('class');
    body.classList.add('green-background');
    let color = document.querySelector('input[name = "colors"]:checked').value;
    document.getElementById('output').innerHTML = color;
    menu.classList.remove('showMenu'); 
}

document.addEventListener('keypress', (event) => {
    let name = event.key;
    if (name == 1) {
        body.removeAttribute('class');
        body.classList.add('grey-background');
        document.getElementById('output').innerHTML = 'grey';
    } else if (name == 2) {
        body.removeAttribute('class');
        body.classList.add('red-background');
        document.getElementById('output').innerHTML = 'red';
    } else if (name == 3) {
        body.removeAttribute('class');
        body.classList.add('orange-background');
        document.getElementById('output').innerHTML = 'orange';
    }  else if (name == 4) {
        body.removeAttribute('class');
        body.classList.add('purple-background');
        document.getElementById('output').innerHTML = 'purple';
    }  else if (name == 5) {
        body.removeAttribute('class');
        body.classList.add('green-background');
        document.getElementById('output').innerHTML = 'green';
    }  else {
        body.removeAttribute('class');
        body.classList.add('grey-background');
        document.getElementById('output').innerHTML = 'grey';
    }
})
