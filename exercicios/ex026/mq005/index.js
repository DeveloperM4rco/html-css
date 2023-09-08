const btn = document.querySelector(".fa-bars");
const menu = document.querySelector("menu");

btn.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
});