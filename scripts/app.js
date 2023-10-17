const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const socials = document.querySelector('.socials');
const author = document.querySelector('.author');


function openMenu() {
    socials.style.display = 'flex';
    author.style.display = 'none';
}

function closeMenu() {
    socials.style.display = 'none';
    author.style.display = 'flex';
}

openMenuBtn.addEventListener('click', openMenu);

closeMenuBtn.addEventListener('click', closeMenu);