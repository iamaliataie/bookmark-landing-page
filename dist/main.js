const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
    menu.classList.toggle('hidden');
});