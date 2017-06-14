$(function () {
    /*
     *下拉选择框
     * */
    $(".select-box").hover(function () {
        $(this).find("ul").show();
    }, function () {
        $(this).find("ul").hide();
    });

    $(".select-box ul li").click(function () {
        var selectVlaue = $(this).attr("value");
        var selectText = $(this).html();

        var obj = $(this).parents(".select-box");

        obj.find(".form-control").html(selectText);
        obj.find("input").val(selectVlaue);
        obj.find("ul").hide();
    });

    /*
     * tab切换
     * */
    $('.menu-tab>.tab,.menu-tab2>.tab').click(function () {
        var self = $(this),
            inx = self.index();
        self.addClass('active').siblings().removeClass('active');
        $('.tab-box,.tab-box2').eq(inx).addClass('active').siblings().removeClass('active');
    });
});


/*
 *电话号码验证
 * @phone 手机号码
 * */
function is_mobile(phone) {
    var flag = false;
//    var reg0 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;   //判断 固话
    var reg1 = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/;                     //判断 手机
//    if (reg0.test(phone)) {
//        flag = true;
//    }
    if (reg1.test(phone)) {
        flag = true;
    }
    if (!flag) {
        return false;
    } else {
        return true;
    }
}

/*
 *邮箱格式验证
 * @emails 邮箱地址
 * */
function is_email(emails) {
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var email = emails.match(reg);
    if (email != null) {
        return true;  //正确
    } else {
        return false; //错误
    }
}
