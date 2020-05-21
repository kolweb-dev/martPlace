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
    $('.followers-inner').slick({
        nextArrow: '<button class="followers-btn followers-prev"><img src="images/icons/weekly-left.png" alt="next arrow"></button> ',
        prevArrow: '<button class="followers-btn followers-next"><img src="images/icons/weekly-right.png" alt="prev arrow"></button> ',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000


    });


    var mixer = mixitup('.products__inner-box');

});