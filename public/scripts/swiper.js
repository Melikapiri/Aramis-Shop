let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,

    breakpoints: {

        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});