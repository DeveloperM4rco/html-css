const body = document.body;
const btn = document.querySelector(".fa-bars");
const menu = document.querySelector("menu");

btn.addEventListener('click', () => menu.classList.toggle('open'));
body.addEventListener('resize', () => {
    if (window.innerWidth >= 812) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});