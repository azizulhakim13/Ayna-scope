$(function () {
    var e, t;
    new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: !0,
        breakpoints: {
            280: { slidesPerView: 1, spaceBetween: 15 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1e3: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
        },
        keyboard: { enabled: !0 },
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    }),
        $(window).on("scroll", function () {
            var e = $(window).scrollTop();
            e > 600 && $(".go-top").addClass("active"), e < 600 && $(".go-top").removeClass("active");
        }),
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
})
    // document.addEventListener("DOMContentLoaded", function () {
    //     window.addEventListener("scroll", function () {
    //         window.scrollY > 50
    //             ? (document.getElementById("navbar_top").classList.add("fixed-top"), (navbar_height = document.querySelector(".navbar").offsetHeight), (document.body.style.paddingTop = navbar_height + "px"))
    //             : (document.getElementById("navbar_top").classList.remove("fixed-top"), (document.body.style.paddingTop = "0"));
    //     });
    // });
