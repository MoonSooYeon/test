$(document).ready(function(){
    // tooltip();
    // header 영역 스크롤시 스타일 제어
    var sTop = $(document).scrollTop();
    if(sTop >= 1){
        $(".header").addClass("on");
    }
    $(window).scroll(function(){
        var sTop = $(document).scrollTop();

        if(sTop >= 1){
            $(".header").addClass("on");
        } else{
            $(".header").removeClass("on");
        }
    });

    // 모바일 header영역 메뉴 on/off
    $('.header .btn-menu').click(function(){
        $('.header .gnb').addClass('on');
        $('.header').append('<div class="dim"></div>');
        bodyHidden();
    });

    $('.header .gnb .btn-close').click(function(){
        $('.header .gnb').removeClass('on');
        $('.header .dim').remove();
        bodyAuto();
    });

    // main 배너
    var mainBanner = new Swiper('.main-banner', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.main-banner .swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        breakpoints:{
            1332:{
                centeredSlides: false,
                pagination: {
                    el: '.main-banner .swiper-pagination',
                    clickable: true,
                    type: "bullets", 
                },
            },
        }
    });

    // main pr 배너
    var prswiper = new Swiper('.pr-banner .swiper-container', {
        spaceBetween: 0,
        slidesPerView: 5,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.pr-banner .swiper-pagination',
            type: 'progressbar',
        },
        loop: true,
        breakpoints:{
            1332:{
                slidesPerView: 'auto',
            }
        }
        
    });

    // 리사이즈시
    $(window).resize(function(){
        var windowWidth = $(window).width();

        if(isHeightChange() == true){
            return;
        }

        // 리사이즈시 메뉴 off
        if(windowWidth < 1332 || windowWidth > 1332){
            $('.header .gnb').removeClass('on');
            $('.header .dim').remove();
            bodyAuto();
        }
    });

    if($(window).width() <= 1332){
        $(document).tooltip({
            items: ".tooltip",
            position: {
                my: "right+90 top+42",
            },
            content: function() {
                var element = $(this);
                if ( element.is( ".tooltip" ) ) {
                    var cont = element.attr('data-tooltip-cont');
                    return cont;
                }
            },
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
            }
        });
    } else if($(window).width() <= 1080){
        $(document).tooltip({
            items: ".tooltip",
            position: {
                my: "right+56 top+20",
            },
            content: function() {
                var element = $(this);
                if ( element.is( ".tooltip" ) ) {
                    var cont = element.attr('data-tooltip-cont');
                    return cont;
                }
            },
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
            }
        });
    } else if($(window).width() <= 640){
        $(document).tooltip({
            items: ".tooltip",
            position: {
                my: "right+30 top+14",
            },
            content: function() {
                var element = $(this);
                if ( element.is( ".tooltip" ) ) {
                    var cont = element.attr('data-tooltip-cont');
                    return cont;
                }
            },
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
            }
        });
    } else{
        $(document).tooltip({
            items: ".tooltip",
            position: {
                my: "right+34 top+9",
            },
            content: function() {
                var element = $(this);
                if ( element.is( ".tooltip" ) ) {
                    var cont = element.attr('data-tooltip-cont');
                    return cont;
                }
            },
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
            }
        });
    }
});

// dim 생성
function dimMaker() {
    $('body').append('<div class="dim"></div>');
    bodyHidden();
}

// dim 제거
function dimRemove() {
    $('.dim').remove();
    bodyAuto();
}

// body scroll hidden
function bodyHidden() {
    $('body').css('overflow', 'hidden');
}

// body scroll auto
function bodyAuto() {
    $('body').css('overflow', '')
}

// 팝업열기
function popOpen(id){
    var id;

    $("#" + id).addClass('on');
}

// 팝업닫기
function popClose(id) {
    var id;

    $("#" + id).removeClass('on');
    dimRemove();
}

// dim 옵션 팝업 열기
function popOpenAndDim(id, isDim){
    popOpen(id);
    
    if(isDim == true){
        dimMaker();
    }
}
function tooltip(){
    $(document).tooltip({
        items: ".tooltip",
        position: {
            my: "right+34 top+9",
        },
        content: function() {
            var element = $(this);
            if ( element.is( ".tooltip" ) ) {
                var cont = element.attr('data-tooltip-cont');
                return cont;
            }
        },
        using: function( position, feedback ) {
            $( this ).css( position );
            $( "<div>" )
                .addClass( "arrow" )
                .addClass( feedback.vertical )
                .addClass( feedback.horizontal )
                .appendTo( this );
        }
    });
}
