$(function () {
    $(document).scroll(function () {
        var $navbar = $("#navbar");
        $navbar.toggleClass("fixed", $(this).scrollTop() > 50);
    })
});