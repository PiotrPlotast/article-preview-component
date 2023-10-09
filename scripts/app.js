const button = document.querySelector('.share-btn');
const socials = document.querySelector('.socials');
const author = document.querySelector('.author');

button.addEventListener('click', () => {
    if (socials.style.display === 'none') {
        socials.style.display = 'flex';
        author.style.display = 'none';
    } else {
        socials.style.display = 'none';
        author.style.display = 'flex';
    }
});
