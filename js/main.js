//  invoke animation function  
new WOW().init();



// slider for clints opinin 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 2000,
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




// slider for our clints  


var swiper1 = new Swiper(".mySwiper1", {
    autoplay: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    speed: 2000,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 0,

    },
    loop: true,
    breakpoints: {

        575: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },



});
