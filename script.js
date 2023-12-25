$(function () {
    const navBar = document.querySelector(".navbar");
    $(".select").niceSelect();
    document.addEventListener("scroll", function (e) {
        let scrollHeight = document.documentElement.scrollTop;
        if (
            document
                .querySelector(".navbar-collapse")
                .classList.contains("show")
        ) {
            navBar.classList.add("index-4");
        } else {
            if (scrollHeight > 30) {
                navBar.classList.add("index-4");
            } else {
                navBar.classList.remove("index-4");
            }
        }
    });
    document.querySelector(".navbar-toggler").addEventListener("click", () => {
        console.log(
            document
                .querySelector(".navbar-collapse")
                .classList.contains("show")
        );
        // if(document.querySelector('.navbar-collapse').classList.contains('show')) {
        navBar.classList.add("index-4");
        // }
    });
    var TrandingSlider = new Swiper(".images-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const dsdsd = new Swiper(".videos-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
