$(document).ready(function(){
    var mainBanner = new Swiper('.main-banner .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                index = (index < 9) ? '0' + (index + 1) : index + 1;
                return '<span class="' + className + '">' + index + '</span>';
            },
        },
        // effect: 'fade',
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
});

// (index < 10) ? index = '0' + index : index = index;
// index = (index < 10) ? '0' + index : index;