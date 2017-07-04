/**
 * 定制房：我要报名
 */
$(function () {
    /* 选择支付方式 */
    $('.pay-list>li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*选择意向户型*/
    sliders(0);
    $('.house-type-content>li').click(function () {
        var page = $('.page-wrap .dz-house-type');
        $(this).addClass('active').siblings().removeClass('active');

        var inx = $(this).index();
        page.eq(inx).addClass('active').siblings().removeClass('active');
        sliders(inx);//sliders
    });
})

/*选择意向户型sliders*/
function sliders(inx) {
    var nav = $('.slider-r').eq(inx);
    var sync = $('.carousel-r').eq(inx);

    $('.carousel-r').eq(inx).flexslider({
        prevText: '',
        nextText: '',
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        maxItems: 5,
        slideshow: false,
        itemWidth: 128,
        itemMargin: 11,
        asNavFor: nav
    });
    $('.slider-r').eq(inx).flexslider({
        prevText: '',
        nextText: '',
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        slideshow: false,
        sync: sync
    });
}

