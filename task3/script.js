const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 2.9,
  spaceBetween: 8,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.05,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

swiper.on("slideChange", function () {
  console.log("Active slide index:", swiper.activeIndex);
});
