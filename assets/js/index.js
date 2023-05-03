const buttonOpen = document.querySelector('[data-toggle="open"]');
const buttonClose = document.querySelector('[data-toggle="close"]');
const overlayEl = document.querySelector('.nav__overlay');
const menuEl = document.querySelector('.nav__menu');

const toggleMenu = () => {
    menuEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    document.body.classList.toggle('scroll-false');
}

buttonOpen.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", toggleMenu);
overlayEl.addEventListener("click", toggleMenu);

window.addEventListener('resize', () => {
    if(this.innerWidth >= 1024)
    if(menuEl.classList.contains('active')) toggleMenu()
})