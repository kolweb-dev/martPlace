$(function () {
    $('.weekly__inner').slick({
        nextArrow: '<button class="weekly-btn weekly-prev"><img src="images/icons/weekly-left.png" alt="next arrow"></button> ',
        prevArrow: '<button class="weekly-btn weekly-next"><img src="images/icons/weekly-right.png" alt="prev arrow"></button> ',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true,
        cssEase: 'linear',


    });
    var mixer = mixitup('.products__inner-box');

});