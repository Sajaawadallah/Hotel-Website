//  invoke animation function  
new WOW().init();

// slider for clints opinin 

var swiper = new Swiper(".mySwiper", {
    // autoplay: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 2000,
    // autoplay: {
    //     delay: 0,
    //     // disableOnInteraction: false,
    //     // reverseDirection: true,
    //     // pauseOnMouseEnter: true,
    //     // pauseOnMouseLeave: true,
    //     // waitForTransition: true,

    // },
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
    loop: true,

    breakpoints: {

        773: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },


});

swiper.el.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
});

swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
});

