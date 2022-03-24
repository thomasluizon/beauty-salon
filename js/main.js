const drawer = document.querySelector('[data-menu]');
const drawerToggleBtns = document.querySelectorAll('.toggle');
const drawerItems = document.querySelectorAll('.menu__item');
const header = document.querySelector('.header');
const navHeight = header.offsetHeight;
const backToTopBtn = document.querySelector('.back-to-top');

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

function changeHeaderWhenScrolling() {
   if (window.scrollY >= navHeight) {
      header.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
   }
}
// Swiper

const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
   },
   keyboard: true,
   breakpoints: {
      767: {
         slidesPerView: 2,
         setWrapperSize: true,
      },
   },
});

// back to top btn

function backToTop() {
   if (window.scrollY >= 560) {
      backToTopBtn.classList.add('show');
   } else {
      backToTopBtn.classList.remove('show');
   }
}

// When scrolling

window.addEventListener('scroll', function () {
   changeHeaderWhenScrolling();
   backToTop();
});
