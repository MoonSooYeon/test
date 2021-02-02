$(document).ready(function(){
    var mainBanner = new Swiper('.main-banner .swiper-container', {
        navigation: {
            nextEl: '.main-banner .swiper-button-next',
            prevEl: '.main-banner .swiper-button-prev',
        },
        pagination: {
            el: '.main-banner .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                index = (index < 9) ? '0' + (index + 1) : index + 1;
                return '<span class="' + className + '">' + index + '</span>';
            },
        },
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    $(".swiper-button-active").click(function () {
        var play = mainBanner.autoplay;
        (play.running == false) ? play.start() : play.stop();
        $(".swiper-button-active").text( (play.running==false) ? "재생" : "정지" );
        (play.running == false) ? $(this).addClass('btn-play').removeClass('btn-stop') : $(this).addClass('btn-stop').removeClass('btn-play');
    });
 
    var mainOperation = new Swiper('.section-wrap.operation .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
          el: '.section-wrap.operation .swiper-pagination',
          clickable: true,
        },
        loop: true,
        navigation: {
            nextEl: '.section-wrap.operation .swiper-button-next',
            prevEl: '.section-wrap.operation .swiper-button-prev',
        },

        breakpoints:{
            1280:{
                slidesPerView: 2,
            },
            640:{
                slidesPerView: 1,
            },
        }
    });

    var relatedSlide = new Swiper('.section-wrap.related .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.section-wrap.related .swiper-button-next',
            prevEl: '.section-wrap.related .swiper-button-prev',
        },
    });

    var datapickerModul = $( ".datepicker" ).datepicker({
        dateFormat: "yy-mm-dd"
    });

    $('.btn-date-reset').on('click', function () {
        datapickerModul.datepicker('setDate', null);
    });

    $('.total-search-box .total-search .btn-option-toggle').click(function(){
        $('.option-wrap').slideToggle();
        $(this).toggleClass('on');
    });
});
