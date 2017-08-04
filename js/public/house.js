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
            ,id=$(this).data('value')//楼栋编号
            ,slider = $('.num-slider .flex-control-nav>li a')

        //房源表切换
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-box2').eq(inx).addClass('active').siblings().removeClass('active');

        slider.eq(inx).click();//slider切换
        sliders2();

        markPos(id);//楼栋定位
    });

    //选定此房源
    $('.table .select-btn').click(function () {
        $('.table tr').removeClass('active');
        $(this).parents('tr').addClass('active');
    });
})

/**
 * 选择意向户型
 * */
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

/**
 * 楼栋房源信息切换
 * */
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

/**
 * 房号坐标定位
 * */
function markPos(id){
    var map=$('#map')
        ,imgView=$('#imgView')
        ,mark = $('.house-mark .mark');

    mark.eq(id).addClass('active').siblings().removeClass('active');//房源图标注切换

    /*中点*/
    var centerX=parseInt(map.width() / 2);
    var centerY=parseInt(map.height() / 2);
    /*楼栋坐标*/
    var markX=parseInt(mark.eq(id).css('left'));
    var markY=parseInt(mark.eq(id).css('top'));

    /*定位点*/
    var left=-markX + centerX;
    var top=-markY + centerY;

    /*边界*/
    var maxTop=map.height() - imgView.height();
    var maxLeft=map.width() - imgView.width();

    if(top > 0){
        top=0;
    }else if(top < maxTop){
        top=maxTop;
    }

    if(left > 0){
        left=0;
    }else if(left < maxLeft){
        left=maxLeft;
    }

    imgView.animate({
        left:left + 'px',
        top:top + 'px'
    });
}



