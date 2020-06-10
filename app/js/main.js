$(function () {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"

    });


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
        prevArrow: '<button class="followers-btn followers-prev"><img src="images/icons/weekly-left.png" alt="next arrow"></button> ',
        nextArrow: '<button class="followers-btn followers-next"><img src="images/icons/weekly-right.png" alt="prev arrow"></button> ',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000


    });


    $(".rate-start").rateYo({
        rating: 4.5,
        starWidth: "13px",
        readOnly: true
    });

    $('.icon-th-list').on('click', function () {
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th').removeClass('active');
    });
    $('.icon-th').on('click', function () {
        $('.product__item').removeClass('list');
        $('.icon-th').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('.single-product__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });



    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.header__user-left').on('click', function () {
        $('.header__box').toggleClass('active');
        $('.header__user-left').toggleClass('translate');
    });














    var mixer = mixitup('.products__inner-box');


});