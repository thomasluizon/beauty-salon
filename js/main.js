const drawer = document.querySelector('[data-menu]');
const drawerToggleBtns = document.querySelectorAll('.toggle');
const drawerItems = document.querySelectorAll('.menu__item');
const header = document.querySelector('.header');
const navHeight = header.offsetHeight;

drawerToggleBtns.forEach(btn =>
   btn.addEventListener('click', () => {
      drawer.classList.toggle('show');
   })
);

drawerItems.forEach(item =>
   item.addEventListener('click', () => {
      drawer.classList.remove('show');
   })
);

window.addEventListener('scroll', () => {
   if (window.scrollY >= navHeight) {
      header.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
   }
});

// Swiper

const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
   },
   keyboard: true,
});
