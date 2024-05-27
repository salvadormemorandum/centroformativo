// Comportamiento del despliegue del menú principal en móvil y tablet

const btnMenu = document.querySelector('.menu-btn');

function toggleMenu() {
    const menu = document.querySelector('.menu-principal_dinamico');
    menu.classList.toggle('active');
    btnMenu.classList.toggle('active');
}

btnMenu && btnMenu.addEventListener('click', toggleMenu);