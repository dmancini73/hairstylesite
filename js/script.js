// script.js

const menu = document.querySelector('nav ul');
const menuItems = menu.querySelectorAll('li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});
