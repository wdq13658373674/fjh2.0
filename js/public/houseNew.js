/**
 * 定制房：我要报名，我要定制公共js
 */
$(function(){
    /*
    * 1、我要报名
    * 选择支付方式
    * */
    $('.pay-list>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*选择意向户型*/
    sliders(0);
    $('.house-type-content>li').click(function(){
        var page=$('.page-wrap .dz-house-type');
        $(this).addClass('active').siblings().removeClass('active');

        var inx=$(this).index();
        page.eq(inx).addClass('active').siblings().removeClass('active');
        sliders(inx);//sliders
    });

    /*协议同意验证*/
    /*$('#rule').click(function(){
     if(!this.checked){
     $('.Validform_wrong').show();
     }else{
     $('.Validform_wrong').hide();
     }
     });*/


    /*
    * 2、我要定制
    * 选定此房源
    * */
    $('.table .select-btn').click(function(){
        $('.table tr').removeClass('active');
        $(this).parents('tr').addClass('active');
    });

    /*房源表tab切换*/
    sliders2();
    $('.menu-tab2 .tab').click(function(){
        var inx=$(this).data('data-value')
            ,mark=$('.house-mark .mark')
            ,num=$('.house-num-list li')
            ,slider=$('.num-slider .flex-control-nav>li a');


        /*楼栋超出滚动*/
        var n= parseInt(inx / 6);
        $('#thumbs .flex-control-nav>li a').eq(n).click();
        $('.num-slider .flex-control-nav>li a').eq(inx).click();

        /*连带样式*/
        num.eq(inx).addClass('active').siblings().removeClass('active');
        mark.eq(inx).addClass('active').siblings().removeClass('active');
        sliders2();
    });
})

/*选择意向户型sliders*/
function sliders(inx){
    var nav=$('.slider-r').eq(inx);
    var sync=$('.carousel-r').eq(inx);

    $('.carousel-r').eq(inx).flexslider({
        prevText:'',
        nextText:'',
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        maxItems:5,
        slideshow: false,
        itemWidth: 128,
        itemMargin: 11,
        asNavFor: nav
    });
    $('.slider-r').eq(inx).flexslider({
        prevText:'',
        nextText:'',
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        slideshow: false,
        sync: sync
    });
}

/*选择楼栋房源sliders*/
function sliders2(){
    $('#thumbs').flexslider({
        prevText:'',
        nextText:'',
        animation: "slide",
        controlNav: true,
        animationLoop: false,
        maxItems:6,
        directionNav: true,
        slideshow: false,
        itemWidth: 62,
        itemMargin: 0
    });
    $('.num-slider').flexslider({
        prevText:'',
        nextText:'',
        animation: "slide",
        controlNav: true,
        directionNav: false,
        animationLoop: false,
        slideshow: false
    });
}