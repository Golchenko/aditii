$(document).ready(function () {
    $(".header-top__burger").click(function (event) {
        $(".header-top__burger,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});


$(document).ready(function () {
    $(".first-column").click(function (event) {
        $(".first-column,.first-list").toggleClass("visible");        
        });
        $(".second-column").click(function (event) {
            $(".second-column,.second-list").toggleClass("visible");
        });
        $(".third-column").click(function (event) {
            $(".third-column,.third-list").toggleClass("visible");
        });
        $(".fourth-column").click(function (event) {
            $(".fourth-column,.fourth-list").toggleClass("visible");
        });
    });
