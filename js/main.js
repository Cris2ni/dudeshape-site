const swiper = new Swiper('.comments__slider', {
  loop: true,
});

document.querySelectorAll('.swiper__button-prev').forEach((button) => {
  button.addEventListener('click', () => swiper.slidePrev());
});

document.querySelectorAll('.swiper__button-next').forEach((button) => {
  button.addEventListener('click', () => swiper.slideNext());
});

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__btn');
const menuLinks = document.querySelectorAll('.menu__link');

function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', isOpen);
});

menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});
