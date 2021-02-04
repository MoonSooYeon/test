$(document).ready(function(){
    /* 메인 > 비쥬얼 배너 */
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

    /* 메인 > 운영 과정 더보기 스와이퍼 */
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
                slidesPerView: 3,
            },
            960:{
                slidesPerView: 2,
            },
            820:{
                slidesPerView: 1,
            },
        }
    });

    /* 메인 > 연관 기업 스와이퍼 */
    var relatedSlide = new Swiper('.section-wrap.related .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.section-wrap.related .swiper-button-next',
            prevEl: '.section-wrap.related .swiper-button-prev',
        },
    });

    /* 통합검색 > 상세검색 > 달력 날짜 선택 */
    var datapickerModul = $( ".datepicker" ).datepicker({
        dateFormat: "yy-mm-dd"
    });

    /* 통합검색 > 상세검색 > 달력 날짜 초기화 */
    $('.btn-date-reset').on('click', function () {
        datapickerModul.datepicker('setDate', null);
    });

    /* 통합검색 > 상세검색 토글 */
    $('.total-search-box .total-search .btn-option-toggle').click(function(){
        $('.option-wrap').slideToggle();
        $(this).toggleClass('on');
    });

    /* 헤더 > 메뉴 열기 */
    $('#header .gnb-wrap .btn-menu').click(function(){
        menuOpen();
    });

    /* 헤더 > 메뉴 닫기 */
    $('#header .gnb-wrap #gnb .gnb-head .btn-close').click(function(){
        menuClose();
    });

    $('#header .gnb-wrap .container > .btn-search').click(function(){
        $('#header .gnb-wrap .total-search').addClass('on');
        dimMaker();
        bodyHidden();
    })

    $('#header .gnb-wrap .total-search .btn-close').click(function(){
        $('#header .gnb-wrap .total-search').removeClass('on');
        dimRemove();
        bodyAuto();
    })
    
    if ($(window).width() < 1280) {
        var mMenu = $('#header .gnb-wrap #gnb > ul > li');

        /* 헤더 > 모바일 메뉴 화살표 추가 */
        $.each(mMenu, function(index, obj){
            if($(obj).children('.depth01').length >= 1){
                $(obj).addClass('arr');
            }
        });

        /* 헤더 > 모바일 메뉴 토글 */
        mMenu.click(function(){
            $(this).toggleClass('on');
            $(this).siblings('li').removeClass('on');
        });

        $('.tbl-wrap.scroll-wrap').scroll(function(){
            var scrollValue = $(this).scrollLeft(); 

            if(scrollValue > 0){
                $(this).addClass('on');
            } else if(scrollValue == 0){
                $(this).removeClass('on');
            }
        });
    }

    $(window).resize(function () {
        if ($(window).width() < 1280) {
            var mMenu = $('#header .gnb-wrap #gnb > ul > li');
    
            /* 리사이즈시 : 헤더 > 모바일 메뉴 화살표 추가 */
            $.each(mMenu, function(index, obj){
                if($(obj).children('.depth01').length >= 1){
                    $(obj).addClass('arr');
                }
            });
    
            /* 리사이즈시 : 헤더 > 모바일 메뉴 토글 */
            mMenu.click(function(){
                $(this).toggleClass('on');
                $(this).siblings('li').removeClass('on');
            });
        }
    });
});

// 메뉴열기
function menuOpen(){
    $('#header .gnb-wrap #gnb').addClass('on');
    dimMaker();
    bodyHidden();
}

// 메뉴닫기
function menuClose() {
    $('#header .gnb-wrap #gnb').removeClass('on');
    dimRemove();
    bodyAuto();
}

// dim 생성
function dimMaker() {
    $('body').append('<div class="dim"></div>');
}

// dim 제거
function dimRemove() {
    $('.dim').remove();
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
}

/* 이미지 자동변환 */
function imgChange(object) {
    $(object).each(function () {
        var srcName = $(this).attr('data-pc');
        var newSrc = $(this).attr('data-mobile');
        if ($(window).width() < 1280) {
            $(this).attr('src', newSrc);
        } else {
            $(this).attr('src', srcName);
        }

    });
}

// 탭 클릭시 컨텐츠 보여지기
function tab(){
    $('.tab-wrap .tab-btn li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    
        var tab = $(this).closest(".tab-wrap").find('li.on').children('a').attr('data-tab');
    
        $(this).closest(".tab-wrap").children('.tab-cont-wrap').children(".tab-content[data-tab='"+ tab + "']").show();
        $(this).closest(".tab-wrap").children('.tab-cont-wrap').children(".tab-content[data-tab='"+ tab + "']").not().siblings('.tab-content').hide();
    });    
}
