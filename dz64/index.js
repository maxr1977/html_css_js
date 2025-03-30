const navMenu = document.getElementById('navMenu');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

const toggleMenu = () => {
    navMenu.classList.toggle('nav-menu--open');
};

openButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

document.body.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-menu--open')) {
        navMenu.classList.remove('nav-menu--open');
    }
});

document.querySelectorAll('.has-submenu').forEach((item, index) => {
    const submenu = item.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
        const subitems = submenu.querySelectorAll('.submenu__item');
        subitems.forEach((subitem, subIndex) => {
            subitem.textContent = `${index + 1}.${subIndex + 1} ${subitem.textContent}`;
        });

        item.addEventListener('click', (e) => {
            e.stopPropagation();
            submenu.classList.toggle('submenu--open');
        });
    }
});