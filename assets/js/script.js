new WOW().init();

$(window).on("scroll", function () {
    var e = $(window).scrollTop();
    e > 600 && $(".go-top").addClass("active"), e < 600 && $(".go-top").removeClass("active");
}),
$(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
});