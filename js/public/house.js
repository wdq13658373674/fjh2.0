/**
 * 定制房：我要报名，我要定制公共js
 */
$(function(){
    /*选择支付方式*/
    $('.pay-list>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*选定此房源*/
    $('.table .select-btn').click(function(){
        $('.table tr').removeClass('active');
        $(this).parents('tr').addClass('active');
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

})

/*sliders*/
function sliders(inx){
    var nav=$('.slider-r').eq(inx);
    var sync=$('.carousel-r').eq(inx);

    $('.carousel-r').eq(inx).flexslider({
        prevText:'',
        nextText:'',
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        maxItems:4,
        slideshow: false,
        itemWidth: 60,
        itemMargin: 3,
        asNavFor: nav
    });
    $('.slider-r').eq(inx).flexslider({
        prevText:'',
        nextText:'',
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: sync
    });
}