$(function () {
    /**
     * 定制房：我要报名
     */
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
        sliders(inx);//sliders切换
    });


    /**
     * 定制房：定制选房，认筹选房
     * 楼栋选择切换
     */
    //选择楼栋
    sliders2();
    $('#floor .tab').click(function () {
        var inx = $(this).index()
            , mark = $('.house-mark .mark')
            , slider = $('.num-slider .flex-control-nav>li a');

        //房源表切换
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-box2').eq(inx).addClass('active').siblings().removeClass('active');

        mark.eq(inx).addClass('active').siblings().removeClass('active');//房源图标注切换
        slider.eq(inx).click();//slider切换

        sliders2();
    });

    //选定此房源
    $('.table .select-btn').click(function () {
        $('.table tr').removeClass('active');
        $(this).parents('tr').addClass('active');
    });
})

/*选择意向户型*/
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

//楼栋房源信息切换
function sliders2() {
    $('.num-slider').flexslider({
        prevText: '',
        nextText: '',
        animation: "slide",
        controlNav: true,
        directionNav: false,
        animationLoop: false,
        slideshow: false
    });
}

