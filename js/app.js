// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.Hero-swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

